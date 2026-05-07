import { ArrowUp } from "lucide-react";

export default function ModernFooter({ name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] py-12 px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>

        <p className="text-[#a0a0a0] text-sm font-light uppercase tracking-widest">
          {name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
