import { ArrowRight } from "lucide-react";
import SectionHeader from "@/shared/ui/SectionHeader";
import CodeCard from "@/shared/ui/CodeCard";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      <SectionHeader
        title="Projects"
        description="Selected work and planned builds."
        fields={[
          { type: "String", name: "title" },
          { type: "String", name: "status" },
        ]}
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {projects.map((project) => {
          const isPlanned = project.status === "planned";
          const tagList   = project.tags.slice(0, 3).join(", ");

          return (
            <CodeCard
              key={project.id}
              fileName={`project-${project.id}.java`}
              topRight={isPlanned ? "planned" : "active"}
              lineNumbers={["01", "02", "03", "04", "05"]}
              className={isPlanned ? "opacity-70" : ""}
            >
              <a
                href={`#project-${project.id}`}
                className="group block transition-colors hover:text-white"
                aria-label={`${project.title} 자세히 보기`}
              >
                <div className="space-y-3">
                  <div className="space-y-1 text-[13px] text-zinc-400 sm:text-sm">
                    <div>
                      <span className="text-[#c792ea]">Project</span>{" "}
                      <span className="text-white">{project.id}</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#c792ea]">new</span>{" "}
                      <span className="text-white">Project</span>
                      <span className="text-zinc-500">();</span>
                    </div>
                    <div>
                      <span className="text-[#82aaff]">{project.id}</span>
                      <span className="text-zinc-500">.</span>
                      <span className="text-[#82aaff]">title</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#ecc48d]">"{project.title}"</span>;
                    </div>
                    <div>
                      <span className="text-[#82aaff]">{project.id}</span>
                      <span className="text-zinc-500">.</span>
                      <span className="text-[#82aaff]">status</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#ecc48d]">"{project.status}"</span>;
                    </div>
                    <div>
                      <span className="text-zinc-600">{"// "}{tagList}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
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
