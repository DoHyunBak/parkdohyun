import { portfolioData } from "@/entities/portfolio/model/portfolioData";
import AppFooter from "@/widgets/footer/ui/AppFooter";
import TopNavigation from "@/widgets/navigation/ui/TopNavigation";
import CertificationsSection from "@/widgets/portfolio-sections/ui/CertificationsSection";
import ContactSection from "@/widgets/portfolio-sections/ui/ContactSection";
import ExperienceSection from "@/widgets/portfolio-sections/ui/ExperienceSection";
import HeroSection from "@/widgets/portfolio-sections/ui/HeroSection";
import PhilosophySection from "@/widgets/portfolio-sections/ui/PhilosophySection";
import ProjectsSection from "@/widgets/portfolio-sections/ui/ProjectsSection";
import SkillsSection from "@/widgets/portfolio-sections/ui/SkillsSection";
import LanguageSection from "@/widgets/portfolio-sections/ui/LanguageSection";
import useScrolled from "@/shared/hooks/useScrolled";
import RevealOnScroll from "@/shared/ui/RevealOnScroll";
import SpotlightCursor from "@/shared/ui/SpotlightCursor";

export default function PortfolioPage() {
  const scrolled = useScrolled(20);

  return (
    <div className="word-keep-all min-h-screen bg-black text-zinc-300 selection:bg-white selection:text-black">
      <SpotlightCursor />
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <div className="mt-[-200px] h-[400px] w-[800px] rounded-full bg-zinc-800/20 blur-[120px]" />
      </div>

      <TopNavigation name={portfolioData.profile.name} scrolled={scrolled} />

      <main className="relative z-10 mx-auto max-w-5xl space-y-32 px-6 pb-32 pt-40">
        <RevealOnScroll delay={0}>
          <HeroSection profile={portfolioData.profile} kpis={portfolioData.kpis} />
        </RevealOnScroll>
        <RevealOnScroll delay={40}>
          <PhilosophySection philosophy={portfolioData.philosophy} />
        </RevealOnScroll>
        <RevealOnScroll delay={60}>
          <ExperienceSection experience={portfolioData.experience} />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <ProjectsSection projects={portfolioData.projects} />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <SkillsSection skills={portfolioData.skills} />
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <LanguageSection languages={portfolioData.languages} />
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <CertificationsSection certifications={portfolioData.certifications} />
        </RevealOnScroll>
        <RevealOnScroll delay={160}>
          <ContactSection profile={portfolioData.profile} />
        </RevealOnScroll>
      </main>

      <AppFooter name={portfolioData.profile.name} />
    </div>
  );
}
