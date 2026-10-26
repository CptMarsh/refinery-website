import StudioFooter from "../components/StudioFooter";
import { BackgroundLayers, Eyebrow, Ornament } from "@/components/brand";

export default function ComingSoon() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground font-ui">
      <div className="relative flex flex-col items-center justify-center flex-1 px-6 text-center overflow-hidden">
        <BackgroundLayers overlay={false} vignette />

        <div className="relative z-10 flex flex-col items-center w-full">
          <Eyebrow className="mb-8">The Marsh Refinery</Eyebrow>

          <Ornament className="mb-8" />

          {/* Heading */}
          <h1 className="font-display font-black text-display text-bone-200 leading-[0.95] tracking-wide uppercase mb-6 w-full">
            GRAVEKEEPERS
          </h1>

          <Ornament opacity={0.3} className="mb-6" />

          {/* Tagline */}
          <p className="font-body italic text-2xl leading-[1.45] text-bone-350 max-w-[480px] mb-4">
            Make it through the night. Or don’t.
          </p>

          <Eyebrow className="mb-12">Coming Soon</Eyebrow>
        </div>
      </div>
      <StudioFooter />
    </div>
  );
}
