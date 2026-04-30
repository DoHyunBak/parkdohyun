import { motion, useReducedMotion } from "framer-motion";
import { Activity } from "lucide-react";
import MotionSection from "./MotionSection";

export default function PersonalityStatsSection({ stats }) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection
      id="cat-stats"
      kicker="Personality Stats"
      title="성격 능력치"
      description="귀여움을 과장하지 않고, 함께 살며 알게 된 성격을 능력치 카드로 표현했습니다."
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {stats.map((stat, index) => (
          <article key={stat.id} className="cat-card rounded-3xl p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e7f0df] text-[#647a48]">
                  <Activity className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-black text-[#33271f]">{stat.label}</h3>
                  <p className="text-sm text-[#766355]">{stat.note}</p>
                </div>
              </div>
              <span className="rounded-full bg-[#33271f] px-3 py-1 text-sm font-black text-white">
                {stat.score}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[#ead8c5]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#b86c48] via-[#d89a68] to-[#8ea76a]"
                initial={reduceMotion ? false : { width: 0 }}
                whileInView={{ width: `${stat.score}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: reduceMotion ? 0 : index * 0.04 }}
              />
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
