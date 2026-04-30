import { Clock } from "lucide-react";
import MotionSection from "./MotionSection";

export default function DailyRoutineSection({ routine }) {
  return (
    <MotionSection
      id="cat-routine"
      kicker="Daily Routine"
      title="하루 루틴"
      description="반복되는 하루도 기록해두면 이 고양이만의 이력서가 됩니다."
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="cat-card rounded-[2rem] p-4 sm:p-6">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {routine.map((item) => (
            <article key={`${item.time}-${item.title}`} className="rounded-3xl border border-[#d9c3ad]/70 bg-white/48 p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f3dcc6] text-[#9a5f42]">
                  <Clock className="h-5 w-5" />
                </span>
                <p className="font-mono text-sm font-black text-[#a05f3f]">{item.time}</p>
              </div>
              <h3 className="text-xl font-black text-[#33271f]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#756252]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
