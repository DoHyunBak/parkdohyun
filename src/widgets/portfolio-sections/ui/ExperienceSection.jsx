import SectionHeader from "@/shared/ui/SectionHeader";
import CodeCard from "@/shared/ui/CodeCard";

export default function ExperienceSection({ experience }) {
  const edu = experience[0];
  const term = "2021.03 ~ 2027.03";

  return (
    <section id="experience" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      <SectionHeader
        title="Education"
        description="Academic background and focus."
        fields={[
          { type: "String", name: "school" },
          { type: "String", name: "campus" },
          { type: "String", name: "major" },
          { type: "String", name: "degree" },
          { type: "String", name: "term" },
        ]}
      />

      <div className="grid grid-cols-1 gap-4">
        {edu && (
          <CodeCard fileName="Education.java" topRight={term} lineNumbers={["01", "02", "03", "04", "05", "06"]}>
            <div className="space-y-3">
              <div className="space-y-1 text-[13px] text-zinc-400 sm:text-sm">
                <div>
                  <span className="text-[#c792ea]">Education</span>{" "}
                  <span className="text-white">edu_bachelor</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-[#c792ea]">new</span>{" "}
                  <span className="text-white">Education</span>
                  <span className="text-zinc-500">();</span>
                </div>
                <div>
                  <span className="text-[#82aaff]">edu_bachelor</span><span className="text-zinc-500">.</span><span className="text-[#82aaff]">school</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-[#ecc48d]">"한양대학교"</span>;
                </div>
                <div>
                  <span className="text-[#82aaff]">edu_bachelor</span><span className="text-zinc-500">.</span><span className="text-[#82aaff]">campus</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-[#ecc48d]">"ERICA"</span>;
                </div>
                <div>
                  <span className="text-[#82aaff]">edu_bachelor</span><span className="text-zinc-500">.</span><span className="text-[#82aaff]">major</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-[#ecc48d]">"소프트웨어융합대학 ICT융합학부"</span>;
                </div>
                <div>
                  <span className="text-[#82aaff]">edu_bachelor</span><span className="text-zinc-500">.</span><span className="text-[#82aaff]">degree</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-[#ecc48d]">"공학사"</span>;
                </div>
                <div>
                  <span className="text-[#82aaff]">edu_bachelor</span><span className="text-zinc-500">.</span><span className="text-[#82aaff]">term</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-[#ecc48d]">"{term}"</span>;
                </div>
              </div>
            </div>
          </CodeCard>
        )}
      </div>
    </section>
  );
}
