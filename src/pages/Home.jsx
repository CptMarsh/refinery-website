import HeroSection from "../components/HeroSection";
import StudioFooter from "../components/StudioFooter";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground font-ui">
      <HeroSection />
      <StudioFooter />
    </div>
  );
}
