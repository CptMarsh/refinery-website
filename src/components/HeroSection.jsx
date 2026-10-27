import { Eyebrow, Ornament } from "@/components/brand";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center flex-1 px-6 py-16 text-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full">
        <Ornament className="mb-8" />

        {/* Studio name */}
        <h1 className="font-display font-black text-display text-bone-200 leading-[0.95] tracking-wide uppercase mb-6 w-full">
          THE MARSH REFINERY
        </h1>

        <Ornament opacity={0.3} className="mb-6" />

        <Eyebrow>Indie Game Studio</Eyebrow>
      </div>
    </section>
  );
}
