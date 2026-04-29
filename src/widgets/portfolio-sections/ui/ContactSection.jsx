import { ExternalLink, Mail } from "lucide-react";
import { TistoryIcon } from "@/shared/ui/TistoryIcon";
import CodeCard from "@/shared/ui/CodeCard";

export default function ContactSection({ profile }) {
  const linkClass =
    "flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-[#151922] px-5 py-3 text-sm font-bold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-[#1b2130] sm:w-auto font-mono";

  return (
    <section id="contact" className="border-t border-zinc-800 py-12">
      <CodeCard fileName="Contact.java" topRight="package portfolio" lineNumbers={["01", "02", "03", "04"]}>
        <div className="space-y-8 font-mono">
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-[#c792ea]">public class</span>{" "}
              <span className="text-white">Contact</span>{" "}
              <span className="text-zinc-500">{"{"}</span>
            </div>
            <div className="pl-5 space-y-1">
              <div className="text-zinc-600">
                <span className="text-[#c792ea]">public static void</span>{" "}
                <span className="text-[#82aaff]">main</span>
                <span className="text-zinc-500">(</span>
                <span className="text-[#c792ea]">String</span>
                <span className="text-zinc-500">[]</span>{" "}
                <span className="text-[#82aaff]">args</span>
                <span className="text-zinc-500">)</span>{" "}
                <span className="text-zinc-500">{"{"}</span>
              </div>
              <div className="pl-5">
                <span className="text-[#c792ea]">System</span>
                <span className="text-zinc-500">.</span>
                <span className="text-[#82aaff]">out</span>
                <span className="text-zinc-500">.</span>
                <span className="text-[#82aaff]">println</span>
                <span className="text-zinc-500">(</span>
                <span className="text-[#ecc48d]">"Let's build reliable systems."</span>
                <span className="text-zinc-500">);</span>
              </div>
              <div className="text-zinc-600">{"}"}</div>
            </div>
            <div className="text-zinc-500">{"}"}</div>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href={profile.email} className={linkClass}>
              <Mail className="h-5 w-5" /> Email
            </a>
            <a href={profile.tistory} target="_blank" rel="noreferrer" className={linkClass}>
              <TistoryIcon className="h-5 w-5" /> Tistory
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
              <ExternalLink className="h-5 w-5" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              <ExternalLink className="h-5 w-5" /> LinkedIn
            </a>
          </div>
        </div>
      </CodeCard>
    </section>
  );
}
