import CodeCard from "@/shared/ui/CodeCard";

function toVarName(id = "") {
  return String(id).trim().replace(/-/g, "_");
}

export default function SkillsSection({ skills }) {
  // 3 lines per group (region, array, description) + blank between groups
  const lineCount = skills.length * 3 + (skills.length - 1);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <section id="skills" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      <CodeCard
        fileName="Skills.java"
        topRight="package portfolio"
        lineNumbers={lineNumbers}
      >
        <div className="space-y-1 text-[13px] sm:text-sm">
          {skills.map((skill, i) => {
            const varName = toVarName(skill.id);
            const techNames = (skill.techList ?? []).map((t) => t.name);
            const techLabels = (skill.techList ?? []).map((t) => t.label).join(" · ");

            return (
              <div key={skill.id} className={i > 0 ? "pt-3" : ""}>
                {/* Region separator */}
                <div className="text-[#6fb6d8]">
                  {"// ===== "}{skill.category}{" ====="}
                </div>

                {/* Array literal with tech names as string literals */}
                <div>
                  <span className="text-[#c792ea]">String</span>
                  <span className="text-zinc-500">[]</span>{" "}
                  <span className="text-[#82aaff]">{varName}</span>{" "}
                  <span className="text-zinc-500">= {"{ "}</span>
                  {techNames.map((name, j) => (
                    <span key={j}>
                      {j > 0 && <span className="text-zinc-500">, </span>}
                      <span className="text-[#ecc48d]">"{name}"</span>
                    </span>
                  ))}
                  <span className="text-zinc-500">{" };"}</span>
                </div>

                {/* Korean labels as description comment */}
                <div className="text-zinc-500">{"// "}{techLabels}</div>
              </div>
            );
          })}
        </div>
      </CodeCard>
    </section>
  );
}
