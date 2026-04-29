import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  FileCode2,
  GraduationCap,
  Languages,
  PanelLeft,
  Server,
  Target,
} from "lucide-react";
import { portfolioData } from "@/entities/portfolio/model/portfolioData";
import AppFooter from "@/widgets/footer/ui/AppFooter";
import SpotlightCursor from "@/shared/ui/SpotlightCursor";

const pageMeta = {
  education: {
    eyebrow: "Education",
    title: "Education",
    description: "Academic background and focus.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Skills",
    description: "How I use each technology.",
  },
  language: {
    eyebrow: "Language",
    title: "Language",
    description: "Languages I use or study.",
  },
  certifications: {
    eyebrow: "Certifications",
    title: "Certifications",
    description: "Certificates and study plans.",
  },
};

const levelBadgeClassNameByLevel = {
  Native: "bg-white text-black",
  Intermediate: "border border-zinc-700 bg-zinc-800 text-zinc-300",
  Beginner: "border border-zinc-800 bg-transparent text-zinc-500",
};

const statusBadgeClassNameByStatus = {
  취득: "bg-white text-black",
  준비중: "border border-zinc-700 bg-zinc-800 text-zinc-300",
  예정: "border border-zinc-800 bg-transparent text-zinc-500",
};

function PageShell({ type, item, children }) {
  const sectionMeta = pageMeta[type] ?? pageMeta.skills;
  const meta = item
    ? {
        eyebrow: sectionMeta.eyebrow,
        title: item.title ?? item.category ?? item.name,
        description: item.role ?? item.tech ?? item.detail ?? item.level ?? sectionMeta.description,
      }
    : sectionMeta;

  return (
    <div className="word-keep-all min-h-screen bg-[#090b0f] text-zinc-300 selection:bg-[#c6e478] selection:text-black">
      <SpotlightCursor />
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <div className="mt-[-180px] h-[360px] w-[760px] rounded-full bg-[#273043]/30 blur-[120px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#0d1117] shadow-2xl shadow-black/30">
          <div className="flex h-10 items-center justify-between border-b border-zinc-800 bg-[#111318]">
            <div className="flex h-full items-center">
              <div className="flex h-full items-center gap-2 border-r border-zinc-800 bg-[#0d1117] px-4 text-xs text-zinc-300 font-mono">
                <FileCode2 className="h-3.5 w-3.5 text-[#6fb6d8]" />
                {meta.eyebrow.toLowerCase()}.tsx
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 text-xs text-zinc-500 font-mono">
              <PanelLeft className="h-3.5 w-3.5" />
              detail view
            </div>
          </div>

          <div className="border-b border-zinc-800 bg-[#0b0f14] px-4 py-2 text-xs text-zinc-500 font-mono">
            /src/pages/detail/{meta.eyebrow.toLowerCase()}.tsx
          </div>

          <div className="px-4 py-8 md:px-8 lg:px-10">
            <a
              href="#"
              className="mb-8 inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-[#151922] px-4 py-2 text-xs font-bold text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to workspace
            </a>

            <header className="mb-10 border-b border-zinc-800 pb-8">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500 font-mono">
                {meta.eyebrow}
              </div>
              <h1 className="text-4xl font-black text-white md:text-6xl">{meta.title}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 font-mono md:text-base">
                {meta.description}
              </p>
            </header>

            {children}
          </div>
        </div>
      </main>

      <AppFooter name={portfolioData.profile.name} />
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-md border border-zinc-800 bg-[#090b0f] px-3 py-1 text-xs text-zinc-400 font-mono">
      {children}
    </span>
  );
}

function DetailCard({ icon: Icon, title, children }) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-[#0b0f14] p-6">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-zinc-400" />
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      {children}
    </article>
  );
}

function NotFoundDetail() {
  return (
    <DetailCard icon={BookOpen} title="항목을 찾을 수 없습니다">
      <p className="text-sm leading-relaxed text-zinc-400 font-mono">
        선택한 항목과 일치하는 상세 정보가 없습니다. 메인 화면에서 다시 선택해 주세요.
      </p>
    </DetailCard>
  );
}

function EducationDetail({ itemId }) {
  const exp = portfolioData.experience.find((item) => item.id === itemId) ?? portfolioData.experience[0];

  if (!exp) return <NotFoundDetail />;

  return (
    <DetailCard icon={GraduationCap} title={exp.title}>
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="text-sm font-bold text-zinc-500 font-mono">{exp.period}</div>
        <div className="text-sm text-zinc-400 font-mono">{exp.role}</div>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-zinc-300 font-mono">{exp.description}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {(exp.focusAreas ?? []).map((area) => (
          <Pill key={area}>{area}</Pill>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {(exp.details ?? []).map((detail) => (
              <div key={detail.title} className="rounded-lg border border-zinc-800 bg-[#090b0f] p-4">
            <h3 className="mb-3 text-sm font-bold text-white">{detail.title}</h3>
            <p className="text-xs leading-relaxed text-zinc-400 font-mono">{detail.content}</p>
          </div>
        ))}
      </div>
    </DetailCard>
  );
}

function SkillsDetail({ itemId }) {
  const skill = portfolioData.skills.find((item) => item.id === itemId) ?? portfolioData.skills[0];

  if (!skill) return <NotFoundDetail />;

  return (
    <DetailCard icon={Server} title={skill.category}>
      <div className="mb-4 text-sm text-zinc-400 font-mono">{skill.tech}</div>
      <p className="mb-5 text-sm leading-relaxed text-zinc-300 font-mono">{skill.description}</p>
      <ul className="space-y-3">
        {(skill.details ?? []).map((detail) => (
          <li key={detail} className="flex gap-3 text-xs leading-relaxed text-zinc-400 font-mono">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      {skill.evidence && (
        <div className="mt-5 rounded-lg border border-zinc-800 bg-[#090b0f] p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-zinc-500 font-mono">
            <Target className="h-3.5 w-3.5" /> 프로젝트에서 쓴 방식
          </div>
          <p className="text-xs leading-relaxed text-zinc-400 font-mono">{skill.evidence}</p>
        </div>
      )}
    </DetailCard>
  );
}

function LevelBadge({ level }) {
  const className = levelBadgeClassNameByLevel[level] ?? levelBadgeClassNameByLevel.Beginner;

  return (
    <div className={`font-mono text-xs ${className}`}>
      <span className="text-[#c792ea]">Lang</span>{" "}
      <span className="text-white">level</span>{" "}
      <span className="text-zinc-500">=</span>{" "}
      <span className="text-[#ecc48d]">'{level}'</span>
      <span className="text-zinc-500">;</span>
    </div>
  );
}

function LanguageDetail({ itemId }) {
  const language = portfolioData.languages.find((item) => item.id === itemId) ?? portfolioData.languages[0];

  if (!language) return <NotFoundDetail />;

  const certificates = (language.certificates ?? []).filter((cert) => cert.name !== "-");

  return (
    <DetailCard icon={Languages} title={language.language}>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <LevelBadge level={language.level} />
        {certificates.map((cert) => (
          <Pill key={`${cert.name}-${cert.grade}`}>
            {cert.name} · {cert.grade}
          </Pill>
        ))}
      </div>
      <ul className="space-y-3">
        {(language.details ?? []).map((detail) => (
          <li key={detail} className="flex gap-3 text-xs leading-relaxed text-zinc-400 font-mono">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </DetailCard>
  );
}

function StatusBadge({ status }) {
  const className = statusBadgeClassNameByStatus[status] ?? statusBadgeClassNameByStatus.예정;

  return (
    <span className={`rounded-sm px-2 py-1 text-[10px] font-bold uppercase font-mono ${className}`}>
      {status === "취득" ? "Acquired" : status === "준비중" ? "Preparing" : "Planned"}
    </span>
  );
}

function CertificationsDetail({ itemId }) {
  const cert = portfolioData.certifications.find((item) => item.id === itemId) ?? portfolioData.certifications[0];

  if (!cert) return <NotFoundDetail />;

  return (
    <DetailCard icon={Award} title={cert.name}>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <StatusBadge status={cert.status} />
        <span className="text-sm text-zinc-500 font-mono">{cert.detail}</span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr]">
        <div className="space-y-3">
          {(cert.details ?? []).map((detail) => (
            <p key={detail} className="text-xs leading-relaxed text-zinc-400 font-mono">
              {detail}
            </p>
          ))}
        </div>
        {cert.portfolioValue && (
          <div className="rounded-lg border border-zinc-800 bg-[#090b0f] p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-zinc-500 font-mono">
              <BookOpen className="h-3.5 w-3.5" /> 포트폴리오에서의 의미
            </div>
            <p className="text-xs leading-relaxed text-zinc-400 font-mono">{cert.portfolioValue}</p>
          </div>
        )}
      </div>
    </DetailCard>
  );
}

function findSelectedItem(type, itemId) {
  if (type === "education") {
    return portfolioData.experience.find((item) => item.id === itemId) ?? portfolioData.experience[0];
  }

  if (type === "skills") {
    return portfolioData.skills.find((item) => item.id === itemId) ?? portfolioData.skills[0];
  }

  if (type === "language") {
    return portfolioData.languages.find((item) => item.id === itemId) ?? portfolioData.languages[0];
  }

  if (type === "certifications") {
    return portfolioData.certifications.find((item) => item.id === itemId) ?? portfolioData.certifications[0];
  }

  return null;
}

export default function DetailPage({ type, itemId }) {
  const selectedItem = findSelectedItem(type, itemId);
  const contentByType = {
    education: <EducationDetail itemId={itemId} />,
    skills: <SkillsDetail itemId={itemId} />,
    language: <LanguageDetail itemId={itemId} />,
    certifications: <CertificationsDetail itemId={itemId} />,
  };

  return (
    <PageShell type={type} item={selectedItem}>
      {contentByType[type] ?? <SkillsDetail itemId={itemId} />}
    </PageShell>
  );
}
