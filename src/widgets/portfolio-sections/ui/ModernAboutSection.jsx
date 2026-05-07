import { motion } from "framer-motion";
import LogoLoop from "@/shared/ui/LogoLoop";
import FuzzyText from "@/shared/ui/FuzzyText";
import { 
  SiSpringboot, 
  SiMysql, 
  SiDocker, 
  SiGit, 
  SiSap, 
  SiHibernate, 
  SiSpringsecurity,
  SiOpenjdk
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const TECH_LOGOS = [
  { node: <FaJava />, title: "Java" },
  { node: <SiSpringboot />, title: "Spring Boot" },
  { node: <SiHibernate />, title: "Hibernate" },
  { node: <SiSpringsecurity />, title: "Spring Security" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <FaAws />, title: "AWS" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiGit />, title: "Git" },
  { node: <SiSap />, title: "SAP" },
  { node: <SiOpenjdk />, title: "OpenJDK" },
];

const ABOUT_ROWS = [
  {
    key: "domain",
    label: "Domain",
    value: "Enterprise systems, ERP/SAP context, operational data flow",
  },
  {
    key: "backend",
    label: "Backend",
    value: "Java, Spring Boot, JPA, transaction-aware API design",
  },
  {
    key: "infra",
    label: "Infra",
    value: "MySQL, Docker, AWS, Flyway-based database migration",
  },
];

const ENGINEERING_NOTES = [
  "Design APIs around business rules, not only screens.",
  "Keep transaction boundaries explicit and testable.",
  "Prefer readable service logic over clever abstraction.",
  "Treat database schema and migration history as product code.",
];

export default function ModernAboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 aria-label="About Me" className="text-4xl md:text-5xl font-light text-white mb-16">
          <FuzzyText
            fontSize="clamp(2.25rem, 4vw, 3rem)"
            fontWeight={700}
            baseIntensity={0.08}
            hoverIntensity={0.22}
            fuzzRange={12}
            fps={30}
            transitionDuration={8}
            gradient={["#ffffff", "#dbeafe", "#c4b5fd"]}
            className="block h-auto max-w-full"
          >
            About Me
          </FuzzyText>
        </h2>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="font-mono text-sm leading-7 text-[#d8dee9]">
              <p>
                <span className="text-[#ff6188]">public final class</span>{" "}
                <span className="text-white">BackendProfile</span>{" "}
                <span className="text-[#a0a0a0]">{"{"}</span>
              </p>
              <div className="space-y-2 pl-5">
                <p>
                  <span className="text-[#fc9867]">role</span>
                  <span className="text-[#a0a0a0]"> = </span>
                  <span className="text-[#ffd866]">"Enterprise Backend Developer"</span>
                  <span className="text-[#a0a0a0]">;</span>
                </p>
                <p>
                  <span className="text-[#fc9867]">focus</span>
                  <span className="text-[#a0a0a0]"> = </span>
                  <span className="text-[#ffd866]">"Reliable APIs, data consistency, system operations"</span>
                  <span className="text-[#a0a0a0]">;</span>
                </p>
                <p>
                  <span className="text-[#fc9867]">current</span>
                  <span className="text-[#a0a0a0]"> = </span>
                  <span className="text-[#ffd866]">"3rd-year CS / IT student building production-minded projects"</span>
                  <span className="text-[#a0a0a0]">;</span>
                </p>
              </div>
              <p className="text-[#a0a0a0]">{"}"}</p>
            </div>

            <p className="max-w-3xl text-base font-light leading-8 text-[#cbd5e1]">
              I focus on backend systems that support real business operations: data ownership,
              transaction safety, API contracts, and infrastructure that can be maintained after
              deployment. My portfolio is organized around enterprise backend work rather than
              decorative UI claims.
            </p>

            <div className="grid gap-3">
              {ABOUT_ROWS.map(item => (
                <div
                  key={item.key}
                  className="grid gap-2 border-l border-[#ff6188]/60 bg-white/[0.03] px-4 py-3 font-mono text-sm sm:grid-cols-[120px_1fr]"
                >
                  <span className="text-[#ffd866]">{item.label}</span>
                  <span className="text-[#d8dee9]">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 overflow-hidden"
          >
            <h3 className="border-b border-white/10 pb-2 font-mono text-xl font-semibold text-white">
              technical_expertise[]
            </h3>
            
            <div className="border border-white/10 bg-white/[0.03] py-10">
              <LogoLoop 
                logos={TECH_LOGOS} 
                speed={40} 
                logoHeight={50} 
                gap={60} 
                scaleOnHover 
                fadeOut 
                fadeOutColor="#0a0a0a"
              />
            </div>

            <div className="space-y-3 font-mono text-sm">
              {ENGINEERING_NOTES.map((note, index) => (
                <p key={note} className="flex gap-3 border-b border-white/5 pb-3 text-[#a0a0a0]">
                  <span className="text-[#ff6188]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{note}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
