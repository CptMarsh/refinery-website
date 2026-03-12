export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#080808]">
        {/* Background video */}
        <iframe
          src="https://www.youtube.com/embed/6U25BAluFvc?autoplay=1&mute=1&loop=1&playlist=6U25BAluFvc&controls=0&disablekb=1&modestbranding=1"
          className="absolute inset-0 w-full h-full"
          style={{ border: "none", pointerEvents: "none", transform: "scale(1.5)" }}
          allow="autoplay; fullscreen"
          title="Gravekeepers trailer"
        />

        {/* Dot texture */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #c8b89a 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Faint vignette */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, #000 100%)" }}
      />

      <div className="relative z-10 flex flex-col items-center">

        {/* Ornamental rule */}
        <div className="flex items-center gap-4 mb-8 opacity-40">
          <div className="w-16 h-px bg-[#6b8f4e]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#6b8f4e]" />
          <div className="w-16 h-px bg-[#6b8f4e]" />
        </div>

        {/* Game title */}
        <h1
          className="font-black text-[#d4c9b0] leading-none mb-6 uppercase w-full"
          style={{
            fontSize: "clamp(2rem, 9vw, 9rem)",
            letterSpacing: "0.08em",
            textShadow: "0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(107,143,78,0.15)"
          }}
        >
          GRAVEKEEPERS
        </h1>

        {/* Ornamental rule */}
        <div className="flex items-center gap-4 mt-4 mb-6 opacity-30">
          <div className="w-16 h-px bg-[#6b8f4e]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#6b8f4e]" />
          <div className="w-16 h-px bg-[#6b8f4e]" />
        </div>

        {/* Tagline */}
        <p className="text-[#8a7d6a] text-base md:text-lg max-w-md leading-relaxed italic">
          Make it through the night. Or don't.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          {/* <a
            href="#wishlist"
            className="px-8 py-3 border border-[#4a7a35] text-[#6b8f4e] hover:bg-[#4a7a35]/20 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
          >
            Add to Wishlist
          </a> */}
          <a
            href="#gravekeepersgame"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gravekeepersgame')?.scrollIntoView({ behavior: 'smooth' });
            }}
            // className="px-8 py-3 border border-[#3a3028] text-[#8a7d6a] hover:border-[#5a4f44] hover:text-[#c8b89a] font-semibold tracking-widest uppercase text-sm transition-all duration-300"
            className="px-16 py-3 border border-[#4a7a35] text-[#6b8f4e] hover:bg-[#4a7a35]/20 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs tracking-widest uppercase text-[#8a7d6a]">Descend</span>
        <div className="w-px h-10 bg-[#4a7a35]" />
      </div>
    </section>
  );
}
