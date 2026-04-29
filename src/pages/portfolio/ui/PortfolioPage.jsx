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
    <aside className="hidden border-r border-zinc-800 bg-[#0b0f14] lg:block">
      <div className="border-b border-zinc-800 px-4 py-3 text-xs font-bold uppercase text-zinc-500 font-mono">
        Explorer
      </div>
      <div className="px-3 py-4">
        <button
          type="button"
          onClick={() => setIsPortfolioOpen((current) => !current)}
          className="mb-2 flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-xs font-bold uppercase text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-white font-mono"
          aria-expanded={isPortfolioOpen}
        >
          {isPortfolioOpen ? (
            <ChevronDown className="h-3.5 w-3.5" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5" />
          )}
          <Folder className="h-3.5 w-3.5 text-[#d6b56d]" />
          portfolio
        </button>
        {isPortfolioOpen && (
          <nav className="space-y-3 pl-3">
            {folders.map((folder) => {
              const isOpen = openFolders[folder.label] ?? false;

              return (
                <div key={folder.label}>
                  <button
                    type="button"
                    onClick={() => toggleFolder(folder.label)}
                    className="mb-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-800/60 hover:text-white font-mono"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? (
                      <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                    )}
                    <Folder className="h-3.5 w-3.5 shrink-0 text-[#d6b56d]" />
                    {folder.label}
                  </button>
                  {isOpen && (
                    <div className="space-y-0.5 pl-6">
                      {folder.children.map((item) => (
                        <a
                          key={`${folder.label}-${item.label}`}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-zinc-500 transition-colors hover:bg-zinc-800/60 hover:text-zinc-100 font-mono"
                        >
                          <FileCode2 className="h-3.5 w-3.5 text-[#6fb6d8]" />
                          {item.label}
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
    <div className="word-keep-all min-h-screen bg-[#090b0f] text-zinc-300 selection:bg-[#c6e478] selection:text-black">
      <SpotlightCursor />
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <div className="mt-[-180px] h-[360px] w-[760px] rounded-full bg-[#273043]/30 blur-[120px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#0d1117] shadow-2xl shadow-black/30">
          <div className="flex h-10 items-center justify-between border-b border-zinc-800 bg-[#111318]">
            <div className="flex h-full items-center">
              <div className="flex h-full items-center gap-2 border-r border-zinc-800 bg-[#0d1117] px-4 text-xs text-zinc-300 font-mono">
                <FileCode2 className="h-3.5 w-3.5 text-[#6fb6d8]" />
                portfolio.jsx
              </div>
              <div className="hidden h-full items-center gap-2 border-r border-zinc-800 px-4 text-xs text-zinc-500 font-mono md:flex">
                README.md
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 text-xs text-zinc-500 font-mono">
              <PanelLeft className="h-3.5 w-3.5" />
              <GitBranch className="h-3.5 w-3.5" />
              main
            </div>
          </div>

          <div className="grid min-h-[calc(100vh-8rem)] lg:grid-cols-[240px_1fr]">
            <ExplorerPanel data={portfolioData} />
            <div className="min-w-0 bg-[#0d1117]">
              <div className="border-b border-zinc-800 bg-[#0b0f14] px-4 py-2 text-xs text-zinc-500 font-mono">
                /src/pages/portfolio/ui/PortfolioPage.jsx
              </div>
              <div className="space-y-24 px-4 py-8 md:px-8 lg:px-10">
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
