import { Download, Mail } from "lucide-react";
import CodeCard from "@/shared/ui/CodeCard";

const kpiVars = { building2: "domain", server: "stack", briefcase: "mindset" };

export default function HeroSection({ profile, kpis }) {
  return (
    <section className="space-y-6 md:space-y-8">
      {/* Human-readable hero: name, role, description, CTAs */}
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[#6fb6d8]">
            // Enterprise Backend Developer
          </p>
          <h1 className="text-5xl font-black leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="text-base font-medium text-zinc-300 sm:text-lg">
            {profile.role}
          </p>
        </div>

        <p className="max-w-xl whitespace-pre-line text-sm leading-relaxed text-zinc-400 md:text-base">
          {profile.subHeadlineKo}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={profile.resumeLink}
            download
            className="inline-flex items-center gap-2 rounded-md bg-[#6fb6d8] px-5 py-2.5 text-sm font-bold text-[#151922] transition-colors hover:bg-[#89c8e8]"
          >
            <Download className="h-4 w-4" />
            이력서 보기
          </a>
          <a
            href={profile.email}
            className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-[#151922] px-5 py-2.5 text-sm font-bold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-[#1b2130]"
          >
            <Mail className="h-4 w-4" />
            연락하기
          </a>
        </div>
      </div>

      {/* Decorative code block */}
      <CodeCard fileName="Developer.java" topRight="package portfolio" lineNumbers={["01", "02", "03", "04"]}>
        <div className="space-y-1 text-[13px] text-zinc-600 sm:text-sm">
          <div>
            <span className="text-[#c792ea]">public class</span>{" "}
            <span className="text-zinc-500">Developer</span>{" "}
            <span>{"{"}</span>
          </div>
          <div className="pl-5 space-y-1">
            <div>
              <span className="text-[#c792ea]">String</span>{" "}
              <span className="text-[#82aaff]">name</span>{" "}
              <span>=</span>{" "}
              <span className="text-[#ecc48d]">"{profile.name}"</span>;
            </div>
            <div>
              <span className="text-[#c792ea]">String</span>{" "}
              <span className="text-[#82aaff]">role</span>{" "}
              <span>=</span>{" "}
              <span className="text-[#ecc48d]">"{profile.role}"</span>;
            </div>
          </div>
          <div>{"}"}</div>
        </div>
      </CodeCard>

      {/* KPI cards — consolidated into one file */}
      <CodeCard
        fileName="kpi-summary.java"
        topRight="package portfolio"
        lineNumbers={["01", "02", "03", "04"]}
      >
        <div className="space-y-1 text-[13px] sm:text-sm">
          <div className="text-zinc-600">{"// === Developer KPI Summary ==="}</div>
          {kpis.map((kpi) => {
            const varName = kpiVars[kpi.icon];
            return (
              <div key={kpi.id}>
                <span className="text-[#c792ea]">String</span>{" "}
                <span className="text-[#82aaff]">{varName}</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-[#ecc48d]">"{kpi.value}"</span>
                <span className="text-zinc-500">;</span>
                <span className="ml-4 text-zinc-600">{"// "}{kpi.label}</span>
              </div>
            );
          })}
        </div>
      </CodeCard>
    </section>
  );
}
