import { Link } from "react-router-dom";
import { socialLinks } from "@/data/socials";

const Ornament = ({ className = "" }) => (
  <div className={`flex items-center gap-4 opacity-30 ${className}`}>
    <div className="w-16 h-px bg-moss-500" />
    <div className="w-1.5 h-1.5 rotate-45 bg-moss-500" />
    <div className="w-16 h-px bg-moss-500" />
  </div>
);

const BarrelIcon = () => (
  <span
    role="img"
    aria-label="The Marsh Refinery"
    className="inline-block w-5 h-5 shrink-0"
    style={{
      backgroundColor: "currentColor",
      WebkitMaskImage: `url(${import.meta.env.BASE_URL}studio-barrel.png)`,
      maskImage: `url(${import.meta.env.BASE_URL}studio-barrel.png)`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const tileClass =
  "flex items-center gap-4 w-full py-3 px-5 border border-moss-600 text-moss-500 hover:bg-moss-600/20 transition-all duration-300 text-sm font-semibold tracking-widest uppercase";

export default function CptMarsh() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-background font-ui">

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #c8b89a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, #000 100%)" }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md py-16">

        {/* Eyebrow */}
        <p className="text-moss-500 text-xs tracking-ritual uppercase mb-8 font-medium">
          The Marsh Refinery
        </p>

        {/* Barrel mark */}
        <span
          role="img"
          aria-label="The Marsh Refinery"
          className="inline-block w-16 h-16 mb-6 text-bone-200"
          style={{
            backgroundColor: "#d4c9b0",
            WebkitMaskImage: `url(${import.meta.env.BASE_URL}studio-barrel.png)`,
            maskImage: `url(${import.meta.env.BASE_URL}studio-barrel.png)`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />

        {/* Name */}
        <h1
          className="font-display font-black text-bone-200 leading-none uppercase"
          style={{
            fontSize: "clamp(1.75rem, 6vw, 3rem)",
            letterSpacing: "0.08em",
            textShadow: "0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(107,143,78,0.15)",
          }}
        >
          Omer Schapiro
        </h1>

        {/* Title */}
        <p className="text-bone-400 text-xs tracking-widest uppercase mt-4">
          Indie Game Dev
        </p>

        {/* Bio */}
        <p className="font-body text-bone-400 text-base leading-relaxed italic mt-4 max-w-sm">
          Building Gravekeepers. Make it through the night — or don't.
        </p>

        {/* Ornament */}
        <Ornament className="my-8" />

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
            <BarrelIcon />
            <span>Studio Website</span>
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-[#2a2218] text-xs tracking-wider mt-12">
          © {new Date().getFullYear()} The Marsh Refinery.
        </p>
      </div>
    </div>
  );
}
