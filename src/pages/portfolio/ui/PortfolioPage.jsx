import { useState } from "react";
import { portfolioData } from "@/entities/portfolio/model/portfolioData";
import AppFooter from "@/widgets/footer/ui/AppFooter";
import CertificationsSection from "@/widgets/portfolio-sections/ui/CertificationsSection";
import ContactSection from "@/widgets/portfolio-sections/ui/ContactSection";
import ExperienceSection from "@/widgets/portfolio-sections/ui/ExperienceSection";
import HeroSection from "@/widgets/portfolio-sections/ui/HeroSection";
import ProjectsSection from "@/widgets/portfolio-sections/ui/ProjectsSection";
import SkillsSection from "@/widgets/portfolio-sections/ui/SkillsSection";
import LanguageSection from "@/widgets/portfolio-sections/ui/LanguageSection";
import RevealOnScroll from "@/shared/ui/RevealOnScroll";
import SpotlightCursor from "@/shared/ui/SpotlightCursor";
import { ChevronDown, ChevronRight, FileCode2, Folder, GitBranch, PanelLeft } from "lucide-react";

function fileLabel(value) {
  return value
    .toLowerCase()
    .replaceAll(" / ", "-")
    .replaceAll(" ", "-")
    .replaceAll("/", "-")
    .replaceAll(".", "")
    .replaceAll("(", "")
    .replaceAll(")", "");
}

function buildExplorerFolders(data) {
  return [
    {
      label: "education",
      href: "#experience",
      children: data.experience.map((item) => ({
        href: `#/education/${item.id}`,
        label: `${fileLabel(item.title)}.tsx`,
      })),
    },
    {
      label: "projects",
      href: "#projects",
      children: data.projects.map((item) => ({
        href: `#project-${item.id}`,
        label: `${fileLabel(item.title)}.tsx`,
      })),
    },
    {
      label: "skills",
      href: "#skills",
      children: data.skills.map((item) => ({
        href: `#/skills/${item.id}`,
        label: `${item.id}.tsx`,
      })),
    },
    {
      label: "language",
      href: "#language",
      children: data.languages.map((item) => ({
        href: `#/language/${item.id}`,
        label: `${item.id}.tsx`,
      })),
    },
    {
      label: "certifications",
      href: "#certs",
      children: data.certifications.map((item) => ({
        href: `#/certifications/${item.id}`,
        label: `${item.id}.tsx`,
      })),
    },
    {
      label: "contact",
      href: "#contact",
      children: [
        { href: data.profile.github, label: "github.url", external: true },
        { href: data.profile.tistory, label: "blog.url", external: true },
        { href: data.profile.email, label: "email.mail" },
      ],
    },
  ];
}

function ExplorerPanel({ data }) {
  const folders = buildExplorerFolders(data);
  const totalFiles = folders.reduce((count, folder) => count + folder.children.length, 0);
  const [openFolders, setOpenFolders] = useState(() =>
    Object.fromEntries(folders.map((folder) => [folder.label, false])),
  );
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

  function toggleFolder(label) {
    setOpenFolders((current) => ({
      ...current,
      [label]: !current[label],
    }));
  }

  return (
    <aside className="developer-explorer-panel hidden lg:flex">
      <div className="developer-explorer-header">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Explorer</div>
        <div className="rounded border border-slate-400/15 bg-slate-950/70 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500">
          {totalFiles} files
        </div>
      </div>
      <div className="developer-explorer-scroll min-h-0 flex-1 overflow-y-auto px-3 py-3 pr-2 [scrollbar-color:rgba(148,163,184,0.35)_transparent] [scrollbar-width:thin]">
        <button
          type="button"
          onClick={() => setIsPortfolioOpen((current) => !current)}
          className="developer-explorer-root mb-3 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-xs font-bold uppercase text-zinc-300 transition-colors hover:text-white font-mono"
          aria-expanded={isPortfolioOpen}
        >
          {isPortfolioOpen ? (
            <ChevronDown className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
          )}
          <Folder className="h-3.5 w-3.5 shrink-0 text-[#d6b56d]" />
          <span className="min-w-0 flex-1 truncate">portfolio</span>
          <GitBranch className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
        </button>
        {isPortfolioOpen && (
          <nav className="developer-explorer-tree space-y-1 pl-2">
            {folders.map((folder) => {
              const isOpen = openFolders[folder.label] ?? false;

              return (
                <div key={folder.label} className="developer-explorer-node">
                  <button
                    type="button"
                    onClick={() => toggleFolder(folder.label)}
                    className="developer-explorer-row flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-xs font-semibold text-zinc-300 transition-colors hover:text-white font-mono"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? (
                      <ChevronDown className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
                    )}
                    <Folder className="h-3.5 w-3.5 shrink-0 text-[#d6b56d]" />
                    <span className="min-w-0 flex-1 truncate">{folder.label}</span>
                    <span className="text-[10px] font-medium text-zinc-600">{folder.children.length}</span>
                  </button>
                  {isOpen && (
                    <div className="developer-explorer-children ml-[1.05rem] space-y-0.5 pl-4">
                      {folder.children.map((item) => (
                        <a
                          key={`${folder.label}-${item.label}`}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                          className="developer-explorer-file flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-100 font-mono"
                        >
                          <FileCode2 className="h-3.5 w-3.5 text-[#6fb6d8]" />
                          <span className="min-w-0 truncate">{item.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </aside>
  );
}

export default function PortfolioPage() {
  return (
    <div className="developer-canvas word-keep-all min-h-screen text-zinc-300 selection:bg-[#c6e478] selection:text-black">
      <SpotlightCursor />
      <div className="developer-ambient-motion" aria-hidden="true" />
      <div className="developer-flow-motion" aria-hidden="true" />
      <div className="developer-code-watermark hidden md:block" aria-hidden="true">
        {`@RestController
class PortfolioController {
  private final ProjectService service;

  @GetMapping("/projects")
  List<ProjectDto> findAll() {
    return service.findActiveProjects();
  }
}

@Repository
interface ProjectRepository
  extends JpaRepository<Project, Long> {}`}
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <div className="mt-[-180px] h-[360px] w-[760px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-6 md:px-6">
        <div className="developer-app-shell rounded-lg">
          <div className="developer-toolbar relative z-10 flex h-10 items-center justify-between border-b">
            <div className="flex h-full items-center">
              <div className="flex h-full items-center gap-2 border-r border-slate-400/10 bg-slate-950/45 px-3 text-xs text-zinc-300 font-mono md:px-4">
                <FileCode2 className="h-3.5 w-3.5 text-[#6fb6d8]" />
                portfolio.jsx
              </div>
              <div className="hidden h-full items-center gap-2 border-r border-slate-400/10 px-4 text-xs text-zinc-500 font-mono md:flex">
                README.md
              </div>
            </div>
            <div className="hidden items-center gap-2 px-4 text-xs text-zinc-500 font-mono sm:flex">
              <PanelLeft className="h-3.5 w-3.5" />
              <GitBranch className="h-3.5 w-3.5" />
              main
            </div>
          </div>

          <div className="relative z-10 grid min-h-[calc(100vh-8rem)] lg:grid-cols-[240px_1fr]">
            <ExplorerPanel data={portfolioData} />
            <div className="developer-editor-surface min-w-0">
              <div className="developer-toolbar truncate border-b px-3 py-2 text-xs text-zinc-500 font-mono md:px-4">
                /src/pages/portfolio/ui/PortfolioPage.jsx
              </div>
              <div className="space-y-14 px-3 py-6 sm:space-y-16 sm:px-4 md:space-y-24 md:px-8 md:py-8 lg:px-10">
                <RevealOnScroll delay={0}>
                  <HeroSection profile={portfolioData.profile} kpis={portfolioData.kpis} />
                </RevealOnScroll>
                <RevealOnScroll delay={40}>
                  <ExperienceSection experience={portfolioData.experience} />
                </RevealOnScroll>
                <RevealOnScroll delay={60}>
                  <ProjectsSection projects={portfolioData.projects} />
                </RevealOnScroll>
                <RevealOnScroll delay={80}>
                  <SkillsSection skills={portfolioData.skills} />
                </RevealOnScroll>
                <RevealOnScroll delay={100}>
                  <LanguageSection languages={portfolioData.languages} />
                </RevealOnScroll>
                <RevealOnScroll delay={120}>
                  <CertificationsSection certifications={portfolioData.certifications} />
                </RevealOnScroll>
                <RevealOnScroll delay={140}>
                  <ContactSection profile={portfolioData.profile} />
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AppFooter name={portfolioData.profile.name} />
    </div>
  );
}
