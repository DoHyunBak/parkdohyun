import { Briefcase, Building2, Server, Terminal } from "lucide-react";

const kpiIcons = {
  building2: Building2,
  server: Server,
  briefcase: Briefcase,
};

export default function HeroSection({ profile, kpis }) {
  return (
    <section className="space-y-12 motion-reduce:transition-none motion-reduce:transform-none">
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400">
          <Terminal className="h-4 w-4" /> {profile.role}
        </div>
        <h1 className="whitespace-pre-line text-5xl font-black leading-[1.15] tracking-tight text-white md:text-7xl lg:text-8xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 font-mono md:text-lg">
          {profile.subHeadline}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href={profile.resumeLink}
          className="rounded-lg bg-white px-6 py-3.5 font-bold text-black transition-colors hover:bg-zinc-200"
        >
          이력서 (PDF)
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 md:grid-cols-3">
        {kpis.map((kpi) => {
          const Icon = kpiIcons[kpi.icon];

          return (
            <div key={kpi.id} className="flex flex-col justify-center bg-black/40 p-6 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
                <Icon className="h-4 w-4 text-zinc-400" /> {kpi.label}
              </div>
              <div className="text-2xl font-bold tracking-tight text-white font-mono">{kpi.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
