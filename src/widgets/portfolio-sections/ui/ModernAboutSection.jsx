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
    label: "도메인",
    value: "엔터프라이즈 시스템, ERP/SAP 환경, 비즈니스 운영 데이터 흐름",
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
];

const ENGINEERING_NOTES = [
  "화면이 아닌 비즈니스 규칙을 중심으로 API를 설계합니다.",
  "트랜잭션 경계를 명확하게 하고 테스트 가능한 구조를 유지합니다.",
  "복잡한 추상화보다 읽기 좋은 서비스 로직을 선호합니다.",
  "데이터베이스 스키마와 마이그레이션 이력을 제품 코드의 일부로 관리합니다.",
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
                  <span className="text-[#ffd866]">"엔터프라이즈 백엔드 개발자"</span>
                  <span className="text-[#a0a0a0]">;</span>
                </p>
                <p>
                  <span className="text-[#fc9867]">focus</span>
                  <span className="text-[#a0a0a0]"> = </span>
                  <span className="text-[#ffd866]">"신뢰할 수 있는 API, 데이터 일관성, 시스템 운영"</span>
                  <span className="text-[#a0a0a0]">;</span>
                </p>
                <p>
                  <span className="text-[#fc9867]">current</span>
                  <span className="text-[#a0a0a0]"> = </span>
                  <span className="text-[#ffd866]">"현업 지향 프로젝트를 개발 중인 컴퓨터공학 전공생"</span>
                  <span className="text-[#a0a0a0]">;</span>
                </p>
              </div>
              <p className="text-[#a0a0a0]">{"}"}</p>
            </div>

            <p className="max-w-3xl text-base font-light leading-8 text-[#cbd5e1]">
              실제 비즈니스 운영을 지원하는 백엔드 시스템에 집중합니다. 데이터 소유권, 트랜잭션 안정성, API 규약, 배포 후 유지보수가 가능한 인프라를 중요하게 생각합니다. 단순히 화려한 UI보다는 엔터프라이즈 백엔드 관점에서의 완성도에 가치를 둡니다.
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
