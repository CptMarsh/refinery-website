export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden bg-[#080808]">
        <iframe
          src="https://www.youtube.com/embed/TJNNe4ZapG4?autoplay=1&mute=1&loop=1&playlist=TJNNe4ZapG4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.78vh",
            pointerEvents: "none",
            border: "none",
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Faint vignette */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, #000 100%)" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Studio label */}
        {/* <p className="text-[#6b8f4e] text-xs tracking-[0.4em] uppercase mb-8 font-medium"
          style={{ fontVariant: "small-caps" }}>
          The Marsh Refinery Presents
        </p> */}

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
          {/* <br />
          <span className="text-[#4a7a35]">KEEPERS</span> */}
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
          <a
            href="#wishlist"
            className="px-8 py-3 border border-[#4a7a35] text-[#6b8f4e] hover:bg-[#4a7a35]/20 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
          >
            Add to Wishlist
          </a>
          <a
            href="#game"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('game')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border border-[#3a3028] text-[#8a7d6a] hover:border-[#5a4f44] hover:text-[#c8b89a] font-semibold tracking-widest uppercase text-sm transition-all duration-300"
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