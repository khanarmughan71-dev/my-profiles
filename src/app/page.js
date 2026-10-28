import AboutSection from "../components/portfolio/AboutSection";
import ContactSection from "../components/portfolio/ContactSection";
import Hero from "../components/portfolio/Hero";
import IntroSection from "../components/portfolio/IntroSection";
import LinksSection from "../components/portfolio/LinksSection";
import MobileDock from "../components/portfolio/MobileDock";
import SiteFooter from "../components/portfolio/SiteFooter";
import SiteNavigation from "../components/portfolio/SiteNavigation";
import WorkSection from "../components/portfolio/WorkSection";

export default function Home() {
  return (
    <main className="portfolio-page">
      <Hero />
      <LinksSection />

      <div className="portfolio-content">
        <SiteNavigation />
        <div className="portfolio-wrap">
          <IntroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
          <SiteFooter />
        </div>
      </div>

      <MobileDock />
    </main>
  );
}
