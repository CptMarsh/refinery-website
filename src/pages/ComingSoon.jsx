import StudioFooter from "../components/StudioFooter";

export default function ComingSoon() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#080808]">
      <div className="relative flex flex-col items-center justify-center flex-1 px-6 text-center overflow-hidden">

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #c8b89a 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, #000 100%)" }}
        />

        <div className="relative z-10 flex flex-col items-center w-full">

          {/* Studio name */}
          <p className="text-[#6b8f4e] text-xs tracking-[0.4em] uppercase mb-8 font-medium">
            The Marsh Refinery
          </p>

          {/* Top ornamental rule */}
          <div className="flex items-center gap-4 mb-8 opacity-40">
            <div className="w-16 h-px bg-[#6b8f4e]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#6b8f4e]" />
            <div className="w-16 h-px bg-[#6b8f4e]" />
          </div>

          {/* Heading */}
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

          {/* Bottom ornamental rule */}
          <div className="flex items-center gap-4 mb-6 opacity-30">
            <div className="w-16 h-px bg-[#6b8f4e]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#6b8f4e]" />
            <div className="w-16 h-px bg-[#6b8f4e]" />
          </div>

          {/* Tagline */}
          <p className="text-[#8a7d6a] text-base md:text-lg max-w-md leading-relaxed italic mb-4">
            Make it through the night. Or don't.
          </p>

          {/* Coming soon label */}
          <p className="text-[#6b8f4e] text-xs tracking-[0.4em] uppercase font-medium mb-12">
            Coming Soon
          </p>
        </div>
      </div>
      <StudioFooter />
    </div>
  );
}
