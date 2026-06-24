import React, { useState, useEffect } from "react";
import "@/app/styles/namuwiki-original.css";
import NamuwikiShell from "./NamuwikiShell.jsx";
import "@/app/styles/wiki.css";
import { wikiData } from "@/entities/wiki/model/wikiData.jsx";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TistoryIcon } from "@/shared/ui/TistoryIcon";
import LetterGlitch from "@/shared/ui/LetterGlitch";
import PixelCard from "@/shared/ui/PixelCard";
import {
  Box,
  Folder,
  FolderOpen,
  ChevronRight,
  ChevronDown,
  FileText,
  FileCode2,
  GitCommit,
} from "lucide-react";

/* Activity Log — Conventional Commits 더미 */
const COMMITS = [
  { hash: "a1b2c3d", type: "feat", scope: "park-brain", msg: "sync daily obsidian logs", ago: "2시간 전" },
  { hash: "f8e9d0a", type: "refactor", scope: "auth", msg: "separate session config", ago: "5시간 전" },
  { hash: "7c4b2e1", type: "docs", scope: "profile", msg: "update career timeline & stack", ago: "어제" },
  { hash: "3d9a6f5", type: "fix", scope: "ui", msg: "resolve layout shift in right sidebar", ago: "어제" },
  { hash: "b6a1e8c", type: "feat", scope: "rag", msg: "add hybrid retriever w/ rerank", ago: "2일 전" },
  { hash: "e2f7c90", type: "perf", scope: "db", msg: "add covering index on sync_history", ago: "3일 전" },
  { hash: "9a0d4b2", type: "fix", scope: "g2b", msg: "handle openapi 503 with backoff", ago: "4일 전" },
  { hash: "c3d8f15", type: "refactor", scope: "tx", msg: "isolate logging via REQUIRES_NEW", ago: "5일 전" },
  { hash: "1f5b7a3", type: "chore", scope: "deps", msg: "bump spring-boot to 3.3.x", ago: "1주 전" },
  { hash: "8e4c2d6", type: "test", scope: "auth", msg: "cover session expiry edge cases", ago: "1주 전" },
  { hash: "4b9e1f0", type: "feat", scope: "ax", msg: "add agent task dispatcher", ago: "2주 전" },
  { hash: "d7a3c84", type: "ci", scope: "deploy", msg: "cache gradle build on vercel", ago: "2주 전" },
];

/* ===== IDE 파일 탐색기 트리 컴포넌트 ===== */
const TREE_ICON = { size: 15, strokeWidth: 1.6 };

function TreeFolder({ label, defaultOpen = true, root = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const FolderIco = root ? Box : open ? FolderOpen : Folder;
  return (
    <div className="ide-folder">
      <button
        type="button"
        className="ide-row ide-folder-row"
        onClick={() => setOpen((o) => !o)}
        title={label}
      >
        {open ? (
          <ChevronDown {...TREE_ICON} className="ide-chevron" />
        ) : (
          <ChevronRight {...TREE_ICON} className="ide-chevron" />
        )}
        <FolderIco {...TREE_ICON} className="ide-ico ide-ico-folder" />
        <span className="ide-label">{label}</span>
      </button>
      {open && <div className="ide-children">{children}</div>}
    </div>
  );
}

function TreeFile({ href, label, active, code = false }) {
  const Ico = code ? FileCode2 : FileText;
  return (
    <a
      href={href}
      className={`ide-row ide-file${active ? " active" : ""}`}
      title={label}
    >
      <Ico size={14} strokeWidth={1.6} className="ide-ico" />
      <span className="ide-label">{label}</span>
    </a>
  );
}

const EDIT_JOKE =
  "비로그인 사용자는 이 문서를 편집할 수 없습니다. (애초에 진짜 나무위키가 아닙니다)";

/* 아이콘 맵핑 */
const LINK_ICONS = {
  github: <FaGithub style={{ verticalAlign: 'middle', marginRight: '4px' }} />,
  linkedin: <FaLinkedin style={{ verticalAlign: 'middle', marginRight: '4px', color: '#0A66C2' }} />,
  youtube: <FaYoutube style={{ verticalAlign: 'middle', marginRight: '4px', color: '#FF0000' }} />,
  tistory: <TistoryIcon style={{ width: '14px', height: '14px', verticalAlign: 'middle', marginRight: '4px' }} />,
};

/* 각주 위첨자 */
function Fn({ n, onHover, onLeave }) {
  return (
    <sup
      className="namu-fn"
      id={`fnref-${n}`}
      onMouseEnter={(e) => onHover(e, n)}
      onMouseLeave={onLeave}
    >
      <a href={`#fn-${n}`}>[{n}]</a>
    </sup>
  );
}

/* 링크 도메인 파비콘 (브랜드 아이콘이 없는 외부 http(s) 링크에 표시) */
function faviconUrl(href) {
  try {
    const u = new URL(href);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=64`;
  } catch {
    return null;
  }
}

/* 외부 링크 */
function Ext({ href, children, blue = true, icon }) {
  const IconComp = icon ? LINK_ICONS[icon] : null;
  const favicon = !IconComp ? faviconUrl(href) : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={blue ? { color: "var(--namu-link)", textDecoration: "none", display: 'inline-flex', alignItems: 'center' } : { display: 'inline-flex', alignItems: 'center' }}
    >
      {IconComp}
      {favicon && (
        <img
          src={favicon}
          alt=""
          width={14}
          height={14}
          loading="lazy"
          style={{ verticalAlign: "middle", marginRight: "4px", borderRadius: "2px", flexShrink: 0 }}
        />
      )}
      {children}
    </a>
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
function scrollToToc() {
  document
    .getElementById("namu-toc")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* 상단 전문 키워드 태그 */
const TECH_TAGS = [
  "Backend",
  "Java / Spring Boot",
  "ERP / SAP",
  "B2B Domain",
  "Data Modeling",
  "AX / RAG",
];

export default function WikiPortfolioPage() {
  const [toast, setToast] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });
  const [activeId, setActiveId] = useState(null);
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [building, setBuilding] = useState(false);
  const pixelRef = React.useRef(null);

  const enterSite = () => {
    if (leaving) return;
    // 1) 전체화면 픽셀이 모여듦  2) 픽셀이 흩어지며 사이트가 조립됨 (~2초)
    pixelRef.current?.appear();
    window.setTimeout(() => {
      setBuilding(true); // 사이트 컴포넌트 빌드 시작 (스플래시 뒤에서)
      setLeaving(true); // 스플래시 픽셀 페이드아웃 → 조립되는 사이트가 드러남
    }, 650);
    window.setTimeout(() => setEntered(true), 2300); // 스플래시 제거
  };

  // 다크 모드 강제 고정 (OS/사용자 설정 무시)
  useEffect(() => {
    document.body.classList.add("theseed-dark-mode");
    document.body.classList.remove("theseed-light-mode");
  }, []);

  // 입장 시 컴포넌트들이 픽셀처럼 조립되는 애니메이션 트리거
  useEffect(() => {
    if (building) document.body.classList.add("site-enter");
  }, [building]);

  // 좌측 파일트리 active 표시용: 현재 화면에 걸린 섹션 추적
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[id^="s-"]'));
    if (!els.length) return;
    const onScroll = () => {
      const off = 120;
      let cur = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= off) cur = el.id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        cur = els[els.length - 1].id;
      }
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const fireEdit = () => {
    setToast(EDIT_JOKE);
    window.clearTimeout(fireEdit._t);
    fireEdit._t = window.setTimeout(() => setToast(null), 2600);
  };

  const handleFnHover = (e, n) => {
    const text = wikiData.footnotes[n - 1];
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      show: true,
      text: text,
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 10,
    });
  };

  const handleFnLeave = () => {
    setTooltip((prev) => ({ ...prev, show: false }));
  };

  const FnWithProps = ({ n }) => (
    <Fn n={n} onHover={handleFnHover} onLeave={handleFnLeave} />
  );

  const Edit = () => (
    <span className="namu-edit" role="button" onClick={fireEdit}>
      [편집]
    </span>
  );

  const titleFull = `${wikiData.title}(${wikiData.disambiguation})`;

  const linksRow = wikiData.infobox.find((i) => i.type === "links");

  const renderInfoVal = (row) => {
    if (row.type === "debut") {
      return (
        <div>
          <div className="mono">{row.value}</div>
          <div
            style={{
              fontSize: "0.8em",
              color: "var(--namu-muted)",
              marginTop: "2px",
            }}
          >
            {row.sub}
          </div>
        </div>
      );
    }
    if (row.value === "TODO") return <span className="namu-todo">미정 (TODO)</span>;
    if (Array.isArray(row.value))
      return row.value.map((v, i) => <div key={i}>{v}</div>);
    return <div>{row.value}</div>;
  };

  /* === Step 3: 모던 프로필 카드 === */
  const profileCard = (
    <aside className="profile-card">
      <div className="profile-card-body">
        <dl className="profile-meta">
          {wikiData.infobox
            .filter((row) => row.type !== "links")
            .map((row) => (
              <div className="profile-meta-row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{renderInfoVal(row)}</dd>
              </div>
            ))}
        </dl>
        {linksRow && (
          <div className="profile-socials">
            {linksRow.value.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                title={l.label}
                aria-label={l.label}
                className="profile-social"
              >
                {LINK_ICONS[l.icon] || l.label[0]}
              </a>
            ))}
          </div>
        )}
      </div>
    </aside>
  );

  /* === 좌측 파일 탐색기 (IDE File Explorer) === */
  const fileTree = (
    <nav className="ide-tree">
      <div className="ide-tree-title">
        <span className="ide-tree-tab mono">parkdohyun / Structure</span>
      </div>
      <div className="ide-tree-body">
        <TreeFolder label="portfolio" root>
          <TreeFile href="#s-overview" label="Overview.md" active={activeId === "s-overview"} />
          <TreeFile href="#s-life" label="Career.md" active={activeId === "s-life"} />
          <TreeFile href="#s-style" label="DevStyle.md" active={activeId === "s-style"} />
          <TreeFolder label="stack">
            {wikiData.signatureStack.map((s) => (
              <TreeFile
                key={s.id}
                href={`#s-stack-${s.id}`}
                label={`${s.id}.java`}
                code
                active={activeId === `s-stack-${s.id}`}
              />
            ))}
          </TreeFolder>
          <TreeFolder label="projects">
            {wikiData.projects.map((p) => (
              <TreeFile
                key={p.id}
                href={`#s-proj-${p.id}`}
                label={`${p.id}.java`}
                code
                active={activeId === `s-proj-${p.id}`}
              />
            ))}
          </TreeFolder>
          <TreeFolder label="vibe-labs">
            {wikiData.vibeLabs.map((v) => (
              <TreeFile
                key={v.id}
                href={`#s-vibe-${v.id}`}
                label={`${v.id}.tsx`}
                code
                active={activeId === `s-vibe-${v.id}`}
              />
            ))}
          </TreeFolder>
          <TreeFolder label="knowledge">
            {wikiData.knowledge.map((k) => (
              <TreeFile
                key={k.id}
                href={`#s-kn-${k.id}`}
                label={`${k.id}.md`}
                active={activeId === `s-kn-${k.id}`}
              />
            ))}
          </TreeFolder>
          <TreeFile href="#s-gears" label="Gears.md" active={activeId === "s-gears"} />
          <TreeFile href="#s-cert" label="Certifications.md" active={activeId === "s-cert"} />
          <TreeFile href="#s-lang" label="Languages.md" active={activeId === "s-lang"} />
          <TreeFile href="#s-nick" label="Aliases.md" active={activeId === "s-nick"} />
          <TreeFile href="#s-quote" label="Quotes.md" active={activeId === "s-quote"} />
          <TreeFile href="#s-trivia" label="Trivia.md" active={activeId === "s-trivia"} />
          <TreeFile href="#s-contact" label="Contact.md" active={activeId === "s-contact"} />
          <TreeFile href="#s-references" label="References.md" active={activeId === "s-references"} />
        </TreeFolder>
      </div>
    </nav>
  );

  const mainContent = (
    <React.Fragment>
      <main className="namu-main">
        <div className="doc-container">
        {/* 제목 */}
        <h1 className="namu-title">
          {wikiData.title}
          <span className="namu-disambig">({wikiData.disambiguation})</span>
        </h1>
        <div className="namu-titlemeta">
          <span>최근 수정 시각: {wikiData.lastEdited}</span>
          <span className="namu-editbadge">{wikiData.editCount}</span>
          <span className="namu-tabs">
            <button onClick={fireEdit}>★ Star</button>
            <button onClick={fireEdit}>Pull Request</button>
            <button onClick={fireEdit}>Issues</button>
            <button onClick={fireEdit}>History</button>
          </span>
        </div>

        {/* 태그 (전문 키워드 Badge) */}
        <div className="doc-tags">
          {TECH_TAGS.map((t) => (
            <span className="doc-tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        {profileCard}

        <div className="namu-body">

          <details open className="namu-section">
            <summary>
              {/* 1. 개요 */}
          <h2
            id="s-overview"
            className="namu-h2"
            style={{ clear: "both", paddingTop: "40px" }}
          >
            <span className="namu-secnum">1.</span>개요
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <p>
            대한민국의 백엔드 개발자(지망). {wikiData.romaja}. 2002년 3월 23일
            서울특별시 관악구에서 태어났다. 현재 한양대학교 소프트웨어융합대학에
            재학 중이며, B2B와 ERP/SAP로 대표되는 엔터프라이즈급 백엔드 시스템
            도메인을 전문 분야로 삼고 있다.
            <FnWithProps n={3} />
          </p>
          <p>
            단순한 '기능 구현'을 넘어 비즈니스 시스템의 안정성과 데이터 정합성을
            확보하는 백엔드 엔지니어링을 지향한다. 부서 간 데이터 흐름과
            비즈니스 규칙을 분석하고 설계하는 데 강점이 있으며, 이를 위해{" "}
            <Ext href="https://obsidian.md" blue>
              Obsidian
            </Ext>{" "}
            기반의 <b>Park Brain</b>이라는 지식 저장소를 직접 구축하여 운영
            중이다.
            <FnWithProps n={4} />
          </p>
          <p>
            주력 기술 스택은 Java와 Spring Boot이며, 관계형 데이터베이스(MySQL)
            모델링에 깊은 조예가 있다. RAG 파이프라인 구축이나{" "}
            <Ext href="https://namu.wiki/w/인공지능" blue>
              AI 에이전트
            </Ext>
            를 통한 업무 자동화(AX) 등은 백엔드 개발자로서의 생산성을 높이고
            서비스의 가치를 더하기 위한 보조 기술로 탐구하고 있다.
          </p>
          <p>
            스스로를 "전체 데이터 흐름을 설계하고 운영해 본, 끝까지 책임지는
            백엔드 개발자"로 정의한다. 단순 CRUD가 아니라 외부 연동·트랜잭션
            경계·배포 운영까지 직접 다루는 것에 보람을 느끼며, 협업에서는 구두
            합의의 모호함을 극도로 경계하고 <b>정의서</b>(센서 이벤트 정의서·스키마
            정의서·API 명세)로 오해의 여지 없는 기준을 먼저 합의한 뒤 개발을
            시작한다.
            <Fn n={7} />
          </p>
          <p>
            기술을 "도구 세트"로 보고 <b>"무엇을 쓸지보다 무엇을 믿고 무엇을 버릴지"</b>를
            판단하는 능력을 중시한다. 요약·숏폼 문화가 읽고 이해하는 힘을
            퇴화시킨다고 보아, 긴 글을 끝까지 읽고 자기 언어로 바꾸는
            능력(Reading Capacity)
            <Fn n={9} />을 진짜 실력으로 여기며 회고와 글쓰기로 사고를 정리하는
            습관을 갖고 있다. 같은 맥락에서 기술을 단순히 시간을 아껴주는 도구가
            아니라 "사람이 정보를 받아들이고 판단하는 방식 자체를 바꾸는 것"으로
            바라보며, 그래서 무엇을 자동화하고 무엇을 직접 사고할지를 의식적으로
            구분한다.
          </p>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 2. 생애 */}
          <h2 id="s-life" className="namu-h2">
            <span className="namu-secnum">2.</span>생애
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <p>
            서울특별시에서 태어나 당곡초등학교, 성보중학교, 세화고등학교를 졸업하고 2021년 한양대학교 소프트웨어융합대학에 입학했다.
          </p>
          <p>
            2022년 8월 9일부터 2024년 2월 8일까지{" "}
            <Ext href="https://namu.wiki/w/제31보병사단" blue>
              제31보병사단 95여단
            </Ext>
            에서 복무하며 병장으로 만기 전역했다. 복학 이후에는 실무형
            프로젝트인 'U-sto'와 'Kids-Friends'를 통해 엔지니어링 역량을
            비약적으로 성장시켰다. 특히 ITCEN Global과의 산학협력
            <FnWithProps n={1} /> 과정에서 공공데이터 아키텍처 설계의 복잡성을 직접
            경험하며 전문가로서의 눈높이를 갖추게 되었다.
          </p>
          <p>
            이러한 실무 경험을 바탕으로 2026년 6월부터 <b>Quantum Edu Solution</b>의 <b>Solution Development Team</b>에서 인턴으로 합류하여, 백엔드 시스템에 대한 전문성을 더욱 고도화하고 있다.
          </p>
          <table className="namu-table">
            <tbody>
              {wikiData.timeline.map((t) => (
                <tr key={t.year + t.event}>
                  <th>{t.year}</th>
                  <td>{t.event}</td>
                </tr>
              ))}
            </tbody>
          </table>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 3. 개발 스타일 */}
          <h2 id="s-style" className="namu-h2">
            <span className="namu-secnum">3.</span>개발 스타일
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <div className="namu-quote">
            <span className="namu-quote-text">
              결국 좋은 해결책은 멋있는 기능보다 문제정의에서 시작된다는 점을 더
              분명하게 보게 됐다.
            </span>
            <span className="namu-quote-src">
              <Ext href="https://parkdohyun.tistory.com/35">
                블로그 「리빙랩 수업을 공부하며 정리한 생각」
              </Ext>
            </span>
          </div>
          <p>
            <b>"정의서로 소통하고 코드로 증명한다."</b>
            <br />
            협업 시 구두 합의의 모호함을 극도로 경계한다. '센서 이벤트 정의서'나
            '스키마 정의서'를 가장 먼저 확정하여 팀 간의 인터페이스를 명확히
            함으로써 커뮤니케이션 비용을 절감한다. 이는 "멋있는 기능보다
            문제정의에서 시작한다"는 본인의 일관된 관점과 맞닿아 있다 — 무엇을
            만들지보다 <b>무엇이 진짜 문제인지</b>를 먼저 정의하는 것이 설계의
            출발점이다.
          </p>
          <p>
            백엔드 설계 시에는 <b>데이터의 정합성과 안정성</b>을 최우선으로
            한다. 외부 API 연동 시 발생할 수 있는 네트워크 불안정성과 스키마
            변화에 대응하기 위해 <b>Sync History 패턴</b>
            <FnWithProps n={5} />을 적극 도입하며, 트랜잭션 물리적 분리(
            <code>REQUIRES_NEW</code>)<FnWithProps n={6} />를 통해 로그 기록과 비즈니스
            로직의 독립성을 확보한다.
          </p>
          <p>
            디버깅은 추측으로 코드를 고치는 대신 <b>문제 재진술 → 가능 원인
            2~3개 → 검증 명령 → 최소 수정</b>의 순서로 좁힌다. 예컨대 세션 인증이
            간헐적으로 풀리는 문제는 쿠키·세션·인증 3단 로그
            <Fn n={8} />로 원인을 격리한다 — 쿠키가 없으면 프론트 전송, 세션이
            없으면 서버 저장/만료, 인증이 없으면 SecurityContext 저장, 인증은
            살아있는데 실패하면 권한이나 DTO 변환 문제다. 외부 시스템의 결과
            코드는 클라이언트에 그대로 노출하지 않고 내부 코드로 매핑하며,
            새 기능은 항상 DB 스키마(ERD)부터 잡은 뒤 Flyway로 형상관리한다.
          </p>
          <p>
            AI를 다룰 때도 같은 원칙이 적용된다. AI는 정답 생성기가 아니라
            <b> 작업 분배 도구</b>이므로 결과를 그대로 믿지 않고 검증하며, 여러
            모델을 역할별로 나눠 쓰고 맥락을 분리한다. 모르는 사실은 추측하지
            않고 '확실하지 않음'으로 명시하는 것을 협업의 기본 태도로 삼는다.
          </p>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 4. 주력 기술 스택 */}
          <h2 id="s-stack" className="namu-h2">
            <span className="namu-secnum">4.</span>주력 기술 스택
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          {wikiData.signatureStack.map((s, i) => (
            <details open key={s.id} className="namu-section">
              <summary>
                <h3 id={`s-stack-${s.id}`} className="namu-h3">
                  <span className="namu-secnum">4.{i + 1}.</span>
                  {s.name}
                
                  <Edit />
                </h3>
              </summary>
              <div className="namu-section-body">
                <p>{s.desc}</p>
              </div>
            </details>
          ))}

            </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 5. 메인 프로젝트 */}
          <h2 id="s-projects" className="namu-h2">
            <span className="namu-secnum">5.</span>메인 프로젝트
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          {wikiData.projects.map((p, i) => (
            <div key={p.id}>
              <h3 id={`s-proj-${p.id}`} className="namu-h3">
                <span className="namu-secnum">5.{i + 1}.</span>
                {p.name}
                {p.id === "usto" ? <FnWithProps n={1} /> : null}
                <Edit />
              </h3>
              <table className="namu-table">
                <tbody>
                  <tr>
                    <th>분야</th>
                    <td>{p.domain}</td>
                  </tr>
                  <tr>
                    <th>담당</th>
                    <td>{p.role}</td>
                  </tr>
                  <tr>
                    <th>상태</th>
                    <td>
                      <span
                        className={`namu-status ${p.status.startsWith("완료") ? "done" : "wip"}`}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>링크</th>
                    <td>
                      {p.links.length > 0
                        ? p.links.map((l, li) => (
                            <span key={l.label}>
                              <Ext href={l.href}>{l.label}</Ext>
                              {li < p.links.length - 1 ? " · " : ""}
                            </span>
                          ))
                        : "기록 없음"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>{p.desc}</p>
            </div>
          ))}

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 6. Vibe Coding Labs */}
          <h2 id="s-vibe-labs" className="namu-h2">
            <span className="namu-secnum">6.</span>Vibe Coding Labs (Hobby)
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <p>
            프론트엔드 구현 한계를 확인하고 빠르게 완성도를 높이는{" "}
            <b>'바이브 코딩'</b> 스타일을 테스트한 실험적 작업들이다.
            <FnWithProps n={2} />
          </p>
          <div className="namu-vibe-grid">
            {wikiData.vibeLabs.map((v, i) => (
              <div
                key={v.id}
                id={`s-vibe-${v.id}`}
                style={{
                  border: "1px solid var(--namu-border)",
                  padding: "12px",
                  borderRadius: "4px",
                  background: "var(--namu-box-bg)",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "1em",
                    marginBottom: "6px",
                  }}
                >
                  <span className="namu-secnum">6.{i + 1}.</span> {v.name}
                </div>
                <p style={{ fontSize: "0.88em", margin: "5px 0" }}>{v.desc}</p>
                <div style={{ marginTop: "8px" }}>
                  {v.links.map((l) => (
                    <Ext key={l.label} href={l.href}>
                      <span style={{ fontSize: "0.82em" }}>[{l.label}]</span>
                    </Ext>
                  ))}
                </div>
              </div>
            ))}
          </div>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 7. 지식 창고 */}
          <h2 id="s-knowledge" className="namu-h2">
            <span className="namu-secnum">7.</span>지식 창고
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          {wikiData.knowledge.map((k, i) => (
            <details open key={k.id} className="namu-section">
              <summary>
                <h3 id={`s-kn-${k.id}`} className="namu-h3">
                  <span className="namu-secnum">7.{i + 1}.</span>
                  {k.name}
                
                  <Edit />
                </h3>
              </summary>
              <div className="namu-section-body">
                <p>{k.desc}</p>
              </div>
            </details>
          ))}

            </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 9. 장비(Gears) */}
          <h2 id="s-gears" className="namu-h2">
            <span className="namu-secnum">8.</span>장비(Gears)
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <ul>
            {wikiData.gears.map((g) => (
              <li key={g.name}>
                <b>{g.name}</b>: {g.desc}
              </li>
            ))}
          </ul>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 10. 자격증 */}
          <h2 id="s-cert" className="namu-h2">
            <span className="namu-secnum">9.</span>자격증
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <table className="namu-table">
            <thead>
              <tr>
                <th>자격</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {wikiData.certifications.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td>
                    <span
                      className={`namu-status ${c.status.includes("취득") ? "done" : "wip"}`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 11. 어학 */}
          <h2 id="s-lang" className="namu-h2">
            <span className="namu-secnum">10.</span>어학
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <table className="namu-table">
            <thead>
              <tr>
                <th>언어</th>
                <th>수준</th>
              </tr>
            </thead>
            <tbody>
              {wikiData.languages.map((l) => (
                <tr key={l.name}>
                  <td>{l.name}</td>
                  <td>{l.level}</td>
                </tr>
              ))}
            </tbody>
          </table>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 12. 별명 */}
          <h2 id="s-nick" className="namu-h2">
            <span className="namu-secnum">11.</span>별명
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <ul>
            {wikiData.nicknames.map((n) => (
              <li key={n.term}>
                <b>{n.term}</b>: {n.desc}
              </li>
            ))}
          </ul>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 13. 어록 */}
          <h2 id="s-quote" className="namu-h2">
            <span className="namu-secnum">12.</span>어록
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          {wikiData.quotes.map((q, i) => (
            <div className="namu-quote" key={i}>
              <span className="namu-quote-text">{q.text}</span>
              <span className="namu-quote-src">{q.source}</span>
            </div>
          ))}

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 14. 여담 */}
          <h2 id="s-trivia" className="namu-h2">
            <span className="namu-secnum">13.</span>여담
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <ul>
            {wikiData.trivia.map((t, i) => (
              <li key={i}>
                {t.includes("Tistory") ? (
                  <>
                    {t.split("Tistory")[0]}
                    <Ext href="https://parkdohyun.tistory.com/">Tistory</Ext>
                    {t.split("Tistory")[1]}
                  </>
                ) : t.includes("Park Brain") ? (
                  <>
                    {t.split("Park Brain")[0]}
                    <Ext href="https://github.com/DoHyunBak">
                      Park Brain
                    </Ext>
                    {t.split("Park Brain")[1]}
                  </>
                ) : t.includes("똑똑한 형님들") ? (
                  <>{t}</>
                ) : (
                  t
                )}
              </li>
            ))}
          </ul>

                      </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 15. 둘러보기 */}
          <h2 id="s-links" className="namu-h2">
            <span className="namu-secnum">14.</span>Dependencies & Links
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <ul>
            {wikiData.infobox
              .find((i) => i.type === "links")
              ?.value.map((l) => (
                <li key={l.label}>
                  <Ext href={l.href} blue icon={l.icon}>
                    {l.label}
                  </Ext>
                </li>
              ))}
          </ul>
        </div>
      </details>

          <details open className="namu-section">
            <summary>
              {/* 16. 연락 및 협업 */}
          <h2 id="s-contact" className="namu-h2">
            <span className="namu-secnum">15.</span>연락 및 협업
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          <p>
            새로운 백엔드·ERP/SAP 도메인 기회와 협업 제안을 환영한다. 아래 채널로
            연락하면 빠르게 회신한다.
          </p>
          <table className="namu-table">
            <tbody>
              <tr>
                <th>이메일</th>
                <td>
                  <Ext href="mailto:badberg2002@gmail.com">badberg2002@gmail.com</Ext>
                </td>
              </tr>
              <tr>
                <th>GitHub</th>
                <td>
                  <Ext href="https://github.com/DoHyunBak">github.com/DoHyunBak</Ext>
                </td>
              </tr>
              <tr>
                <th>블로그</th>
                <td>
                  <Ext href="https://parkdohyun.tistory.com/">두리안 스무디의 블로그 (Tistory)</Ext>
                </td>
              </tr>
              <tr>
                <th>LinkedIn</th>
                <td>
                  <Ext href="https://linkedin.com/in/dohyunbak">linkedin.com/in/dohyunbak</Ext>
                </td>
              </tr>
              <tr>
                <th>YouTube</th>
                <td>
                  <Ext href="https://www.youtube.com/@Mr.Share_Man">Mr. Share_Man</Ext>
                </td>
              </tr>
            </tbody>
          </table>

                      </div>
          </details>
    </div>

          {/* References (API 문서 Reference 섹션 스타일) */}
        <div className="namu-footnotes" id="s-references">
          <div className="namu-ref-head"># References</div>
          <dl className="namu-reflist">
            {wikiData.footnotes.map((f, i) => (
              <div className="namu-ref-item" key={i} id={`fn-${i + 1}`}>
                <dt>
                  <a href={`#fnref-${i + 1}`} className="namu-ref-anchor">
                    [{i + 1}]
                  </a>
                </dt>
                <dd>{f}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 푸터 */}
        <footer className="doc-footer">
          <p>Designed &amp; Built by Park Do-hyun.</p>
          <p>UI/UX inspired by Namuwiki. © 2026. All rights reserved.</p>
        </footer>
        </div>
      </main>
    </React.Fragment>
  );

  const commitBox = (
    <div className="commitlog">
      <div className="commitlog-head">
        <GitCommit size={15} strokeWidth={1.8} />
        <span>Recent Commits</span>
      </div>
      <ul className="commitlog-list">
        {COMMITS.map((c) => (
          <li className="commit-item" key={c.hash}>
            <span className="commit-dot" />
            <div className="commit-body">
              <code className="commit-hash">{c.hash}</code>
              <div className="commit-msg">
                <span className={`commit-type type-${c.type}`}>{c.type}</span>
                <span className="commit-scope">({c.scope})</span>
                <span className="commit-colon">: </span>
                {c.msg}
              </div>
              <span className="commit-ago">{c.ago}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const leftSidebar = (
    <div className="docs-left-inner">{fileTree}</div>
  );

  const rightSidebar = <div className="docs-right-inner">{commitBox}</div>;

  const LogoChar = ({ char, hasCircle }) => (
    <span style={{ position: "relative", display: "inline-block", lineHeight: 1 }}>
      {char}
      {hasCircle && (
        <span
          style={{
            position: "absolute",
            top: "16%",
            right: "13%",
            width: "6px",
            height: "6px",
            backgroundColor: "currentColor",
            borderRadius: "50%",
            transform: "translate(50%, -50%)",
            pointerEvents: "none",
          }}
        />
      )}
    </span>
  );

  const logoContent = (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <circle cx="24" cy="16" r="3" />
        <circle cx="14" cy="16" r="3" />
        <circle cx="6" cy="8" r="2.5" />
        <circle cx="6" cy="24" r="2.5" />
        <path d="M 21 16 L 17 16" />
        <path d="M 12 14 L 8 9.5" />
        <path d="M 12 18 L 8 22.5" />
      </svg>
      <span
        style={{
          fontWeight: "900",
          fontSize: "22px",
          letterSpacing: "-1px",
          fontFamily: "'NanumSquare', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
          paddingTop: "2px",
          marginLeft: "2px",
        }}
      >
        <LogoChar char="도" />
        <LogoChar char="현" hasCircle />
        <LogoChar char="위" hasCircle />
        <LogoChar char="키" hasCircle />
      </span>
    </div>
  );

  return (
    <>
      {!entered && (
        <div
          className={`splash${leaving ? " leaving" : ""}`}
          onClick={enterSite}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") enterSite();
          }}
        >
          <PixelCard ref={pixelRef} variant="matrix" className="splash-card">
            <div className="splash-inner mono">
              <div className="splash-prompt">root@park-brain:~#</div>
              <div className="splash-name">박도현 / Backend Developer</div>
              <div className="splash-cta">
                [ CLICK TO ENTER ]<span className="splash-cursor">█</span>
              </div>
            </div>
          </PixelCard>
        </div>
      )}
      <div className="glitch-bg" aria-hidden="true">
        <LetterGlitch
          glitchSpeed={50}
          smooth
          outerVignette
          centerVignette={false}
        />
        <div className="glitch-overlay" />
      </div>
      <NamuwikiShell
        leftSidebar={leftSidebar}
        mainContent={mainContent}
        rightSidebar={rightSidebar}
      />
      {toast && (
        <div
          onClick={() => setToast(null)}
          style={{
            position: "fixed",
            left: "50%",
            bottom: "28px",
            transform: "translateX(-50%)",
            background: "rgba(33,37,41,0.95)",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "6px",
            fontSize: "13.5px",
            maxWidth: "90vw",
            boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          {toast}
        </div>
      )}
      {tooltip.show && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
            background: "var(--namu-bg)",
            color: "var(--namu-text)",
            border: "1px solid var(--namu-border)",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "13px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            zIndex: 1100,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            marginTop: "-8px",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
}
