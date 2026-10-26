// Shared atoms from The Marsh Refinery design system (Ornament, mark, dot dust)
// and the class strings for its Button, Eyebrow, MetaLabel, Tag and Link styles.

export const buttonClass =
  "inline-flex items-center justify-center px-8 py-3 border border-moss-600 text-moss-500 hover:bg-moss-600/20 font-semibold text-[13px] tracking-wider uppercase transition-all duration-300";
export const wideButtonClass = buttonClass.replace("px-8", "px-16");

export const eyebrowClass = "text-moss-500 text-xs font-medium tracking-ritual uppercase";
export const metaClass = "text-moss-500 text-[11px] font-medium tracking-widest uppercase";
export const tagClass = "inline-block px-3 py-1 text-[11px] text-moss-500 border border-moss-700 tracking-wider uppercase";
export const linkClass =
  "w-fit text-[11px] text-bone-300 tracking-wider uppercase underline underline-offset-4 decoration-moss-600/40 hover:decoration-moss-600 transition-colors duration-300";

// hairline · rotated square · hairline
export function Ornament({ width = 64, opacity = 0.4, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} style={{ opacity }} aria-hidden="true">
      <div className="h-px bg-moss-500" style={{ width }} />
      <div className="w-1.5 h-1.5 rotate-45 bg-moss-500" />
      <div className="h-px bg-moss-500" style={{ width }} />
    </div>
  );
}

// The barrel mark, tinted through currentColor (text-bone-200 = cream, text-bone-400 = gray)
export function BarrelMark({ className = "", label = "The Marsh Refinery" }) {
  const url = `url(${import.meta.env.BASE_URL}studio-barrel.png)`;
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={`inline-block shrink-0 ${className}`}
      style={{
        backgroundColor: "currentColor",
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

// Dot dust: 1px bone-300 dot on a 40px tile at 6% (.dot-dust in index.css)
export function DotDust() {
  return <div className="dot-dust absolute inset-0 pointer-events-none" aria-hidden="true" />;
}
