const navItems = [
  { href: "#vision", label: "핵심철학" },
  { href: "#experience", label: "학력" },
  { href: "#projects", label: "프로젝트" },
  { href: "#skills", label: "역량" },
  { href: "#certs", label: "자격증" },
];

export default function TopNavigation({ name, scrolled }) {
  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-black/70 py-4 border-zinc-800 backdrop-blur-xl"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <img
          src="/myLogo.png"
          alt={`${name} 로고`}
          className="h-12 w-12 object-contain"
        />
        <div className="flex items-center gap-6 text-sm font-bold">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-zinc-400 transition-colors hover:text-white sm:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-white px-4 py-2 text-black transition-colors hover:bg-zinc-200"
          >
            연락처
          </a>
        </div>
      </div>
    </nav>
  );
}
