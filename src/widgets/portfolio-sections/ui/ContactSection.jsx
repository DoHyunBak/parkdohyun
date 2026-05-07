import { ArrowRight, ExternalLink, Mail, Youtube } from "lucide-react";
import { TistoryIcon } from "@/shared/ui/TistoryIcon";
import CodeCard from "@/shared/ui/CodeCard";

function ContactLink({ href, label, varName, icon: Icon, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex min-w-0 items-center justify-between gap-3 rounded-md border border-slate-400/10 bg-slate-950/30 px-4 py-3 transition-colors hover:border-slate-400/20 hover:bg-slate-900/55 hover:text-white"
      aria-label={`Open ${label}`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <Icon className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-[#6fb6d8]" />
        <div className="min-w-0 truncate text-xs sm:text-sm">
          <span className="text-[#82aaff]">contact</span>
          <span className="text-zinc-500">.</span>
          <span className="text-[#82aaff]">{varName}</span>{" "}
          <span className="text-zinc-500">=</span>{" "}
          <span className="text-[#ecc48d]">"{label}"</span>
          <span className="text-zinc-500">;</span>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-white" />
    </a>
  );
}

export default function ContactSection({ profile }) {
  return (
    <section id="contact" className="border-t border-zinc-800 py-8 md:py-12">
      <CodeCard
        fileName="Contact.java"
        topRight="package portfolio"
        lineNumbers={["01", "02", "03", "04", "05", "06", "07", "08"]}
      >
        <div className="space-y-8 font-mono">
          <div className="space-y-2 text-[13px] sm:text-sm">
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

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <ContactLink href={profile.email} label="Email" varName="email" icon={Mail} />
            <ContactLink href={profile.tistory} label="Tistory" varName="blog" icon={TistoryIcon} external />
            <ContactLink href={profile.github} label="GitHub" varName="github" icon={ExternalLink} external />
            <ContactLink href={profile.linkedin} label="LinkedIn" varName="linkedin" icon={ExternalLink} external />
            <ContactLink href={profile.youtube} label="YouTube" varName="youtube" icon={Youtube} external />
          </div>
        </div>
      </CodeCard>
    </section>
  );
}
