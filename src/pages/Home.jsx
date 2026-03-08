import HeroSection from "../components/HeroSection";
import GameTeaser from "../components/GameTeaser";
import NewsletterSignup from "../components/NewsletterSignup";
import StudioFooter from "../components/StudioFooter";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      <HeroSection />
      <GameTeaser />
      <NewsletterSignup />
      <StudioFooter />
    </div>
  );
}