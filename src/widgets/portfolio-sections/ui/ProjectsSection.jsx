import React from "react";
import { ArrowDown, ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import SectionHeader from "@/shared/ui/SectionHeader";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader
        title="프로젝트"
        description="System architectures designed for business process management and data reliability."
      />

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="relative block rounded-3xl border border-zinc-800/60 bg-zinc-900/30 p-8 transition-colors hover:border-zinc-700 md:p-10"
          >
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {project.title}
              </h3>

              <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
                <div>
                  <span className="mb-2 block font-bold text-zinc-500">배경 및 문제</span>
                  <p className="text-sm leading-relaxed text-zinc-300 font-mono">{project.problem}</p>
                </div>
                <div>
                  <span className="mb-2 block font-bold text-white">설계 및 해결방안</span>
                  <p className="text-sm leading-relaxed text-zinc-300 font-mono">{project.solution}</p>
                </div>
                <div>
                  <span className="mb-2 block font-bold text-white">기대 효과</span>
                  <p className="text-sm leading-relaxed text-zinc-300 font-mono">{project.result}</p>
                </div>
              </div>

              {project.architecture && (
                <div className="mt-10 border-t border-zinc-800/50 pt-6">
                  <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-zinc-500 font-mono">
                    System Architecture
                  </span>
                  <div className="flex flex-col items-center gap-3 text-xs font-medium text-zinc-300 font-mono md:flex-row">
                    {project.architecture.map((layer, index) => (
                      <React.Fragment key={layer}>
                        <div className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 text-center shadow-sm md:w-auto">
                          {layer}
                        </div>
                        {index < project.architecture.length - 1 && (
                          <ArrowRight className="hidden h-4 w-4 text-zinc-600 md:block" />
                        )}
                        {index < project.architecture.length - 1 && (
                          <ArrowDown className="h-4 w-4 text-zinc-600 md:hidden" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col justify-between gap-4 border-t border-zinc-800/50 pt-6 md:flex-row md:items-center">
                <div className="text-sm font-bold text-zinc-500">
                  역할: <span className="ml-2 font-normal text-zinc-300 font-mono">{project.role}</span>
                </div>

                {project.links && (
                  <div className="flex items-center gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-xs text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white font-mono"
                      >
                        <Github className="h-3.5 w-3.5" /> Repository
                      </a>
                    )}
                    {project.links.docs && (
                      <a
                        href={project.links.docs}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-xs text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white font-mono"
                      >
                        <LinkIcon className="h-3.5 w-3.5" /> Open Link
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
