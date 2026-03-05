import { Milestone } from "lucide-react";
import SectionHeader from "@/shared/ui/SectionHeader";

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader
        title="학력"
        description="Academic background and foundational knowledge for system engineering."
      />

      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col gap-6 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 p-8 md:flex-row md:gap-12"
          >
            <div className="shrink-0 md:w-1/4">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-500 font-mono">
                <Milestone className="h-4 w-4" /> {exp.period}
              </div>
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="mt-1 text-sm text-zinc-500 font-mono">{exp.role}</p>
            </div>

            <div className="flex items-center md:w-3/4">
              <p className="text-sm leading-relaxed text-zinc-300 font-mono">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
