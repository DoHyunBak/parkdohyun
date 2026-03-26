import SectionHeader from "@/shared/ui/SectionHeader";

function LevelBadge({ level }) {
  const classNameByLevel = {
    Native: "bg-white text-black",
    Intermediate: "border border-zinc-700 bg-zinc-800 text-zinc-300",
    Beginner: "border border-zinc-800 bg-transparent text-zinc-500",
  };

  const className = classNameByLevel[level] ?? "border border-zinc-800 bg-transparent text-zinc-500";

  return (
    <span
      className={`shrink-0 rounded-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider font-mono ${className}`}
    >
      {level}
    </span>
  );
}

export default function LanguageSection({ languages }) {
  return (
    <section id="language" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader title="Language" description="Communication readiness for global collaboration." />

      <div className="border-t border-zinc-800">
        {languages.map((item) => (
          <div
            key={item.language}
            className="-mx-4 flex flex-col items-start gap-3 rounded-xl border-b border-zinc-800/50 px-4 py-4 transition-colors hover:bg-zinc-900/20 md:flex-row md:items-center md:gap-8 md:py-5"
          >
            <div className="flex w-full items-center gap-3 md:w-1/3">
              <LevelBadge level={item.level} />
              <h4 className="font-bold text-white">{item.language}</h4>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-sm">
                {(item.certificates ?? [{ name: "-", grade: "-" }]).map((cert) => (
                  <div
                    key={`${item.language}-${cert.name}-${cert.grade}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900/50 px-2.5 py-1.5"
                  >
                    <span className="rounded border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-200">
                      {cert.name}
                    </span>
                    <span className="rounded border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-300">
                      {cert.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
