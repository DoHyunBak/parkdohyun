import useScrolled from "@/shared/hooks/useScrolled";
import FuzzyText from "@/shared/ui/FuzzyText";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NavFuzzyText({ children }) {
  return (
    <FuzzyText
      fontSize="13px"
      fontWeight={600}
      baseIntensity={0.015}
      hoverIntensity={0.12}
      fuzzRange={6}
      fps={24}
      transitionDuration={6}
      gradient={["#ffffff", "#dbeafe", "#c4b5fd"]}
      className="block h-auto max-w-full"
    >
      {children}
    </FuzzyText>
  );
}

export default function ModernNavigation() {
  const scrolled = useScrolled(50);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-screen border-b border-[#ffd866]/20 bg-[#0a0a0a]/95 shadow-[0_0_24px_rgba(255,97,136,0.08)] backdrop-blur-md transition-all duration-300 ${
        scrolled ? "h-14" : "h-16"
      }`}
    >
      <div className="grid h-full w-full grid-cols-[minmax(112px,20vw)_1fr]">
        <a
          href="#"
          aria-label="DP Home"
          className="flex h-full items-center border-r border-white/10 px-4 transition-colors hover:bg-white/[0.03] sm:px-8"
        >
          <img
            src="/myLogo.png"
            alt="Park Dohyun logo"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
        </a>

        <div className="grid h-full grid-cols-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="flex h-full min-w-0 items-center justify-center border-l border-white/10 px-1 font-mono text-xs uppercase transition-colors hover:bg-white/[0.04] sm:px-3"
            >
              <NavFuzzyText>{item.label.toUpperCase()}</NavFuzzyText>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
