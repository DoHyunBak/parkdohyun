import { useState } from "react";
import "@/app/styles/wiki.css";
import { wikiData } from "@/entities/wiki/model/wikiData";

const EDIT_JOKE =
  "비로그인 사용자는 이 문서를 편집할 수 없습니다. (애초에 진짜 나무위키가 아닙니다)";

/* 각주 위첨자 */
function Fn({ n }) {
  return (
    <sup className="namu-fn" id={`fnref-${n}`}>
      <a href={`#fn-${n}`}>[{n}]</a>
    </sup>
  );
}

/* 외부 링크 */
function Ext({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
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
  document.getElementById("namu-toc")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function WikiPortfolioPage() {
  const [toast, setToast] = useState(null);
  const [navboxOpen, setNavboxOpen] = useState(false);

  const fireEdit = () => {
    setToast(EDIT_JOKE);
    window.clearTimeout(fireEdit._t);
    fireEdit._t = window.setTimeout(() => setToast(null), 2600);
  };

  const Edit = () => (
    <span className="namu-edit" role="button" onClick={fireEdit}>
      [편집]
    </span>
  );

  const titleFull = `${wikiData.title}(${wikiData.disambiguation})`;

  return (
    <div className="namu">
      {/* ===== 상단 검은 네비바 ===== */}
      <nav className="namu-nav">
        <a href="#none" className="namu-logo" onClick={(e) => e.preventDefault()}>
          <span className="mark">🌳</span> parkdohyun
        </a>
        <a href="#none" className="namu-navlink" onClick={(e) => e.preventDefault()}>
          ↻ 최근 변경
        </a>
        <a href="#none" className="namu-navlink" onClick={(e) => e.preventDefault()}>
          💬 최근 토론
        </a>
        <a href="#none" className="namu-navlink" onClick={(e) => e.preventDefault()}>
          ⚙ 특수 기능 ▾
        </a>
        <div className="namu-nav-right">
          <span className="namu-nav-icon" title="무작위 문서" onClick={fireEdit}>⤫</span>
          <span className="namu-nav-search">
            <input type="text" placeholder="여기에서 검색" aria-label="검색" />
          </span>
          <span className="namu-nav-icon" title="이동" onClick={fireEdit}>→</span>
          <span className="namu-nav-icon" title="로그인" onClick={fireEdit}>👤</span>
        </div>
      </nav>

      {/* ===== 본문 + 사이드바 ===== */}
      <div className="namu-shell">
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

          {/* 광고 배너 (패러디) */}
          <div className="namu-adbanner">
            <span className="namu-ad-label">광고</span>
            <div className="namu-ad-text">
              <div className="namu-ad-title">{wikiData.ads[0].title}</div>
              <div className="namu-ad-body">{wikiData.ads[0].body}</div>
            </div>
            <a className="namu-ad-cta" href={wikiData.ads[0].href}>
              {wikiData.ads[0].cta}
            </a>
          </div>

          {/* 분류 */}
          <div className="namu-category">
            <b>분류</b>
            {wikiData.categories.map((c, i) => (
              <span key={c}>
                <a href="#none" onClick={(e) => e.preventDefault()}>{c}</a>
                {i < wikiData.categories.length - 1 ? " · " : ""}
              </span>
            ))}{" "}
            <a href="#none" onClick={(e) => e.preventDefault()}>[더 보기]</a>
          </div>

          {/* 관련 문서 틀 (접이식) */}
          <div className="namu-navbox">
            <div className="namu-navbox-head">
              <img className="namu-navbox-logo" src={wikiData.image} alt="" />
              <div>
                <b>{titleFull}</b>
                <div className="namu-navbox-sub">관련 문서</div>
              </div>
            </div>
            <button className="namu-navbox-toggle" onClick={() => setNavboxOpen((v) => !v)}>
              [ {navboxOpen ? "접기" : "펼치기"} · 접기 ]
            </button>
            {navboxOpen && (
              <div className="namu-navbox-body">
                <a href="#s-projects">프로젝트</a>
                <a href="#s-stack">주력 기술 스택</a>
                <a href="#s-cert">자격증</a>
                {wikiData.links.map((l) => (
                  <Ext key={l.label} href={l.href}>{l.label}</Ext>
                ))}
              </div>
            )}
          </div>

          {/* 인포박스 (float right) */}
          <aside className="namu-infobox">
            <div className="namu-infobox-head">
              {titleFull}
              <span className="namu-romaja">{wikiData.romaja}</span>
            </div>
            <img className="namu-infobox-img" src={wikiData.image} alt={wikiData.title} />
            <table>
              <tbody>
                {wikiData.infobox.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td>
                      {row.value === "TODO" ? (
                        <span className="namu-todo">미정 (TODO)</span>
                      ) : Array.isArray(row.value) ? (
                        row.value.map((v, i) => <div key={i}>{v}</div>)
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="namu-links">
              {wikiData.links.map((l) => (
                <Ext key={l.label} href={l.href}>{l.label}</Ext>
              ))}
            </div>
          </aside>

          {/* 목차 */}
          <nav className="namu-toc" id="namu-toc">
            <div className="namu-toc-title">목차</div>
            <ol>
              <li><span className="namu-toc-num">1.</span><a href="#s-overview">개요</a></li>
              <li><span className="namu-toc-num">2.</span><a href="#s-life">생애</a></li>
              <li><span className="namu-toc-num">3.</span><a href="#s-style">개발 스타일</a></li>
              <li>
                <span className="namu-toc-num">4.</span><a href="#s-stack">주력 기술 스택</a>
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
                <span className="namu-toc-num">5.</span><a href="#s-projects">프로젝트</a>
                <ol>
                  {wikiData.projects.map((p, i) => (
                    <li key={p.id}>
                      <span className="namu-toc-num">5.{i + 1}.</span>
                      <a href={`#s-proj-${p.id}`}>{p.name}</a>
                    </li>
                  ))}
                </ol>
              </li>
              <li><span className="namu-toc-num">6.</span><a href="#s-cert">자격증</a></li>
              <li><span className="namu-toc-num">7.</span><a href="#s-lang">어학</a></li>
              <li><span className="namu-toc-num">8.</span><a href="#s-nick">별명</a></li>
              <li><span className="namu-toc-num">9.</span><a href="#s-quote">어록</a></li>
              <li><span className="namu-toc-num">10.</span><a href="#s-trivia">여담</a></li>
              <li><span className="namu-toc-num">11.</span><a href="#s-links">둘러보기</a></li>
            </ol>
          </nav>

          <div className="namu-body">
            {/* 1. 개요 */}
            <h2 id="s-overview" className="namu-h2">
              <span className="namu-secnum">1.</span>개요<Edit />
            </h2>
            <p>
              대한민국의 백엔드 개발자(지망). {wikiData.romaja}. 2002년 3월 23일 서울에서 태어났으며,
              현재 한양대학교 ICT융합학부에 재학 중이다. B2B·ERP/SAP로 대표되는 기업용 백엔드 시스템<Fn n={3} />{" "}
              도메인을 목표로 한다.
            </p>
            <p>
              화면을 화려하게 만드는 것보다, 회사가 실제로 어떻게 돌아가는지에 더 관심이 많은 유형의 개발자다.
              부서와 부서 사이를 오가는 데이터, 손이 많이 가는 업무 프로세스가 하나의 시스템으로 정리되는
              과정을 들여다보는 것을 즐긴다. 그래서 단순히 기능을 구현하는 데서 그치지 않고, 그 기능이 어떤
              비즈니스 규칙 위에서 동작하는지를 먼저 이해하려 한다.
            </p>
            <p>
              백엔드(Java · Spring Boot · MySQL)를 주력으로 하며, 데이터 모델링과 인프라(AWS · Docker)까지
              직접 다룬다. 프론트엔드 화면은 본인의 표현을 빌리면 &lsquo;바이브 코딩&rsquo;<Fn n={2} />으로
              빠르게 만들어 백엔드에 집중하는 편이다.
            </p>

            {/* 2. 생애 */}
            <h2 id="s-life" className="namu-h2">
              <span className="namu-secnum">2.</span>생애<Edit />
            </h2>
            <p>
              2002년 3월 23일 서울특별시에서 태어났다. 당곡초등학교, 성보중학교, 세화고등학교를 차례로
              졸업한 뒤, 2021년 한양대학교 ICT융합학부에 입학하며 본격적으로 소프트웨어와 기업 시스템을
              공부하기 시작했다.
            </p>
            <p>
              재학 중 ITCEN Global과의 산학협력 프로젝트<Fn n={1} />에 참여해 대학 자산관리 시스템의 백엔드와
              데이터베이스 설계, AWS 인프라 구축을 맡으며 실제 운영을 염두에 둔 시스템 개발을 경험했다. 이
              과정에서 ERP/SAP로 대표되는 기업용 백엔드 도메인에 관심을 굳혔고, 현재는 SAP ABAP 인증을
              준비하며 졸업(2027년 3월 예정)을 향해 나아가고 있다.
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

            {/* 3. 개발 스타일 */}
            <h2 id="s-style" className="namu-h2">
              <span className="namu-secnum">3.</span>개발 스타일<Edit />
            </h2>
            <div className="namu-quote">
              <span className="namu-quote-text">화면보다 회사가 어떻게 돌아가는지가 더 궁금하다.</span>
              <span className="namu-quote-src">본인 피셜</span>
            </div>
            <p>
              화면이 아니라 비즈니스 규칙을 중심으로 API를 설계한다. 어떤 데이터가 어느 부서의 소유이고,
              어떤 흐름으로 처리되어야 하는지를 먼저 정의한 다음 코드를 짜는 방식이다. 트랜잭션 경계를
              명확히 하고, 데이터의 일관성과 정합성을 우선한다.
            </p>
            <p>
              복잡한 추상화보다 읽기 좋은 서비스 로직을 선호한다. 화려하지만 이해하기 어려운 구조보다,
              다음 사람이 봐도 무슨 일을 하는지 바로 알 수 있는 코드를 더 가치 있게 본다. 또한 데이터베이스
              스키마와 마이그레이션 이력(Flyway)도 제품 코드의 일부로 관리하여, 배포 이후에도 안정적으로
              운영·추적할 수 있는 시스템을 지향한다.
            </p>
            <p>
              백엔드에 집중하기 위해, 필요한 프론트엔드 화면은 직접 한 줄씩 짜기보다 AI 도구를 적극 활용한
              이른바 &lsquo;바이브 코딩&rsquo;<Fn n={2} />으로 빠르게 구현한다. 본인이 가장 잘할 수 있는
              영역에 시간을 쓰기 위한 선택이다.
            </p>

            {/* 4. 주력 기술 스택 */}
            <h2 id="s-stack" className="namu-h2">
              <span className="namu-secnum">4.</span>주력 기술 스택<Edit />
            </h2>
            {wikiData.signatureStack.map((s, i) => (
              <div key={s.id}>
                <h3 id={`s-stack-${s.id}`} className="namu-h3">
                  <span className="namu-secnum">4.{i + 1}.</span>{s.name}<Edit />
                </h3>
                <p>{s.desc}</p>
              </div>
            ))}

            {/* 5. 프로젝트 */}
            <h2 id="s-projects" className="namu-h2">
              <span className="namu-secnum">5.</span>프로젝트<Edit />
            </h2>
            {wikiData.projects.map((p, i) => (
              <div key={p.id}>
                <h3 id={`s-proj-${p.id}`} className="namu-h3">
                  <span className="namu-secnum">5.{i + 1}.</span>{p.name}
                  {p.id === "usto" ? <Fn n={1} /> : null}
                  <Edit />
                </h3>
                <table className="namu-table">
                  <tbody>
                    <tr><th>분야</th><td>{p.domain}</td></tr>
                    <tr><th>담당</th><td>{p.role}</td></tr>
                    <tr>
                      <th>상태</th>
                      <td>
                        <span className={`namu-status ${p.status.startsWith("완료") ? "done" : "wip"}`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>링크</th>
                      <td>
                        {p.links.map((l, li) => (
                          <span key={l.label}>
                            <Ext href={l.href}>{l.label}</Ext>
                            {li < p.links.length - 1 ? " · " : ""}
                          </span>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>{p.desc}</p>
              </div>
            ))}

            {/* 6. 자격증 */}
            <h2 id="s-cert" className="namu-h2">
              <span className="namu-secnum">6.</span>자격증<Edit />
            </h2>
            <table className="namu-table">
              <thead>
                <tr><th>자격</th><th>상태</th></tr>
              </thead>
              <tbody>
                {wikiData.certifications.map((c) => (
                  <tr key={c.name}>
                    <td>{c.name === "SAP Certified Associate - ABAP Cloud" ? <>{c.name}<Fn n={4} /></> : c.name}</td>
                    <td>
                      <span className={`namu-status ${c.status === "취득" ? "done" : "wip"}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 7. 어학 */}
            <h2 id="s-lang" className="namu-h2">
              <span className="namu-secnum">7.</span>어학<Edit />
            </h2>
            <table className="namu-table">
              <thead>
                <tr><th>언어</th><th>수준</th></tr>
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

            {/* 8. 별명 */}
            <h2 id="s-nick" className="namu-h2">
              <span className="namu-secnum">8.</span>별명<Edit />
            </h2>
            <ul>
              {wikiData.nicknames.map((n) => (
                <li key={n.term}><b>{n.term}</b>: {n.desc}</li>
              ))}
            </ul>

            {/* 9. 어록 */}
            <h2 id="s-quote" className="namu-h2">
              <span className="namu-secnum">9.</span>어록<Edit />
            </h2>
            {wikiData.quotes.map((q, i) => (
              <div className="namu-quote" key={i}>
                <span className="namu-quote-text">{q.text}</span>
                <span className="namu-quote-src">{q.source}</span>
              </div>
            ))}

            {/* 10. 여담 */}
            <h2 id="s-trivia" className="namu-h2">
              <span className="namu-secnum">10.</span>여담<Edit />
            </h2>
            <ul>
              {wikiData.trivia.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            {/* 11. 둘러보기 */}
            <h2 id="s-links" className="namu-h2">
              <span className="namu-secnum">11.</span>둘러보기<Edit />
            </h2>
            <ul>
              {wikiData.links.map((l) => (
                <li key={l.label}><Ext href={l.href}>{l.label}</Ext></li>
              ))}
            </ul>
          </div>

          {/* 각주 */}
          <div className="namu-footnotes">
            <ol>
              {wikiData.footnotes.map((f, i) => (
                <li key={i} id={`fn-${i + 1}`}>
                  <a href={`#fnref-${i + 1}`}>↑</a> {f}
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
          <div className="namu-license">
            <p>내용의 저작권은 박도현 본인에게 있습니다.</p>
          </div>
          <div className="namu-footer">
            <div>Operated by 박도현 · Made with ❤️ in 서울특별시 관악구</div>
            <div>당신의 시간대는 Asia/Seoul입니다.</div>
            <div>Powered by <span className="namu-engine">parkdohyun engine</span> (패러디)</div>
          </div>
        </main>

        {/* ===== 우측 사이드바 ===== */}
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
              <a className="namu-railbox-more" href="#none" onClick={(e) => e.preventDefault()}>›</a>
            </div>
            <ul className="namu-recent">
              {wikiData.recentChanges.map((r) => (
                <li key={r.title}>
                  <a className="namu-recent-title" href={`#s-${r.title}`} onClick={(e) => e.preventDefault()}>
                    {r.title}
                  </a>
                  <span className="namu-recent-ago">{r.ago}</span>
                </li>
              ))}
            </ul>
          </div>

          <a className="namu-railad" href={wikiData.ads[1].href} target="_blank" rel="noreferrer">
            <span className="namu-ad-label">광고</span>
            <div className="namu-railad-title">{wikiData.ads[1].title}</div>
            <div className="namu-railad-body">{wikiData.ads[1].body}</div>
            <span className="namu-railad-cta">{wikiData.ads[1].cta}</span>
          </a>
        </aside>
      </div>

      {/* ===== 우하단 플로팅 버튼 ===== */}
      <div className="namu-floating">
        <div className="namu-float-btn" role="button" title="목차" onClick={scrollToToc}>☰</div>
        <div className="namu-float-group">
          <button title="맨 위로" onClick={scrollToTop}>↑</button>
          <button title="맨 아래로" onClick={scrollToBottom}>↓</button>
        </div>
      </div>

      {/* 편집 농담 토스트 */}
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
    </div>
  );
}
