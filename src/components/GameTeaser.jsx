export default function GameTeaser() {
  const tags = ["Coming Soon", "Indie", "Dark Fantasy", "Action"];

  return (
    <section id="game" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Key art placeholder — ancient tome / void portal feel */}
        <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 w-full overflow-hidden border border-[#2a2218]"
          style={{ boxShadow: "0 0 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,0,0,0.6)" }}>
          <div className="absolute inset-0 bg-[#0d0b08]" />

          {/* Parchment texture dots */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #c8b89a 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          {/* Central sigil */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
            {/* Outer octagon-ish shape via borders */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 border border-[#4a7a35]/25 rotate-0" />
              <div className="absolute inset-2 border border-[#4a7a35]/15 rotate-45" />
              <div className="absolute inset-4 border border-[#4a7a35]/20 rotate-0" />
              <div className="w-3 h-3 bg-[#4a7a35]/40 rotate-45" />
            </div>
            <div className="w-px h-12 bg-[#4a7a35]/20" />
            <p className="text-[#6b8f4e]/40 text-xs tracking-[0.4em] uppercase">Key Art Coming Soon</p>
          </div>

          {/* Corner runes */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#4a7a35]/30" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#4a7a35]/30" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#4a7a35]/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#4a7a35]/30" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
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

          <h2 className="text-4xl md:text-5xl font-black text-[#d4c9b0] leading-tight tracking-widest uppercase">
            Gravekeepers
          </h2>

          <div className="w-12 h-px bg-[#4a7a35]/50" />

          <div className="space-y-4 text-[#8a7d6a] leading-relaxed italic">
            <p>
              In a world where the boundary between the living and the dead has worn thin, you are a Gravekeeper — one of the last guardians tasked with maintaining the ancient rites that keep the darkness sealed.
            </p>
            <p>
              But the seals are breaking. And something old is waking up beneath the earth.
            </p>
          </div>

          <div className="pt-2 space-y-4">
            <div>
              <p className="text-[#6b8f4e] text-xs tracking-[0.3em] uppercase font-medium mb-1">Studio</p>
              <p className="text-[#c8b89a] font-semibold tracking-wide">The Marsh Refinery</p>
            </div>
            <div>
              <p className="text-[#6b8f4e] text-xs tracking-[0.3em] uppercase font-medium mb-1">Status</p>
              <p className="text-[#c8b89a] font-semibold tracking-wide">In Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}