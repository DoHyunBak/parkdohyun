import { ArrowRight } from "lucide-react";
import SectionHeader from "@/shared/ui/SectionHeader";
import CodeCard from "@/shared/ui/CodeCard";

export default function LanguageSection({ languages }) {
  return (
    <section id="language" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader
        title="Language"
        description="Languages I use or study."
        fields={[
          { type: "String", name: "language" },
          { type: "String", name: "level" },
        ]}
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {languages.map((item) => (
          <CodeCard
            key={item.id}
            fileName={`language-${item.id}.java`}
            topRight={item.level}
            lineNumbers={["01", "02", "03"]}
          >
            <a href={`#/language/${item.id}`} className="group block transition-colors hover:text-white">
              <div className="space-y-3">
                <div className="space-y-1 text-sm text-zinc-400">
                  <div>
                    <span className="text-[#c792ea]">Language</span>{" "}
                    <span className="text-white">{item.id}</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-[#c792ea]">new</span>{" "}
                    <span className="text-white">Language</span>
                    <span className="text-zinc-500">();</span>
                  </div>
                  <div>
                    <span className="text-[#82aaff]">{item.id}</span>
                    <span className="text-zinc-500">.</span>
                    <span className="text-[#82aaff]">language</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-[#ecc48d]">"{item.language}"</span>;
                  </div>
                  <div>
                    <span className="text-[#82aaff]">{item.id}</span>
                    <span className="text-zinc-500">.</span>
                    <span className="text-[#82aaff]">level</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-[#ecc48d]">"{item.level}"</span>;
                  </div>
                </div>

                <div className="flex justify-end">
                  <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </div>
            </a>
          </CodeCard>
        ))}
      </div>
    </section>
  );
}
