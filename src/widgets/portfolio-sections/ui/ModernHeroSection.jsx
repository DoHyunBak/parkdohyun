import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, FileText } from "lucide-react";
import ASCIIText from "@/shared/ui/ASCIIText";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" },
  }),
};

export default function ModernHeroSection({ profile }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#141414] px-6 pt-24 md:px-12"
    >
      {/* Decorative ASCII art — dimmed background layer, non-interactive */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.16]"
        aria-hidden="true"
      >
        <ASCIIText text={profile.name} enableWaves={false} asciiFontSize={10} />
      </div>

      {/* Readability overlay so foreground text stays high-contrast */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-[#ff6188]/40 bg-[#ff6188]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#ff6188]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6188]" />
          {profile.role}
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {profile.name}
          <span className="mt-2 block bg-gradient-to-r from-[#ff6188] via-[#fc9867] to-[#ffd866] bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
            DoHyun Park
          </span>
        </motion.h1>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-[#ff6188] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-[#ff7a9c] hover:shadow-[0_0_24px_rgba(255,97,136,0.45)]"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#ffd866]/60 hover:bg-white/[0.04]"
          >
            <Mail className="h-4 w-4" />
            연락하기
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex items-center gap-6 font-mono text-sm text-[#a0a0a0]"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <FileText className="h-4 w-4" />
            이력서
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="다음 섹션으로 스크롤"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40 transition-colors hover:text-white"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
