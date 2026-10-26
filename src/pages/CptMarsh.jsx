import { socialLinks } from "@/data/socials";
import { BackgroundLayers, Button, Eyebrow, Mark, Ornament } from "@/components/brand";

const tileClass = "w-full justify-start gap-4 px-5";

export default function CptMarsh() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-background font-ui">
      <BackgroundLayers overlay={false} vignette />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md py-16">
        <Eyebrow className="mb-8">The Marsh Refinery</Eyebrow>

        <Mark className="w-16 h-16 mb-6 text-bone-200" />

        {/* Name */}
        <h1 className="font-display font-black text-h1 text-bone-200 leading-none tracking-wide uppercase">
          Omer Schapiro
        </h1>

        {/* Title */}
        <p className="text-bone-400 text-xs tracking-widest uppercase mt-4">
          Indie Game Dev
        </p>

        <Ornament opacity={0.3} className="my-8" />

        {/* Link stack */}
        <nav className="flex flex-col gap-3 w-full">
          {socialLinks.map(({ label, href, icon }) => (
            <Button
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={tileClass}
            >
              {icon}
              <span>{label}</span>
            </Button>
          ))}

          <Button to="/" className={tileClass}>
            <Mark label={null} className="w-5 h-5" />
            <span>Studio Website</span>
          </Button>
        </nav>

        {/* Copyright */}
        <p className="text-ink-edge text-xs tracking-wider mt-12">
          © {new Date().getFullYear()} The Marsh Refinery.
        </p>
      </div>
    </div>
  );
}
