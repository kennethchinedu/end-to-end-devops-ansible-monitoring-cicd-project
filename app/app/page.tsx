import AngelsSection from "@/components/organisms/AngelsSection";
import CtaSection from "@/components/organisms/CtaSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import GiftSection from "@/components/organisms/GiftSection";
import HeroSection from "@/components/organisms/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <AngelsSection />
      <ExperienceSection />
      <GiftSection />
      <CtaSection />
    </main>
  );
}
