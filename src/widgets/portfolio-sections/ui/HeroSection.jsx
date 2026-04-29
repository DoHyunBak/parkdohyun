import { Briefcase, Building2, Download, Server } from "lucide-react";
import CodeCard from "@/shared/ui/CodeCard";

const kpiIcons = { building2: Building2, server: Server, briefcase: Briefcase };
const kpiVars  = { building2: "domain",  server: "stack",  briefcase: "mindset" };

export default function HeroSection({ profile, kpis }) {
  return (
    <section className="space-y-8">
      <CodeCard fileName="Developer.java" topRight="package portfolio" lineNumbers={["01", "02", "03", "04"]}>
        <div className="space-y-4">
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-[#c792ea]">public class</span>{" "}
              <span className="text-white">Developer</span>{" "}
              <span className="text-zinc-500">{"{"}</span>
            </div>
            <div className="pl-5 space-y-1">
              <div>
                <span className="text-[#c792ea]">String</span>{" "}
                <span className="text-[#82aaff]">name</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-[#ecc48d]">"{profile.name}"</span>;
              </div>
              <div>
                <span className="text-[#c792ea]">String</span>{" "}
                <span className="text-[#82aaff]">role</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-[#ecc48d]">"{profile.role}"</span>;
              </div>
            </div>
            <div className="text-zinc-500">{"}"}</div>
          </div>

          <div className="border-t border-zinc-800 pt-4 space-y-3">
            <h1 className="text-5xl font-black leading-[1.1] text-white md:text-7xl lg:text-8xl">
              {profile.headline}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
              {profile.subHeadline}
            </p>
            <a
              href={profile.resumeLink}
              download
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-[#151922] px-4 py-2 text-xs font-bold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-[#1b2130]"
            >
              <Download className="h-4 w-4" />
              Resume.pdf
            </a>
          </div>
        </div>
      </CodeCard>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {kpis.map((kpi) => {
          const Icon = kpiIcons[kpi.icon];
          const varName = kpiVars[kpi.icon];
          return (
            <CodeCard key={kpi.id} fileName={`kpi-${kpi.id}.java`} topRight={kpi.label} lineNumbers={["01", "02"]}>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <Icon className="h-3.5 w-3.5" />
                  <span>// {kpi.label}</span>
                </div>
                <div className="text-sm">
                  <span className="text-[#c792ea]">String</span>{" "}
                  <span className="text-[#82aaff]">{varName}</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-[#ecc48d]">"{kpi.value}"</span>;
                </div>
              </div>
            </CodeCard>
          );
        })}
      </div>
    </section>
  );
}
