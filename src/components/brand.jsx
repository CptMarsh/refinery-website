import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Brand primitives from The Marsh Refinery design system (components/bundle.js).
// Note: don't pass the custom text-display / text-h1 sizes through cn — tailwind-merge
// reads them as colours and can drop them.

/** @typedef {{ className?: string, children?: import("react").ReactNode }} SlotProps */

/** @param {{ width?: number, opacity?: number, className?: string }} props */
export const Ornament = ({ width = 64, opacity = 0.4, className }) => (
  <div aria-hidden="true" className={cn("flex items-center gap-4", className)} style={{ opacity }}>
    <div className="h-px bg-moss-500" style={{ width }} />
    <div className="w-1.5 h-1.5 rotate-45 bg-moss-500" />
    <div className="h-px bg-moss-500" style={{ width }} />
  </div>
);

const buttonVariants = {
  primary: "border-moss-600 text-moss-500 hover:bg-moss-600/20",
  ghost: "border-ink-edge-2 text-bone-400 hover:border-ink-edge-4 hover:text-bone-300",
};

// Renders a <button> when `type` is set, a router <Link> when `to` is set, else an <a>.
/**
 * @param {{ variant?: keyof typeof buttonVariants, wide?: boolean, to?: string, type?: "button" | "submit" | "reset" }
 *   & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type">} props
 */
export const Button = ({ variant = "primary", wide = false, to, type, className, ...props }) => {
  const classes = cn(
    "inline-flex items-center justify-center py-3 border rounded-none font-ui font-semibold text-[13px] tracking-wider uppercase transition-colors duration-300",
    wide ? "px-16" : "px-8",
    buttonVariants[variant],
    className
  );

  if (type) return <button type={type} className={classes} {...props} />;
  if (to) return <Link to={to} className={classes} {...props} />;
  return <a className={classes} {...props} />;
};

/** @param {SlotProps} props */
export const Tag = ({ className, children }) => (
  <span className={cn("inline-block px-3 py-1 border border-moss-700 text-[11px] tracking-wider uppercase text-moss-500", className)}>
    {children}
  </span>
);

/** @param {SlotProps} props */
export const Eyebrow = ({ className, children }) => (
  <p className={cn("text-xs font-medium tracking-ritual uppercase text-moss-500", className)}>
    {children}
  </p>
);

/** @param {SlotProps} props */
export const MetaLabel = ({ className, children }) => (
  <p className={cn("mb-1 text-[11px] font-medium tracking-widest uppercase text-moss-500", className)}>
    {children}
  </p>
);

/** @param {import("react").ComponentPropsWithoutRef<"a">} props */
export const TextLink = ({ className, ...props }) => (
  <a
    className={cn(
      "w-fit text-[11px] tracking-wider uppercase text-bone-300 underline underline-offset-4 decoration-moss-600/40 hover:decoration-moss-600 transition-colors duration-300",
      className
    )}
    {...props}
  />
);

// Signature showcase stack: ink-page base, optional muted video, dot dust, black overlay.
// Place inside a `relative` container.
/** @param {{ videoSrc?: string, videoTitle?: string, overlay?: boolean }} props */
export const BackgroundLayers = ({ videoSrc, videoTitle = "Background video", overlay = true }) => (
  <>
    <div className="absolute inset-0 overflow-hidden bg-ink-page pointer-events-none">
      {videoSrc && (
        <iframe
          src={videoSrc}
          title={videoTitle}
          allow="autoplay; fullscreen"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-150"
        />
      )}
      <div className="absolute inset-0 bg-dust opacity-texture" />
    </div>
    {overlay && <div className="absolute inset-0 bg-black opacity-overlay pointer-events-none" />}
  </>
);

const markUrl = `url(${import.meta.env.BASE_URL}studio-barrel.png)`;
const markStyle = {
  WebkitMaskImage: markUrl,
  maskImage: markUrl,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
};

// The barrel-and-tentacles mark, tinted by the text colour. Pass label={null} when text next to it names the studio.
/** @param {{ className?: string, label?: string | null }} props */
export const Mark = ({ className, label = "The Marsh Refinery" }) => (
  <span
    role={label ? "img" : undefined}
    aria-label={label || undefined}
    aria-hidden={label ? undefined : true}
    className={cn("inline-block shrink-0 bg-current", className)}
    style={markStyle}
  />
);
