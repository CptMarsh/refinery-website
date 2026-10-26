import { DotDust, Ornament, wideButtonClass } from "./brand";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* Background stack: ink base, trailer, dot dust, 60% black overlay */}
      <div className="absolute inset-0 overflow-hidden bg-ink-page">
        <iframe
          src="https://www.youtube.com/embed/6U25BAluFvc?autoplay=1&mute=1&loop=1&playlist=6U25BAluFvc&controls=0&disablekb=1&modestbranding=1"
          className="absolute inset-0 w-full h-full"
          style={{ border: "none", pointerEvents: "none", transform: "scale(1.5)" }}
          allow="autoplay; fullscreen"
          tabIndex={-1}
          title="Gravekeepers trailer"
        />
        <DotDust />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <Ornament />

        <h1
          className="font-display font-black text-bone-200 uppercase w-full mt-8 mb-4"
          style={{
            fontSize: "clamp(2rem, 9vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "0.08em",
            textShadow: "0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(107,143,78,0.15)"
          }}
        >
          GRAVEKEEPERS
        </h1>

        <Ornament opacity={0.3} />

        <p className="font-body italic text-bone-350 text-2xl leading-[1.45] max-w-[480px] mt-6">
          Make it through the night. Or don't.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href="#gravekeepersgame"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gravekeepersgame')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={wideButtonClass}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30" aria-hidden="true">
        <span className="text-[11px] tracking-wider uppercase text-bone-400">Descend</span>
        <div className="w-px h-10 bg-moss-600" />
      </div>
    </section>
  );
}
