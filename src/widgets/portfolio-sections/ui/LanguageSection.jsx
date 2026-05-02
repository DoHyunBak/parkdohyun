import CodeCard from "@/shared/ui/CodeCard";

const levelColor = {
  Native:       "text-[#c6e478]",
  Intermediate: "text-[#ecc48d]",
  Beginner:     "text-zinc-500",
};

export default function LanguageSection({ languages }) {
  const lineNumbers = Array.from({ length: 2 + languages.length }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  return (
    <section id="language" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      <CodeCard
        fileName="language-list.java"
        topRight="package portfolio"
        lineNumbers={lineNumbers}
      >
        <div className="space-y-1 text-[13px] sm:text-sm">
          <div className="text-zinc-600">{"// Language Proficiency"}</div>
          <div>
            <span className="text-[#c792ea]">Map</span>
            <span className="text-zinc-500">{"<String, Level>"}</span>{" "}
            <span className="text-[#82aaff]">proficiency</span>{" "}
            <span className="text-zinc-500">=</span>{" "}
            <span className="text-[#c792ea]">new</span>{" "}
            <span className="text-white">HashMap</span>
            <span className="text-zinc-500">();</span>
          </div>
          {languages.map((item) => (
            <div key={item.id}>
              <span className="text-[#82aaff]">proficiency</span>
              <span className="text-zinc-500">.</span>
              <span className="text-[#82aaff]">put</span>
              <span className="text-zinc-500">(</span>
              <span className="text-[#ecc48d]">"{item.language}"</span>
              <span className="text-zinc-500">,{" "}</span>
              <span className="text-[#c792ea]">Level</span>
              <span className="text-zinc-500">.</span>
              <span className={levelColor[item.level] ?? "text-zinc-500"}>
                {item.level.toUpperCase()}
              </span>
              <span className="text-zinc-500">);</span>
            </div>
          ))}
        </div>
      </CodeCard>
    </section>
  );
}
