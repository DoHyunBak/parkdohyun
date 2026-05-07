import { ArrowRight, Database, ExternalLink, Github, Server } from "lucide-react";
import FuzzyText from "@/shared/ui/FuzzyText";

const PROJECT_COPY = {
  usto: {
    code: "PRJ-001",
    title: "대학물품관리시스템",
    domain: "대학 자산 관리",
    summary: "학내 물품 신청, 배부, 자산 추적을 한 흐름으로 관리하는 시스템입니다.",
    role: "Spring 백엔드, DB 설계, AWS 인프라, Flyway 마이그레이션",
    impact: "물품 소유 부서와 처리 상태를 추적할 수 있게 구조화했습니다.",
    architecture: ["Client", "Spring API", "JPA", "MySQL", "AWS"],
    erd: "https://www.erdcloud.com/d/3kAz5Rp8kcKG9qzRv",
    problem: "부서별 물품 관리가 흩어져 있어 소유자, 상태, 이력을 추적하기 어려웠습니다.",
    solution: "물품 신청, 배부, 자산 정보를 REST API와 관계형 DB 기준으로 정리했습니다.",
    result: "자산 흐름을 한 시스템에서 확인할 수 있는 관리 기반을 만들었습니다.",
  },
  smockOut: {
    code: "PRJ-002",
    title: "금연쉼터",
    domain: "모바일 커뮤니티",
    summary: "금연 도전자가 진행 상황을 공유하고 서로 응원하는 커뮤니티 앱입니다.",
    role: "Flutter 앱, Spring 백엔드, MySQL, AWS 배포",
    impact: "혼자 포기하지 않도록 사용자 간 응원 흐름을 만들었습니다.",
    architecture: ["Flutter", "Spring API", "MySQL", "Docker", "AWS"],
    problem: "금연을 혼자 진행하면 동기 유지가 어렵고 중간 이탈 가능성이 높았습니다.",
    solution: "사용자가 진행 상황을 공유하고 서로 피드백하는 커뮤니티 구조를 만들었습니다.",
    result: "금연 목표를 계속 확인하고 응원받을 수 있는 사용 흐름을 구성했습니다.",
  },
  "kids-friends": {
    code: "PRJ-003",
    title: "키즈카페 로봇",
    domain: "로봇 서비스 자동화",
    summary: "Temi 로봇과 AI 챗봇을 연동해 키즈카페 고객 응대를 자동화한 프로젝트입니다.",
    role: "백엔드 API, 데이터 연동, 로봇 서비스 흐름 설계",
    impact: "로봇, 센서, 서비스 데이터를 하나의 흐름으로 연결했습니다.",
    architecture: ["Temi", "Spring API", "MySQL", "Sensor", "AI Chatbot"],
    problem: "로봇, 센서, 서비스 데이터가 분리되면 고객 응대 흐름이 끊기기 쉽습니다.",
    solution: "Temi 로봇과 백엔드 API를 연결하고 응답 흐름을 표준화했습니다.",
    result: "키즈카페 환경에서 고객 안내와 데이터 연동을 자동화할 수 있게 했습니다.",
  },
};

function getProjectView(project) {
  const copy = PROJECT_COPY[project.id] ?? {};
  return {
    ...project,
    ...copy,
    title: copy.title ?? project.title,
    summary: copy.summary ?? project.summary,
    role: copy.role ?? project.role,
    impact: copy.impact ?? project.result,
    problem: copy.problem ?? project.problem,
    solution: copy.solution ?? project.solution,
    result: copy.result ?? project.result,
    architecture: copy.architecture ?? project.architecture ?? [],
  };
}

function ProjectLink({ href, children, accent = false }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 border px-3 py-2 font-mono text-xs transition-colors ${
        accent
          ? "border-[#ff6188]/50 bg-[#ff6188]/10 text-white hover:bg-[#ff6188]/18"
          : "border-white/10 bg-white/[0.03] text-[#cbd5e1] hover:border-white/25 hover:bg-white/[0.06]"
      }`}
    >
      {children}
    </a>
  );
}

function ProjectPlaceholderButton({ children }) {
  return (
    <span className="inline-flex cursor-not-allowed items-center gap-2 border border-white/10 bg-white/[0.015] px-3 py-2 font-mono text-xs text-[#6b7280]">
      {children}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const view = getProjectView(project);
  const topTags = view.tags?.slice(0, 8) ?? [];

  return (
    <article className="group relative min-w-0 overflow-hidden border border-white/10 bg-[#0a0a0a]/80">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#ff6188] via-[#fc9867] to-[#ffd866] opacity-70" />

      <div className="relative grid gap-8 p-5 md:grid-cols-[0.95fr_1.25fr] md:p-7">
        <div className="min-w-0 space-y-6">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#a0a0a0]">
            <span className="border border-[#ffd866]/30 bg-[#ffd866]/10 px-2 py-1 text-[#ffd866]">
              {view.code ?? `PRJ-${String(index + 1).padStart(3, "0")}`}
            </span>
            <span>{view.domain}</span>
            <span className="text-[#ff6188]">상태:{view.status === "active" ? "진행중" : view.status}</span>
          </div>

          <div className="space-y-3">
            <h3 className="word-keep-all break-keep font-sans text-2xl font-semibold leading-snug text-white md:text-3xl">
              {view.title}
            </h3>
            <p className="word-keep-all text-sm leading-7 text-[#cbd5e1] md:text-base">{view.summary}</p>
          </div>

          <div className="grid gap-3 text-xs text-[#d8dee9]">
            <div className="border-l border-[#ff6188]/70 bg-white/[0.03] px-3 py-3">
              <span className="block font-mono text-[#ff6188]">담당</span>
              <span className="word-keep-all">{view.role}</span>
            </div>
            <div className="border-l border-[#ffd866]/70 bg-white/[0.03] px-3 py-3">
              <span className="block font-mono text-[#ffd866]">핵심 성과</span>
              <span className="word-keep-all">{view.impact}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {topTags.map(tag => (
              <span
                key={tag}
                className="border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-[#d8dee9]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          <div className="grid gap-3">
            {[
              ["문제", view.problem],
              ["해결", view.solution],
              ["결과", view.result],
            ].map(([label, text]) => (
              <div key={label} className="border border-white/10 bg-black/35 p-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-xs text-[#fc9867]">
                  <ArrowRight className="h-3.5 w-3.5" />
                  {label}
                </div>
                <p className="word-keep-all text-sm leading-6 text-[#cbd5e1]">{text}</p>
              </div>
            ))}
          </div>

          <div className="border border-white/10 bg-black/35 p-4">
            <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#ffd866]">
              <Server className="h-3.5 w-3.5" />
              구조
            </div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#d8dee9]">
              {view.architecture.map((node, nodeIndex) => (
                <span key={`${view.id}-${node}`} className="flex items-center gap-2">
                  <span className="border border-white/10 bg-white/[0.03] px-2 py-1">{node}</span>
                  {nodeIndex < view.architecture.length - 1 && <span className="text-[#ff6188]">-&gt;</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <ProjectLink href={view.links?.github}>
              <Github className="h-4 w-4" />
              저장소
            </ProjectLink>
            <ProjectLink href={view.links?.docs} accent>
              <ExternalLink className="h-4 w-4" />
              서비스/문서
            </ProjectLink>
            {view.erd ? (
              <ProjectLink href={view.erd}>
                <Database className="h-4 w-4" />
                ERD 보기
              </ProjectLink>
            ) : (
              <ProjectPlaceholderButton>
                <Database className="h-4 w-4" />
                ERD 준비중
              </ProjectPlaceholderButton>
            )}
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-xs text-[#a0a0a0]">
              <Database className="h-4 w-4" />
              {view.tags?.includes("MySQL") ? "관계형 DB" : "시스템 연동"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ModernProjectsSection({ projects }) {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <h2 aria-label="Project" className="text-4xl font-bold uppercase text-white md:text-5xl">
            <FuzzyText
              fontSize="clamp(2.25rem, 4vw, 3rem)"
              fontWeight={700}
              baseIntensity={0.035}
              hoverIntensity={0.14}
              fuzzRange={7}
              fps={30}
              transitionDuration={8}
              gradient={["#ffffff", "#dbeafe", "#c4b5fd"]}
              className="block h-auto max-w-full"
            >
              Project
            </FuzzyText>
          </h2>

        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
