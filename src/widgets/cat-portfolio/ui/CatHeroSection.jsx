import { motion, useReducedMotion } from "framer-motion";
import { CakeSlice, Coffee, Heart, Sparkles } from "lucide-react";

const summaryIcons = {
  age: CakeSlice,
  personality: Heart,
  snack: Coffee,
  mood: Sparkles,
};

export default function CatHeroSection({ profile, onNavigate }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:pb-16 lg:pt-14">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7bda2]/70 bg-white/55 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9a6648] shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Cat Portfolio
        </div>
        <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-[#2f251e] sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[#5c4a3c] sm:text-2xl">
          {profile.tagline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#756252] sm:text-lg">{profile.intro}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#d8c0a8]/80 bg-[#fffaf4]/70 px-3 py-1.5 text-sm font-bold text-[#8a5a42] shadow-sm backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate("cat-gallery")}
            className="rounded-full bg-[#2f251e] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_36px_rgba(47,37,30,0.22)] transition hover:-translate-y-0.5 hover:bg-[#49372b] focus:outline-none focus:ring-2 focus:ring-[#c98b63]/50"
          >
            사진 아카이브 보기
          </button>
          <button
            type="button"
            onClick={() => onNavigate("cat-profile")}
            className="rounded-full border border-[#cdb49c] bg-white/55 px-5 py-3 text-sm font-bold text-[#49372b] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#c98b63]/40"
          >
            프로필 보기
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: reduceMotion ? 0 : 0.08 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[2.2rem] bg-[#d79b6f]/20 blur-3xl" aria-hidden="true" />
        <div className="cat-photo-card relative overflow-hidden rounded-[2rem] p-3">
          <div className="overflow-hidden rounded-[1.45rem]">
            <img
              src={profile.heroImage}
              alt={profile.heroImageAlt}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/45 bg-white/62 p-4 shadow-lg backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a66d4f]">Today</p>
            <p className="mt-1 text-lg font-black text-[#33271f]">창가 근무 중</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        {profile.summaryCards.map((item, index) => {
          const Icon = summaryIcons[item.id] ?? Sparkles;

          return (
            <motion.article
              key={item.id}
              className="cat-card rounded-3xl p-5"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: reduceMotion ? 0 : index * 0.04 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f2d7c0] text-[#8b4f35]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold text-[#8f755f]">{item.label}</p>
              <p className="mt-1 text-2xl font-black text-[#33271f]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#766355]">{item.note}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
