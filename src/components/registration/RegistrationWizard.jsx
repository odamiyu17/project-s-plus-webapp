import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";
import ContactFields from "@/components/registration/ContactFields";
import MlbbFields from "@/components/registration/MlbbFields";
import RealmStep from "@/components/registration/RealmStep";
import SuccessPanel from "@/components/registration/SuccessPanel";
import TekkenFields from "@/components/registration/TekkenFields";
import { Button } from "@/components/ui/button";
import { submitRegistration } from "@/lib/server-fns";

const EMPTY_VALUES = {
  team_name: "",
  team_tag: "",
  region: "",
  player_name: "",
  in_game_id: "",
  contact_name: "",
  contact_email: "",
  contact_phone: "",
  discord: "",
};
const EMPTY_ROSTER = Array.from({ length: 5 }, () => ({ ign: "", game_id: "", role: "" }));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const compact = (source) =>
  Object.fromEntries(Object.entries(source).filter(([, value]) => value !== "" && value !== null && value !== undefined));

export default function RegistrationWizard() {
  const submit = useServerFn(submitRegistration);
  const [game, setGame] = useState(null);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(EMPTY_VALUES);
  const [roster, setRoster] = useState(EMPTY_ROSTER);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!result) return;
    import("canvas-confetti").then(({ default: confetti }) => {
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#D4AF37", "#A38953", "#1F302D", "#F2F5F4"],
      });
    });
    base44.analytics.track({ eventName: "tournament_registration_submitted", properties: { game } });
  }, [result, game]);

  const change = (key) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const changeRoster = (index, key, value) => {
    setRoster((prev) => prev.map((player, i) => (i === index ? { ...player, [key]: value } : player)));
    setErrors((prev) => ({ ...prev, [`${key}_${index}`]: undefined }));
  };

  function identityErrors() {
    const next = {};
    if (game === "mlbb") {
      if (values.team_name.trim().length < 2) next.team_name = "Enter your team name";
      if (values.team_tag.trim().length < 2) next.team_tag = "Enter a 2–6 character tag";
      roster.forEach((player, index) => {
        if (!player.ign.trim()) next[`ign_${index}`] = "Required";
        if (!player.game_id.trim()) next[`game_id_${index}`] = "Required";
      });
    } else {
      if (values.player_name.trim().length < 2) next.player_name = "Enter your full name";
      if (!values.in_game_id.trim()) next.in_game_id = "Enter your in-game ID";
    }
    return next;
  }

  function contactErrors() {
    const next = {};
    if (values.contact_name.trim().length < 2) next.contact_name = "Enter a name we can reach";
    if (!EMAIL_RE.test(values.contact_email.trim())) next.contact_email = "Enter a valid email address";
    return next;
  }

  function goNext() {
    const next = step === 1 ? identityErrors() : {};
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setStep((current) => current + 1);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (step < 2) {
      goNext();
      return;
    }
    const invalid = contactErrors();
    if (Object.keys(invalid).length) {
      setErrors(invalid);
      return;
    }

    setBusy(true);
    try {
      const shared = compact({
        region: values.region.trim(),
        contact_name: values.contact_name.trim(),
        contact_email: values.contact_email.trim(),
        contact_phone: values.contact_phone.trim(),
        discord: values.discord.trim(),
      });
      const payload =
        game === "mlbb"
          ? {
              game,
              ...shared,
              ...compact({ team_name: values.team_name.trim(), team_tag: values.team_tag.trim().toUpperCase() }),
              roster: roster.map((player) =>
                compact({ ign: player.ign.trim(), game_id: player.game_id.trim(), role: player.role }),
              ),
            }
          : {
              game,
              ...shared,
              ...compact({ player_name: values.player_name.trim(), in_game_id: values.in_game_id.trim() }),
            };

      const created = await submit({ data: payload });
      setResult(created);
    } catch (error) {
      toast.error(error?.message || "We couldn't submit your entry. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (result) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <SuccessPanel game={game} reference={result.reference_code} />
      </div>
    );
  }

  const labels = ["Realm", game === "tekken8" ? "Fighter" : "Squad", "Contact"];

  return (
    <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-8 sm:pt-16">
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.26em] sm:text-[11px]">
        {labels.map((label, index) => (
          <li key={label} className="flex items-center gap-3">
            <span className={index <= step ? "text-primary" : "text-muted-foreground"}>
              {String(index + 1).padStart(2, "0")} {label}
            </span>
            {index < labels.length - 1 ? (
              <span className={index < step ? "h-px w-6 bg-primary sm:w-10" : "h-px w-6 bg-border sm:w-10"} />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-6 h-px w-full bg-border">
        <div className="h-px bg-primary transition-all duration-500" style={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>

      <form onSubmit={handleSubmit} className="mt-10 border border-border/80 bg-card/60 p-5 sm:p-8">
        {step === 0 ? (
          <RealmStep
            value={game}
            onSelect={(realm) => {
              setGame(realm);
              setErrors({});
              setStep(1);
            }}
          />
        ) : null}

        {step === 1 && game === "mlbb" ? (
          <MlbbFields values={values} roster={roster} errors={errors} onChange={change} onRosterChange={changeRoster} />
        ) : null}

        {step === 1 && game === "tekken8" ? (
          <TekkenFields values={values} errors={errors} onChange={change} />
        ) : null}

        {step === 2 ? <ContactFields values={values} errors={errors} onChange={change} game={game} /> : null}

        {step > 0 ? (
          <div className="mt-8 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setErrors({});
                setStep((current) => current - 1);
              }}
              className="h-12 justify-start rounded-none px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            {step === 1 ? (
              <Button
                type="button"
                onClick={goNext}
                className="h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em]"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={busy}
                className="h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em]"
              >
                {busy ? "Transmitting…" : "Submit entry"} <Send className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        ) : null}
      </form>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        No account needed — staff verify every entry before it goes live.
      </p>
    </div>
  );
}