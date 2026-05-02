import { Github, ExternalLink } from "lucide-react";
import CodeCard from "@/shared/ui/CodeCard";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {projects.map((project) => {
          const isPlanned = project.status === "planned";
          const tagList   = project.tags.slice(0, 3).join(", ");
          const githubUrl = project.links?.github;
          const deployUrl = project.links?.docs && project.links.docs !== "#" ? project.links.docs : null;

          return (
            <CodeCard
              key={project.id}
              fileName={`project-${project.id}.java`}
              topRight={isPlanned ? "planned" : "active"}
              lineNumbers={["01","02","03","04","05","06","07","08","09"]}
              className={isPlanned ? "opacity-70" : ""}
            >
              <div className="space-y-3">
                {/* Project title as human-readable heading */}
                <div className="border-b border-zinc-800 pb-2">
                  <span className="text-sm font-bold leading-tight text-white sm:text-base">
                    {project.title}
                  </span>
                </div>

                {/* Code block */}
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
                    <span className="text-[#82aaff]">status</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-[#ecc48d]">"{project.status}"</span>
                    <span className="text-zinc-500">;</span>
                  </div>
                  <div className="text-zinc-600">{"// "}{tagList}</div>
                </div>

                {/* Summary / role / achievement — brighter, accented */}
                {(project.summary || project.roleKo) && (
                  <div className="space-y-1 border-t border-zinc-800 pt-2 text-[12px] leading-relaxed sm:text-[13px]">
                    {project.summary && (
                      <div className="text-zinc-300">
                        {"/* "}{project.summary}{" */"}
                      </div>
                    )}
                    {project.roleKo && (
                      <div>
                        <span className="text-[#6fb6d8]">{"// 역할: "}</span>
                        <span className="text-zinc-400">{project.roleKo}</span>
                      </div>
                    )}
                    {project.achievement && (
                      <div>
                        <span className="text-[#c6e478]">{"// 성과: "}</span>
                        <span className="text-zinc-400">{project.achievement}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Link buttons */}
                <div className="flex items-center gap-2 border-t border-zinc-800 pt-2">
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-md border border-zinc-700 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white font-mono"
                    >
                      <Github className="h-3 w-3 shrink-0" />
                      GitHub
                    </a>
                  )}
                  {deployUrl && (
                    <a
                      href={deployUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-md border border-zinc-700 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-colors hover:border-[#6fb6d8] hover:text-[#6fb6d8] font-mono"
                    >
                      <ExternalLink className="h-3 w-3 shrink-0" />
                      배포 사이트
                    </a>
                  )}
                </div>
              </div>
            </CodeCard>
          );
        })}
      </div>
    </section>
  );
}
