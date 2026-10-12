import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Label as Label$1, require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { cva } from "../_libs/class-variance-authority+clsx.mjs";
import { cn } from "./server-fns-D7ymjI7_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/label-DY020iIz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn([
			"flex",
			"h-10",
			"w-full",
			"rounded-none",
			"border",
			"border-border/60",
			"bg-background/20",
			"px-3",
			"py-2",
			"text-base",
			"text-foreground",
			"shadow-none",
			"transition-all",
			"duration-300",
			"file:border-0",
			"file:bg-transparent",
			"file:text-sm",
			"file:font-medium",
			"file:text-foreground",
			"placeholder:text-muted-foreground/50",
			"hover:border-border",
			"focus-visible:border-primary/55",
			"focus-visible:outline-none",
			"focus-visible:ring-1",
			"focus-visible:ring-primary/40",
			"focus-visible:ring-offset-0",
			"disabled:cursor-not-allowed",
			"disabled:opacity-50",
			"md:text-sm"
		].join(" "), className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Label$1.displayName;
//#endregion
export { Input, Label };
