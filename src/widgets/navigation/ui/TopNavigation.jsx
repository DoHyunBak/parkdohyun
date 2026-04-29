import { Code2, GitBranch, Search } from "lucide-react";

const navItems = [
  { href: "#experience", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certs", label: "Certifications" },
];

export default function TopNavigation({ name, scrolled }) {
  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-zinc-800 bg-[#090b0f]/95 backdrop-blur-xl"
          : "border-zinc-900 bg-[#090b0f]/90 backdrop-blur-xl"
      }`}
    >
      <div className="flex h-12 items-center justify-between px-3">
        <div className="flex min-w-0 items-center gap-3">
          <a href="#" aria-label="홈으로 이동" className="flex shrink-0 items-center gap-2">
            <img
              src="/myLogo.png"
              alt={`${name} 로고`}
              className="h-7 w-7 object-contain"
            />
            <span className="hidden text-xs font-semibold text-zinc-300 font-mono md:inline">
              park-dohyun.code-workspace
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-md border border-zinc-800 bg-[#111318] px-2 py-1 text-xs text-zinc-500 font-mono lg:flex">
            <Code2 className="h-3.5 w-3.5" />
            portfolio.jsx
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-bold">
          <div className="hidden items-center gap-1 rounded-md border border-zinc-800 bg-[#111318] px-2 py-1 text-xs text-zinc-500 font-mono md:flex">
            <Search className="h-3.5 w-3.5" />
            Ctrl K
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-white md:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-[#151922] px-3 py-1.5 text-xs text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-[#1b2130]"
          >
            <GitBranch className="h-3.5 w-3.5" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
