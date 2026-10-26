import { Link } from "react-router-dom";
import { socialLinks } from "@/data/socials";
import { BarrelMark, DotDust, Ornament, eyebrowClass } from "@/components/brand";

const tileClass =
  "flex items-center gap-4 w-full py-3 px-5 border border-moss-600 text-moss-500 hover:bg-moss-600/20 transition-all duration-300 text-[13px] font-semibold tracking-wider uppercase";

export default function CptMarsh() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-background font-ui">

      <DotDust />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md py-16">

        {/* Eyebrow */}
        <p className={`${eyebrowClass} mb-8`}>
          The Marsh Refinery
        </p>

        {/* Barrel mark */}
        <BarrelMark className="w-16 h-16 mb-6 text-bone-200" />

        {/* Name */}
        <h1
          className="font-display font-black text-bone-200 leading-none uppercase"
          style={{
            fontSize: "clamp(1.75rem, 6vw, 3rem)",
            letterSpacing: "0.08em",
          }}
        >
          Omer Schapiro
        </h1>

        {/* Title */}
        <p className="text-bone-400 text-xs tracking-widest uppercase mt-4">
          Indie Game Dev
        </p>

        {/* Ornament */}
        <Ornament opacity={0.3} className="my-8" />

        {/* Link stack */}
        <nav className="flex flex-col gap-3 w-full">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={tileClass}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}

          <Link to="/" className={tileClass}>
            <BarrelMark className="w-5 h-5" label="" />
            <span>Studio Website</span>
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-ink-edge text-[11px] tracking-[0.04em] mt-12">
          © {new Date().getFullYear()} The Marsh Refinery.
        </p>
      </div>
    </div>
  );
}
