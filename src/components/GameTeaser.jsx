export default function GameTeaser() {
  const tags = ["Co-op", "Horror"];

  return (
    <section id="gravekeepersgame" className="relative py-24 px-6 md:px-12">
      {/* Star-dust dot texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #c8b89a 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Key art */}
        <div className="relative max-w-sm mx-auto md:mx-0 w-full overflow-hidden border border-[#2a2218]"
          style={{ boxShadow: "0 0 60px rgba(0,0,0,0.8)" }}>
          <img src="/gk-preview.png" alt="Gravekeepers key art" className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-transparent text-[#6b8f4e] border border-[#2a3a20] tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2
            className="font-black text-[#d4c9b0] leading-tight uppercase"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", letterSpacing: "0.08em" }}
          >
            Gravekeepers
          </h2>

          <div className="w-12 h-px bg-[#4a7a35]/50" />

          <div className="space-y-2 text-[#8a7d6a] leading-relaxed italic">
            <p>
              You are maintenance workers in a haunted graveyard.
            </p>
            <p>
              Do your job, survive the night, extract alive.
            </p>
            <p>
              But don't worry - even if you die, you're still in the game!
            </p>
          </div>

          <div className="pt-2 space-y-4">
            <div>
              <p className="text-[#6b8f4e] text-xs tracking-[0.3em] uppercase font-medium mb-1">Status</p>
              <p className="text-[#c8b89a] font-semibold tracking-wide">Seeking funding</p>
            </div>

            <div>
              <p className="text-[#6b8f4e] text-xs tracking-[0.3em] uppercase font-medium mb-3">Links</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://marsh-refinery.itch.io/gravekeepers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#c8b89a] tracking-widest uppercase underline underline-offset-4 decoration-[#4a7a35]/40 hover:decoration-[#4a7a35] transition-colors w-fit"
                >
                  Playable build on itch.io
                </a>
                <a
                  href="/gravekeepers-pitch-deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#c8b89a] tracking-widest uppercase underline underline-offset-4 decoration-[#4a7a35]/40 hover:decoration-[#4a7a35] transition-colors w-fit"
                >
                  Pitch Deck
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}