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

const PROFILE_INFO = [
  { label: "이름", value: "박도현 (DoHyun Park)" },
  { label: "나이", value: "2002년생" },
  { label: "학력", value: "한양대학교 ICT융합학부 (2021.03 ~ 2027.03 예정)" },
  { label: "거주지", value: "서울시 관악구" },
];

const ABOUT_ROWS = [
  {
    key: "domain",
    label: "도메인",
    value: "B2B · 엔터프라이즈 시스템, ERP/SAP 환경, 비즈니스 운영 데이터 흐름",
  },
  {
    key: "backend",
    label: "백엔드",
    value: "Java, Spring Boot, JPA, 트랜잭션을 고려한 API 설계",
  },
  {
    key: "infra",
    label: "인프라",
    value: "MySQL, Docker, AWS, Flyway를 이용한 데이터베이스 마이그레이션",
  },
  {
    key: "frontend",
    label: "프론트엔드",
    value: "필요한 화면은 바이브 코딩으로 구현 (백엔드에 집중)",
  },
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
            소개
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
            <dl className="space-y-2.5">
              {PROFILE_INFO.map(item => (
                <div key={item.label} className="grid gap-1 text-sm sm:grid-cols-[88px_1fr]">
                  <dt className="text-[#a0a0a0]">{item.label}</dt>
                  <dd className="word-keep-all text-[#e5e7eb]">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="grid gap-3">
              {ABOUT_ROWS.map(item => (
                <div
                  key={item.key}
                  className="grid gap-2 border-l border-[#ff6188]/60 bg-white/[0.03] px-4 py-3 text-sm sm:grid-cols-[120px_1fr]"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
