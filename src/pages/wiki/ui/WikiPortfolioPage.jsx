import React, { useState, useEffect } from "react";
import "@/app/styles/namuwiki-original.css";
import NamuwikiShell from "./NamuwikiShell.jsx";
import "@/app/styles/wiki.css";
import { wikiData } from "@/entities/wiki/model/wikiData.jsx";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TistoryIcon } from "@/shared/ui/TistoryIcon";

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

/* 외부 링크 */
function Ext({ href, children, blue = true, icon }) {
  const IconComp = icon ? LINK_ICONS[icon] : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={blue ? { color: "var(--namu-link)", textDecoration: "none", display: 'inline-flex', alignItems: 'center' } : { display: 'inline-flex', alignItems: 'center' }}
    >
      {IconComp}
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

export default function WikiPortfolioPage() {
  const [toast, setToast] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("theseed-dark-mode");
      document.body.classList.remove("theseed-light-mode");
    } else {
      document.body.classList.add("theseed-light-mode");
      document.body.classList.remove("theseed-dark-mode");
    }
  }, [isDark]);

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

  const mainContent = (
    <React.Fragment>
      <main className="namu-main">
        {/* 제목 */}
        <h1 className="namu-title">
          {wikiData.title}
          <span className="namu-disambig">({wikiData.disambiguation})</span>
        </h1>
        <div className="namu-titlemeta">
          <span>최근 수정 시각: {wikiData.lastEdited}</span>
          <span className="namu-editbadge">{wikiData.editCount}</span>
          <span className="namu-tabs">
            <button onClick={fireEdit}>☆</button>
            <button onClick={fireEdit}>편집 요청</button>
            <button onClick={fireEdit}>토론</button>
            <button onClick={fireEdit}>역사</button>
          </span>
        </div>

        {/* 광고 배너 (패러디) - top_ad 공백 제거 버전 */}
        <div
          className="namu-adbanner"
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            overflow: "hidden",
          }}
        >
          <span className="namu-ad-label">광고</span>
          <a
            href={wikiData.ads[0].href}
            target="_blank"
            rel="noreferrer"
            style={{ display: "block", width: "100%" }}
          >
            <img
              src={wikiData.ads[0].img}
              alt="top ad"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </a>
        </div>

        {/* 분류 */}
        <div className="namu-category">
          <b>분류</b>
          {wikiData.categories.map((c, i) => (
            <span key={c}>
              <a
                href="#none"
                onClick={(e) => e.preventDefault()}
                style={{ color: "var(--namu-link)" }}
              >
                {c}
              </a>
              {i < wikiData.categories.length - 1 ? " · " : ""}
            </span>
          ))}{" "}
          <a
            href="#none"
            onClick={(e) => e.preventDefault()}
            style={{
              float: "right",
              border: "1px solid var(--namu-border)",
              padding: "1px 6px",
              fontSize: "11px",
              color: "var(--namu-text)",
              textDecoration: "none",
              background: "var(--namu-bg)"
            }}
          >
            [더 보기]
          </a>
        </div>

        {/* 관련 문서 틀 (중앙 배치) */}
        <details open
          className="namu-navbox"
          style={{ maxWidth: "700px", margin: "20px auto" }}
        >
          <summary
            className="namu-navbox-head"
            style={{ justifyContent: "center", gap: "15px" }}
          >
            <img className="namu-navbox-logo" src="/logo.png" alt="" />
            <div style={{ textAlign: "center" }}>
              <b>{titleFull}</b>
              <div className="namu-navbox-sub">관련 문서 및 링크</div>
            </div>
          </summary>
          <div className="namu-navbox-body">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "15px 30px",
              }}
            >
              <a href="#s-projects" style={{ color: "var(--namu-link)" }}>
                메인 프로젝트
              </a>
              <a href="#s-vibe-labs" style={{ color: "var(--namu-link)" }}>
                Vibe Coding Labs
              </a>
              <a href="#s-stack" style={{ color: "var(--namu-link)" }}>
                주력 기술 스택
              </a>
              <a href="#s-academic" style={{ color: "var(--namu-link)" }}>
                학술 활동
              </a>
              <a href="#s-knowledge" style={{ color: "var(--namu-link)" }}>
                지식 창고
              </a>
            </div>
            <div
              style={{
                borderTop: "1px solid #ebebeb",
                margin: "10px 0",
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "15px 30px",
              }}
            >
              {wikiData.infobox
                .find((i) => i.type === "links")
                ?.value.map((l) => (
                  <Ext key={l.label} href={l.href} icon={l.icon}>
                    {l.label}
                  </Ext>
                ))}
            </div>
          </div>
        </details>

        {/* 인포박스 (float right) */}
        <aside className="namu-infobox">
          <div className="namu-infobox-head">
            {titleFull}
            <span className="namu-romaja">{wikiData.romaja}</span>
          </div>
          <img
            className="namu-infobox-img"
            src={wikiData.image}
            alt={wikiData.title}
          />
          <table>
            <tbody>
              {wikiData.infobox.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  <td>
                    {row.type === "links" ? (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "6px 12px",
                        }}
                      >
                        {row.value.map((l) => (
                          <Ext key={l.label} href={l.href} icon={l.icon}>
                            {l.label}
                          </Ext>
                        ))}
                      </div>
                    ) : row.type === "debut" ? (
                      <div>
                        <div style={{ color: "var(--namu-link)" }}>
                          {row.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.85em",
                            color: "var(--namu-muted)",
                            marginTop: "3px",
                          }}
                        >
                          {row.sub}
                        </div>
                      </div>
                    ) : row.value === "TODO" ? (
                      <span className="namu-todo">미정 (TODO)</span>
                    ) : Array.isArray(row.value) ? (
                      row.value.map((v, i) => <div key={i}>{v}</div>)
                    ) : (
                      <div className="namu-infobox-cell">{row.value}</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>

        <div className="namu-body">
          {/* 목차 */}
          <nav className="namu-toc" id="namu-toc">
            <div className="namu-toc-title">목차</div>
            <ol>
              <li>
                <span className="namu-toc-num">1.</span>
                <a href="#s-overview">개요</a>
              </li>
              <li>
                <span className="namu-toc-num">2.</span>
                <a href="#s-life">생애</a>
              </li>
              <li>
                <span className="namu-toc-num">3.</span>
                <a href="#s-style">개발 스타일</a>
              </li>
              <li>
                <span className="namu-toc-num">4.</span>
                <a href="#s-stack">주력 기술 스택</a>
                <ol>
                  {wikiData.signatureStack.map((s, i) => (
                    <li key={s.id}>
                      <span className="namu-toc-num">4.{i + 1}.</span>
                      <a href={`#s-stack-${s.id}`}>{s.name}</a>
                    </li>
                  ))}
                </ol>
              </li>
              <li>
                <span className="namu-toc-num">5.</span>
                <a href="#s-projects">메인 프로젝트</a>
                <ol>
                  {wikiData.projects.map((p, i) => (
                    <li key={p.id}>
                      <span className="namu-toc-num">5.{i + 1}.</span>
                      <a href={`#s-proj-${p.id}`}>{p.name}</a>
                    </li>
                  ))}
                </ol>
              </li>
              <li>
                <span className="namu-toc-num">6.</span>
                <a href="#s-vibe-labs">Vibe Coding Labs (Hobby)</a>
                <ol>
                  {wikiData.vibeLabs.map((v, i) => (
                    <li key={v.id}>
                      <span className="namu-toc-num">6.{i + 1}.</span>
                      <a href={`#s-vibe-${v.id}`}>{v.name}</a>
                    </li>
                  ))}
                </ol>
              </li>
              <li>
                <span className="namu-toc-num">7.</span>
                <a href="#s-academic">학술 활동</a>
                <ol>
                  {wikiData.academic.map((a, i) => (
                    <li key={a.id}>
                      <span className="namu-toc-num">7.{i + 1}.</span>
                      <a href={`#s-acad-${a.id}`}>{a.name}</a>
                    </li>
                  ))}
                </ol>
              </li>
              <li>
                <span className="namu-toc-num">8.</span>
                <a href="#s-knowledge">지식 창고</a>
                <ol>
                  {wikiData.knowledge.map((k, i) => (
                    <li key={k.id}>
                      <span className="namu-toc-num">8.{i + 1}.</span>
                      <a href={`#s-kn-${k.id}`}>{k.name}</a>
                    </li>
                  ))}
                </ol>
              </li>
              <li>
                <span className="namu-toc-num">9.</span>
                <a href="#s-gears">장비(Gears)</a>
              </li>
              <li>
                <span className="namu-toc-num">10.</span>
                <a href="#s-cert">자격증</a>
              </li>
              <li>
                <span className="namu-toc-num">11.</span>
                <a href="#s-lang">어학</a>
              </li>
              <li>
                <span className="namu-toc-num">12.</span>
                <a href="#s-nick">별명</a>
              </li>
              <li>
                <span className="namu-toc-num">13.</span>
                <a href="#s-quote">어록</a>
              </li>
              <li>
                <span className="namu-toc-num">14.</span>
                <a href="#s-trivia">여담</a>
              </li>
            </ol>
          </nav>

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
            <FnWithProps n={5} />
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
            <Fn n={30} />
          </p>
          <p>
            기술을 "도구 세트"로 보고 <b>"무엇을 쓸지보다 무엇을 믿고 무엇을 버릴지"</b>를
            판단하는 능력을 중시한다. 요약·숏폼 문화가 읽고 이해하는 힘을
            퇴화시킨다고 보아, 긴 글을 끝까지 읽고 자기 언어로 바꾸는
            능력(Reading Capacity)
            <Fn n={33} />을 진짜 실력으로 여기며 회고와 글쓰기로 사고를 정리하는
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
            <FnWithProps n={7} />을 적극 도입하며, 트랜잭션 물리적 분리(
            <code>REQUIRES_NEW</code>)<FnWithProps n={8} />를 통해 로그 기록과 비즈니스
            로직의 독립성을 확보한다.
          </p>
          <p>
            디버깅은 추측으로 코드를 고치는 대신 <b>문제 재진술 → 가능 원인
            2~3개 → 검증 명령 → 최소 수정</b>의 순서로 좁힌다. 예컨대 세션 인증이
            간헐적으로 풀리는 문제는 쿠키·세션·인증 3단 로그
            <Fn n={32} />로 원인을 격리한다 — 쿠키가 없으면 프론트 전송, 세션이
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
              {/* 7. 학술 활동 */}
          <h2 id="s-academic" className="namu-h2">
            <span className="namu-secnum">7.</span>학술 활동
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          {wikiData.academic.map((a, i) => (
            <details open key={a.id} className="namu-section">
              <summary>
                <h3 id={`s-acad-${a.id}`} className="namu-h3">
                  <span className="namu-secnum">7.{i + 1}.</span>
                  {a.name}
                
                  <Edit />
                </h3>
              </summary>
              <div className="namu-section-body">
                <p>
                  <b>핵심 주제: {a.topic}</b>
                </p>
                <p>{a.desc}</p>
              </div>
            </details>
          ))}

            </div>
          </details>

          <details open className="namu-section">
            <summary>
              {/* 8. 지식 창고 */}
          <h2 id="s-knowledge" className="namu-h2">
            <span className="namu-secnum">8.</span>지식 창고
            <Edit />
          </h2>
            </summary>
            <div className="namu-section-body">

          {wikiData.knowledge.map((k, i) => (
            <details open key={k.id} className="namu-section">
              <summary>
                <h3 id={`s-kn-${k.id}`} className="namu-h3">
                  <span className="namu-secnum">8.{i + 1}.</span>
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
            <span className="namu-secnum">9.</span>장비(Gears)
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
            <span className="namu-secnum">10.</span>자격증
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
                  <td>
                    {c.name === "SAP Certified Associate - ABAP Cloud" ? (
                      <>
                        {c.name}
                        <FnWithProps n={4} />
                      </>
                    ) : (
                      c.name
                    )}
                  </td>
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
            <span className="namu-secnum">11.</span>어학
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
            <span className="namu-secnum">12.</span>별명
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
            <span className="namu-secnum">13.</span>어록
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
            <span className="namu-secnum">14.</span>여담
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
                    <Ext href="https://github.com/DoHyunBak/Park_Brain">
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
            <span className="namu-secnum">15.</span>둘러보기
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
    </div>

          {/* 각주 */}
        <div className="namu-footnotes">
          <ol>
            {wikiData.footnotes.map((f, i) => (
              <li key={i} id={`fn-${i + 1}`}>
                <a href={`#fnref-${i + 1}`} style={{ color: "var(--namu-link)", textDecoration: "none" }}>
                  [{i + 1}]
                </a>{" "}
                {f}
              </li>
            ))}
          </ol>
        </div>

        {/* 안내 틀 (최하단) */}
        <div className="namu-notice">
          <span className="namu-notice-icon">ⓘ</span>
          <span>{wikiData.notice}</span>
        </div>

        {/* 라이선스 / 푸터 */}
        <div className="namu-footer">
          <div
            style={{
              borderBottom: "1px solid #ebebeb",
              paddingBottom: "12px",
              marginBottom: "12px",
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              내용의 저작권은 박도현 본인에게 있습니다.
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "#888", lineHeight: "1.6" }}>
            <p>
              이 저작물은 CC BY-NC-SA 2.0 KR에 따라 이용할 수 있습니다. (단,
              라이선스가 명시된 일부 문서 및 삽화 제외)
            </p>
            <p>
              기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는
              기여하신 부분의 저작권을 갖습니다.
            </p>
            <br />
            <p>
              나무위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나,
              잘못된 서술이 있을 수 있습니다.
            </p>
            <p>
              나무위키는 위키위키입니다. 여러분이 직접 문서를 고칠 수 있으며,
              다른 사람의 의견을 원할 경우 직접 토론을 발제할 수 있습니다.
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );

  const sidebarContent = (
    <React.Fragment>
      <aside className="namu-rail">
        <div className="namu-railbox">
          <div className="namu-railbox-head">
            <span className="namu-railbox-title">📈 실시간 검색어</span>
          </div>
          <ol className="namu-rt">
            {wikiData.realtimeSearch.map((kw, i) => (
              <li key={kw}>
                <span className="namu-rt-rank">{i + 1}</span>
                <span className="namu-rt-kw">{kw}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="namu-railbox">
          <div className="namu-railbox-head">
            <span className="namu-railbox-title">🕘 최근 변경</span>
            <a
              className="namu-railbox-more"
              href="#none"
              onClick={(e) => e.preventDefault()}
            >
              ›
            </a>
          </div>
          <ul className="namu-recent">
            {wikiData.recentChanges.map((r) => (
              <li key={r.title}>
                <a
                  className="namu-recent-title"
                  href={`#s-${r.title}`}
                  onClick={(e) => e.preventDefault()}
                >
                  {r.title}
                </a>
                <span className="namu-recent-ago">{r.ago}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="namu-rail-sticky">
          {/* 광고 1 */}
          <a
            className="namu-railad"
            href={wikiData.ads[1].href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              padding: 0,
              border: "none",
              background: "transparent",
            }}
          >
            <span
              className="namu-ad-label"
              style={{ position: "static", marginBottom: "5px" }}
            >
              광고
            </span>
            <img
              src={wikiData.ads[1].img}
              alt="ad"
              style={{
                width: "100%",
                borderRadius: "4px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </a>

          {/* 광고 2 */}
          <a
            className="namu-railad"
            href={wikiData.ads[2].href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              padding: 0,
              border: "none",
              background: "transparent",
              marginTop: "15px",
            }}
          >
            <span
              className="namu-ad-label"
              style={{ position: "static", marginBottom: "5px" }}
            >
              광고
            </span>
            <img
              src={wikiData.ads[2].img}
              alt="ad"
              style={{
                width: "100%",
                borderRadius: "4px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </a>
        </div>
      </aside>
    </React.Fragment>
  );

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
      <NamuwikiShell
        mainContent={mainContent}
        sidebarContent={sidebarContent}
        logoContent={logoContent}
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
