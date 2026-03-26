import SectionHeader from "@/shared/ui/SectionHeader";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader
        title="역량"
        description="Core tech stack for managing reliable enterprise systems."
      />

      <div className="border-t border-zinc-800">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="-mx-4 flex flex-col gap-3 rounded-xl border-b border-zinc-800/50 px-4 py-4 transition-colors hover:bg-zinc-900/20 md:flex-row md:items-center md:gap-8 md:py-5"
          >
            <div className="w-full md:w-1/4">
              <h4 className="font-bold text-white">{skill.category}</h4>
            </div>
            <div className="w-full md:w-1/4">
              <span className="text-sm text-zinc-400 font-mono">{skill.tech}</span>
            </div>
            <div className="w-full md:w-2/4">
              <p className="text-sm leading-relaxed text-zinc-300 font-mono">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
