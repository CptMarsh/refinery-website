import StudioFooter from "../components/StudioFooter";
import { DotDust, Ornament, eyebrowClass } from "../components/brand";

export default function ComingSoon() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground font-ui">
      <div className="relative flex flex-col items-center justify-center flex-1 px-6 text-center overflow-hidden">
        <DotDust />

        <div className="relative z-10 flex flex-col items-center w-full">
          <p className={`${eyebrowClass} mb-8`}>The Marsh Refinery</p>

          <Ornament className="mb-8" />

          <h1
            className="font-display font-black text-bone-200 mb-6 uppercase w-full"
            style={{
              fontSize: "clamp(2rem, 9vw, 9rem)",
              lineHeight: 0.95,
              letterSpacing: "0.08em"
            }}
          >
            GRAVEKEEPERS
          </h1>

          <Ornament opacity={0.3} className="mb-6" />

          <p className="font-body italic text-bone-350 text-2xl leading-[1.45] max-w-[480px] mb-6">
            Make it through the night. Or don't.
          </p>

          <p className={`${eyebrowClass} mb-12`}>Coming Soon</p>
        </div>
      </div>
      <StudioFooter />
    </div>
  );
}
