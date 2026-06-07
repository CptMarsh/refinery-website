import { Link, useLocation } from 'react-router-dom';

const Ornament = ({ className = '' }) => (
  <div className={`flex items-center gap-4 opacity-30 ${className}`}>
    <div className="w-16 h-px bg-[#6b8f4e]" />
    <div className="w-1.5 h-1.5 rotate-45 bg-[#6b8f4e]" />
    <div className="w-16 h-px bg-[#6b8f4e]" />
  </div>
);

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden bg-[#080808]">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c8b89a 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Faint vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, #000 100%)' }}
      />

      <h2 className="text-[#8a7d6a] text-xl md:text-2xl tracking-widest uppercase mb-8">
        Quoth the Raven
      </h2>

      <div className="relative z-10 flex flex-col items-center">
        <Ornament />

        <h1
          className="font-black text-[#d4c9b0] leading-none uppercase"
          style={{
            fontSize: 'clamp(4rem, 18vw, 12rem)',
            letterSpacing: '0.08em',
            textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(107,143,78,0.15)',
          }}
        >
          404
        </h1>

        <Ornament className="mt-6 mb-8" />

        <Link
          to="/"
          className="mt-12 px-16 py-3 border border-[#4a7a35] text-[#6b8f4e] hover:bg-[#4a7a35]/20 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
