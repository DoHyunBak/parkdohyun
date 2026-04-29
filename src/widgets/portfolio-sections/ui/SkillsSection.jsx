import { ArrowRight } from "lucide-react";
import SectionHeader from "@/shared/ui/SectionHeader";
import CodeCard from "@/shared/ui/CodeCard";

function toVarName(id = "") {
  return String(id)
    .trim()
    .replace(/-/g, "_");
}

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader
        title="Skills"
        description="Technologies I work with."
        fields={[
          { type: "String", name: "category" },
          { type: "String", name: "tech" },
        ]}
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {skills.map((skill) => {
          const varName = toVarName(skill.id);
          return (
            <CodeCard
              key={skill.id}
              fileName={`skill-${skill.id}.java`}
              topRight={skill.category}
              lineNumbers={["01", "02", "03"]}
            >
              <a href={`#/skills/${skill.id}`} className="group block transition-colors hover:text-white">
                <div className="space-y-3">
                  <div className="space-y-1 text-sm text-zinc-400">
                    <div>
                      <span className="text-[#c792ea]">Skills</span>{" "}
                      <span className="text-white">{varName}</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#c792ea]">new</span>{" "}
                      <span className="text-[#c792ea]">Skills</span>
                      <span className="text-zinc-500">();</span>
                    </div>
                    <div>
                      <span className="text-[#82aaff]">{varName}</span>
                      <span className="text-zinc-500">.</span>
                      <span className="text-[#82aaff]">tech</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#ecc48d]">"{skill.tech}"</span>;
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-zinc-600">{"// "}{skill.description}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </div>
              </a>
            </CodeCard>
          );
        })}
      </div>
    </section>
  );
}
