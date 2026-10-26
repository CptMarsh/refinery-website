import { Link } from 'react-router-dom';
import { DotDust, Ornament, eyebrowClass, wideButtonClass } from '@/components/brand';

export default function PageNotFound() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden bg-background font-ui">
      <DotDust />

      <div className="relative z-10 flex flex-col items-center">
        <p className={`${eyebrowClass} mb-8`}>Quoth the Server</p>

        <Ornament opacity={0.3} />

        <h1
          className="font-display font-black text-bone-200 leading-none uppercase"
          style={{
            fontSize: 'clamp(4rem, 18vw, 12rem)',
            letterSpacing: '0.08em',
          }}
        >
          404
        </h1>

        <Ornament opacity={0.3} className="mt-6 mb-6" />

        <p className="font-body italic text-bone-350 text-2xl leading-[1.45]">
          Nothing buried here.
        </p>

        <Link to="/" className={`${wideButtonClass} mt-12`}>
          Return Home
        </Link>
      </div>
    </section>
  );
}
