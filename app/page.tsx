import HeroSection from "@/components/HeroSection";
import FeaturedWork from "@/components/FeaturedWork";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certificates";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
        <Certifications />
      </section>
      <SkillsSection />
      <Footer />
    </>
  );
}
