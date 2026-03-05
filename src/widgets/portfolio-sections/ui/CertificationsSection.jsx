import SectionHeader from "@/shared/ui/SectionHeader";

function StatusBadge({ status }) {
  if (status === "취득") {
    return (
      <span className="shrink-0 rounded-sm bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black font-mono">
        Acquired
      </span>
    );
  }

  if (status === "준비중") {
    return (
      <span className="shrink-0 rounded-sm border border-zinc-700 bg-zinc-800 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-300 font-mono">
        Preparing
      </span>
    );
  }

  return (
    <span className="shrink-0 rounded-sm border border-zinc-800 bg-transparent px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-mono">
      Planned
    </span>
  );
}

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certs" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader
        title="자격증"
        description="Objective indicators and future plans secured to build enterprise systems."
      />

      <div className="border-t border-zinc-800">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="-mx-4 flex flex-col items-start gap-4 rounded-xl border-b border-zinc-800/50 px-4 py-6 transition-colors hover:bg-zinc-900/20 md:flex-row md:gap-12 md:py-8"
          >
            <div className="flex w-full items-center gap-3 md:w-1/3">
              <StatusBadge status={cert.status} />
              <h4 className={`font-bold ${cert.status === "취득" ? "text-white" : "text-zinc-400"}`}>
                {cert.name}
              </h4>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-sm leading-relaxed text-zinc-400 font-mono">{cert.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
