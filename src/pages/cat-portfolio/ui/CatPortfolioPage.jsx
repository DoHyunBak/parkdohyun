import { useEffect } from "react";
import { Cat, Images, PawPrint, Timer, UserRound } from "lucide-react";
import { catPortfolioData } from "@/entities/cat/model/catPortfolioData";
import CatFooter from "@/widgets/cat-portfolio/ui/CatFooter";
import CatHeroSection from "@/widgets/cat-portfolio/ui/CatHeroSection";
import DailyRoutineSection from "@/widgets/cat-portfolio/ui/DailyRoutineSection";
import GallerySection from "@/widgets/cat-portfolio/ui/GallerySection";
import MemoryTimelineSection from "@/widgets/cat-portfolio/ui/MemoryTimelineSection";
import PersonalityStatsSection from "@/widgets/cat-portfolio/ui/PersonalityStatsSection";
import ProfileSection from "@/widgets/cat-portfolio/ui/ProfileSection";

const navItems = [
  { id: "cat-profile", label: "Profile", icon: UserRound },
  { id: "cat-stats", label: "Stats", icon: PawPrint },
  { id: "cat-gallery", label: "Gallery", icon: Images },
  { id: "cat-routine", label: "Routine", icon: Timer },
];

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
}

function CatNavigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#dec9b3]/70 bg-[#fff8ef]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("cat-top")}
          className="flex items-center gap-2 rounded-full px-2 py-1 text-left focus:outline-none focus:ring-2 focus:ring-[#c98b63]/45"
          aria-label="Cat Portfolio 상단으로 이동"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#33271f] text-white shadow-sm">
            <Cat className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-black text-[#33271f]">Cat Portfolio</span>
            <span className="hidden text-xs font-bold text-[#967d68] sm:block">profile archive</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold text-[#6e5948] transition hover:bg-white/70 hover:text-[#33271f] focus:outline-none focus:ring-2 focus:ring-[#c98b63]/40"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default function CatPortfolioPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${catPortfolioData.profile.name} | Cat Portfolio`;

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div id="cat-top" className="cat-portfolio-canvas min-h-screen overflow-hidden text-[#33271f]">
      <CatNavigation />
      <main className="relative z-10">
        <CatHeroSection profile={catPortfolioData.profile} onNavigate={scrollToSection} />
        <ProfileSection profile={catPortfolioData.profile} />
        <PersonalityStatsSection stats={catPortfolioData.stats} />
        <GallerySection gallery={catPortfolioData.gallery} />
        <DailyRoutineSection routine={catPortfolioData.routine} />
        <MemoryTimelineSection memories={catPortfolioData.memories} />
      </main>
      <CatFooter meta={catPortfolioData.meta} />
    </div>
  );
}
