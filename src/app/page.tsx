import LandingLayout from "@/components/landing/LandingLayout";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import ComponentsSection from "@/components/landing/ComponentsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ThemesSection from "@/components/landing/ThemesSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <LandingLayout>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ComponentsSection />
        <HowItWorks />
        <ThemesSection />
        <CtaSection />
        <Footer />
      </main>
    </LandingLayout>
  );
}
