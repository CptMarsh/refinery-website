import { BackgroundLayers, Button, Ornament } from "@/components/brand";

const TRAILER = "https://www.youtube.com/embed/6U25BAluFvc?autoplay=1&mute=1&loop=1&playlist=6U25BAluFvc&controls=0&disablekb=1&modestbranding=1";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden">
      <BackgroundLayers videoSrc={TRAILER} videoTitle="Gravekeepers trailer" vignette />

      <div className="relative z-10 flex flex-col items-center">
        <Ornament className="mb-8" />

        {/* Game title */}
        <h1 className="font-display font-black text-display text-bone-200 leading-[0.95] tracking-wide uppercase text-shadow-display mb-6 w-full">
          GRAVEKEEPERS
        </h1>

        <Ornament opacity={0.3} className="mt-4 mb-6" />

        {/* Tagline */}
        <p className="font-body italic text-2xl leading-[1.45] text-bone-350 max-w-[480px]">
          Make it through the night. Or don’t.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          {/* <Button href="#wishlist">Add to Wishlist</Button> */}
          <Button
            wide
            href="#gravekeepersgame"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gravekeepersgame')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[11px] tracking-wider uppercase text-bone-400">Descend</span>
        <div className="w-px h-10 bg-moss-600" />
      </div>
    </section>
  );
}
