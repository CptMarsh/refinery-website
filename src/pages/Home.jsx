import { BackgroundLayers } from "@/components/brand";
import HeroSection from "../components/HeroSection";
import NewsletterSignup from "../components/NewsletterSignup";
import StudioFooter from "../components/StudioFooter";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground font-ui">
      {/* One dust layer behind the hero and the newsletter, so the dot grid has no seam */}
      <div className="relative flex flex-col flex-1">
        <BackgroundLayers overlay={false} />
        <HeroSection />
        <NewsletterSignup />
      </div>
      <StudioFooter />
    </div>
  );
}
