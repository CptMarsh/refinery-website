import { BackgroundLayers, Button, Eyebrow, Ornament } from '@/components/brand';

export default function PageNotFound() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-x-hidden bg-background font-ui">
      <BackgroundLayers overlay={false} />

      <div className="relative z-10 flex flex-col items-center">
        <Eyebrow className="mb-8">Quoth the Server</Eyebrow>

        <Ornament opacity={0.3} className="mb-6" />

        <h1 className="font-display font-black text-[length:clamp(4rem,18vw,12rem)] text-bone-200 leading-none uppercase">
          404
        </h1>

        <Ornament opacity={0.3} className="mt-6 mb-8" />

        <Button to="/" wide className="mt-12">
          Return Home
        </Button>
      </div>
    </section>
  );
}
