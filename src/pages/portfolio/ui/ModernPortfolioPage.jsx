import { portfolioData } from "@/entities/portfolio/model/portfolioData";
import ModernNavigation from "@/widgets/navigation/ui/ModernNavigation";
import ModernHeroSection from "@/widgets/portfolio-sections/ui/ModernHeroSection";
import ModernAboutSection from "@/widgets/portfolio-sections/ui/ModernAboutSection";
import ModernProjectsSection from "@/widgets/portfolio-sections/ui/ModernProjectsSection";
import ModernContactSection from "@/widgets/portfolio-sections/ui/ModernContactSection";
import ModernFooter from "@/widgets/footer/ui/ModernFooter";
import BorderGlow from "@/shared/ui/BorderGlow";

export default function ModernPortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white font-sans selection:bg-accent selection:text-white">
      <ModernNavigation />
      
      <main className="px-4 md:px-8 lg:px-16">
        <ModernHeroSection profile={portfolioData.profile} />
        
        <div className="space-y-32 py-32">
          <BorderGlow
            edgeSensitivity={20}
            glowColor="0 0 100"
            backgroundColor="#0a0a0a"
            borderRadius={12}
            glowRadius={50}
            glowIntensity={0.65}
            animated={true}
            colors={['#ff6188', '#fc9867', '#ffd866']}
          >
            <ModernAboutSection profile={portfolioData.profile} />
          </BorderGlow>
          
          <BorderGlow
            edgeSensitivity={20}
            glowColor="0 0 100"
            backgroundColor="#0a0a0a"
            borderRadius={12}
            glowRadius={50}
            glowIntensity={0.65}
            animated={true}
            colors={['#ff6188', '#fc9867', '#ffd866']}
          >
            <ModernProjectsSection projects={portfolioData.projects} />
          </BorderGlow>
          
          <BorderGlow
            edgeSensitivity={20}
            glowColor="0 0 100"
            backgroundColor="#0a0a0a"
            borderRadius={12}
            glowRadius={50}
            glowIntensity={0.65}
            animated={true}
            colors={['#ff6188', '#fc9867', '#ffd866']}
          >
            <ModernContactSection profile={portfolioData.profile} />
          </BorderGlow>
        </div>
      </main>

      <ModernFooter name={portfolioData.profile.name} />
    </div>
  );
}
