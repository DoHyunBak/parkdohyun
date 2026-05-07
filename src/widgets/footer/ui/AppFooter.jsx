import { Github, Mail, Youtube, Linkedin } from "lucide-react";
import { TistoryIcon } from "@/shared/ui/TistoryIcon";

export default function AppFooter({ name }) {
  return (
    <footer className="border-t border-zinc-800 bg-[#111318] px-4 py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-zinc-500 font-mono sm:flex-row">
        <div className="flex items-center gap-4">
          <a href="https://github.com/DoHyunBak" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github size={16} />
          </a>
          <a href="https://parkdohyun.tistory.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <TistoryIcon className="w-4 h-4 fill-current" />
          </a>
          <a href="https://www.youtube.com/@Mr.Share_Man" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Youtube size={16} />
          </a>
          <a href="https://linkedin.com/in/dohyunbak" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:badberg2002@gmail.com" className="hover:text-white transition-colors">
            <Mail size={16} />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span>main</span>
          <span>© {new Date().getFullYear()} {name}</span>
        </div>
      </div>
    </footer>
  );
}
