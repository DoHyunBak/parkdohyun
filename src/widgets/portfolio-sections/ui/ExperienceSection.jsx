import CodeCard from "@/shared/ui/CodeCard";

export default function ExperienceSection({ experience }) {
  const edu = experience[0];
  const term = "2021.03 ~ 2027.03";

  return (
    <section id="experience" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      {edu && (
        <CodeCard
          fileName="Education.java"
          topRight={term}
          lineNumbers={["01","02","03","04","05","06","07","08","09","10","11"]}
        >
          <div className="space-y-1 text-[13px] sm:text-sm">
            {/* Javadoc — school & period immediately visible */}
            <div className="text-zinc-600">{"/**"}</div>
            <div>
              <span className="text-zinc-600">&nbsp;{"*"}&nbsp;</span>
              <span className="font-semibold text-zinc-200">한양대학교 (ERICA)</span>
            </div>
            <div>
              <span className="text-zinc-600">&nbsp;{"*"}&nbsp;</span>
              <span className="text-[#82aaff]">@period</span>
              <span className="text-zinc-600">{"  "}</span>
              <span className="text-zinc-400">{term}</span>
            </div>
            <div>
              <span className="text-zinc-600">&nbsp;{"*"}&nbsp;</span>
              <span className="text-[#82aaff]">@major</span>
              <span className="text-zinc-600">{"   "}</span>
              <span className="text-zinc-400">소프트웨어융합대학 ICT융합학부</span>
            </div>
            <div className="text-zinc-600">{"*/"}</div>

            {/* Instance block */}
            <div className="pt-1">
              <span className="text-[#c792ea]">Education</span>{" "}
              <span className="text-white">edu_bachelor</span>{" "}
              <span className="text-zinc-500">=</span>{" "}
              <span className="text-[#c792ea]">new</span>{" "}
              <span className="text-white">Education</span>
              <span className="text-zinc-500">();</span>
            </div>
            <div>
              <span className="text-[#82aaff]">edu_bachelor</span>
              <span className="text-zinc-500">.</span>
              <span className="text-[#82aaff]">school</span>{" "}
              <span className="text-zinc-500">=</span>{" "}
              <span className="text-[#ecc48d]">"한양대학교"</span>
              <span className="text-zinc-500">;</span>
            </div>
            <div>
              <span className="text-[#82aaff]">edu_bachelor</span>
              <span className="text-zinc-500">.</span>
              <span className="text-[#82aaff]">campus</span>{" "}
              <span className="text-zinc-500">=</span>{" "}
              <span className="text-[#ecc48d]">"ERICA"</span>
              <span className="text-zinc-500">;</span>
            </div>
            <div>
              <span className="text-[#82aaff]">edu_bachelor</span>
              <span className="text-zinc-500">.</span>
              <span className="text-[#82aaff]">degree</span>{" "}
              <span className="text-zinc-500">=</span>{" "}
              <span className="text-[#ecc48d]">"공학사"</span>
              <span className="text-zinc-500">;</span>
            </div>
            <div>
              <span className="text-[#82aaff]">edu_bachelor</span>
              <span className="text-zinc-500">.</span>
              <span className="text-[#82aaff]">term</span>{" "}
              <span className="text-zinc-500">=</span>{" "}
              <span className="text-[#ecc48d]">"{term}"</span>
              <span className="text-zinc-500">;</span>
            </div>
          </div>
        </CodeCard>
      )}
    </section>
  );
}
