import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 700,
  once = true,
  className = "",
}) {
  const ref = useRef(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);

            if (once) {
              observer.unobserve(
                element,
              );
            }
          } else if (!once) {
            setVisible(false);
          }
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -40px 0px",
        },
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  function getTransform() {
    if (visible) {
      return "translate3d(0, 0, 0)";
    }

    if (direction === "down") {
      return `translate3d(0, -${distance}px, 0)`;
    }

    if (direction === "left") {
      return `translate3d(${distance}px, 0, 0)`;
    }

    if (direction === "right") {
      return `translate3d(-${distance}px, 0, 0)`;
    }

    return `translate3d(0, ${distance}px, 0)`;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,

        transform:
          getTransform(),

        transitionProperty:
          "opacity, transform",

        transitionDuration:
          `${duration}ms`,

        transitionDelay:
          `${delay}ms`,

        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",

        willChange:
          "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}