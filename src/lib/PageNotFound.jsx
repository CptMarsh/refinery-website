import { Link, useLocation } from 'react-router-dom';

const Ornament = ({ className = '' }) => (
  <div className={`flex items-center gap-4 opacity-30 ${className}`}>
    <div className="w-16 h-px bg-moss-500" />
    <div className="w-1.5 h-1.5 rotate-45 bg-moss-500" />
    <div className="w-16 h-px bg-moss-500" />
  </div>
);

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden bg-background font-ui">
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

      <h2 className="text-bone-400 text-xl md:text-2xl tracking-widest uppercase mb-8">
        Quoth the Server
      </h2>

      <div className="relative z-10 flex flex-col items-center">
        <Ornament />

        <h1
          className="font-display font-black text-bone-200 leading-none uppercase"
          style={{
            fontSize: 'clamp(4rem, 18vw, 12rem)',
            letterSpacing: '0.08em',
            textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(107,143,78,0.15)',
          }}
        >
          404
        </h1>

        <p className="mt-6 italic text-bone-400">Nothing buried here.</p>

        <Ornament className="mt-6 mb-8" />

        <Link
          to="/"
          className="mt-12 px-16 py-3 border border-moss-600 text-moss-500 hover:bg-moss-600/20 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
