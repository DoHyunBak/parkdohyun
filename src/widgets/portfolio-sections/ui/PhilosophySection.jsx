import SectionHeader from "@/shared/ui/SectionHeader";

export default function PhilosophySection({ philosophy }) {
  return (
    <section id="vision" className="space-y-10 border-t border-zinc-900 pt-8">
      <SectionHeader
        title="핵심 철학"
        description="Designing the technical backbone that supports organizational operations."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            {philosophy.direction.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400 font-mono">
            {philosophy.direction.content}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            {philosophy.vision.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400 font-mono">
            {philosophy.vision.content}
          </p>
        </div>
      </div>
    </section>
  );
}
