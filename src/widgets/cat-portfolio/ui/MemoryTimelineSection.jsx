import { CalendarDays } from "lucide-react";
import MotionSection from "./MotionSection";

export default function MemoryTimelineSection({ memories }) {
  return (
    <MotionSection
      id="cat-memories"
      kicker="Memory Timeline"
      title="함께한 시간"
      description="처음 만난 날부터 최근 근황까지, 차분한 타임라인으로 남긴 추억입니다."
      className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-px bg-[#d8c0a8] sm:left-1/2" aria-hidden="true" />
        <div className="space-y-5">
          {memories.map((memory, index) => (
            <article
              key={`${memory.date}-${memory.title}`}
              className={`relative grid gap-4 sm:grid-cols-[1fr_44px_1fr] ${
                index % 2 === 0 ? "" : "sm:[&>.memory-card]:col-start-3"
              }`}
            >
              <div
                className={`memory-card cat-card ml-14 rounded-3xl p-5 sm:ml-0 ${
                  index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-3"
                }`}
              >
                <p className="font-mono text-sm font-black text-[#a05f3f]">{memory.date}</p>
                <h3 className="mt-2 text-xl font-black text-[#33271f]">{memory.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#756252]">{memory.description}</p>
              </div>
              <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d8c0a8] bg-[#fff8ee] text-[#9a5f42] shadow-sm sm:static sm:col-start-2">
                <CalendarDays className="h-5 w-5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
