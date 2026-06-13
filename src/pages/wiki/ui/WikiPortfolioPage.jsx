import { useState } from "react";
import "@/app/styles/wiki.css";
import { wikiData } from "@/entities/wiki/model/wikiData.jsx";

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
function Ext({ href, children, blue = true }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      style={blue ? { color: 'var(--namu-link)', textDecoration: 'none' } : {}}
    >
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
  const [navboxOpen, setNavboxOpen] = useState(true);

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
      {/* ===== 상단 네비바 ===== */}
      <nav className="namu-nav">
        <a href="#none" className="namu-logo" onClick={(e) => e.preventDefault()}>
          <img src="/logo.png" alt="logo" /> parkdohyun
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

          {/* 광고 배너 (패러디) - top_ad 공백 제거 버전 */}
          <div className="namu-adbanner" style={{ border: 'none', background: 'transparent', padding: 0, overflow: 'hidden' }}>
            <span className="namu-ad-label">광고</span>
            <a href={wikiData.ads[0].href} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%' }}>
              <img src={wikiData.ads[0].img} alt="top ad" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </a>
          </div>

          {/* 분류 */}
          <div className="namu-category">
            <b>분류</b>
            {wikiData.categories.map((c, i) => (
              <span key={c}>
                <a href="#none" onClick={(e) => e.preventDefault()} style={{ color: 'var(--namu-link)' }}>{c}</a>
                {i < wikiData.categories.length - 1 ? " · " : ""}
              </span>
            ))}{" "}
            <a href="#none" onClick={(e) => e.preventDefault()} style={{ color: 'var(--namu-link)' }}>[더 보기]</a>
          </div>

          {/* 관련 문서 틀 (중앙 배치) */}
          <div className="namu-navbox" style={{ maxWidth: '700px', margin: '20px auto' }}>
            <div className="namu-navbox-head" style={{ justifyContent: 'center', gap: '15px' }}>
              <img className="namu-navbox-logo" src="/logo.png" alt="" />
              <div style={{ textAlign: 'center' }}>
                <b>{titleFull}</b>
                <div className="namu-navbox-sub">관련 문서 및 링크</div>
              </div>
            </div>
            <div className="namu-navbox-body">
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px 30px' }}>
                <a href="#s-projects" style={{ color: 'var(--namu-link)' }}>메인 프로젝트</a>
                <a href="#s-vibe-labs" style={{ color: 'var(--namu-link)' }}>Vibe Coding Labs</a>
                <a href="#s-stack" style={{ color: 'var(--namu-link)' }}>주력 기술 스택</a>
                <a href="#s-academic" style={{ color: 'var(--namu-link)' }}>학술 활동</a>
                <a href="#s-knowledge" style={{ color: 'var(--namu-link)' }}>지식 창고</a>
              </div>
              <div style={{ borderTop: '1px solid #ebebeb', margin: '10px 0', paddingTop: '10px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px 30px' }}>
                {wikiData.infobox.find(i => i.type === "links")?.value.map((l) => (
                  <Ext key={l.label} href={l.href}>{l.label}</Ext>
                ))}
              </div>
            </div>
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
                      {row.type === "links" ? (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px' }}>
                          {row.value.map(l => (
                            <Ext key={l.label} href={l.href}>{l.label}</Ext>
                          ))}
                        </div>
                      ) : row.type === "debut" ? (
                        <div>
                          <div style={{ color: 'var(--namu-link)' }}>{row.value}</div>
                          <div style={{ fontSize: "0.85em", color: "var(--namu-muted)", marginTop: "3px" }}>{row.sub}</div>
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
                  <span className="namu-toc-num">5.</span><a href="#s-projects">메인 프로젝트</a>
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
                  <span className="namu-toc-num">6.</span><a href="#s-vibe-labs">Vibe Coding Labs (Hobby)</a>
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
                  <span className="namu-toc-num">7.</span><a href="#s-academic">학술 활동</a>
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
                  <span className="namu-toc-num">8.</span><a href="#s-knowledge">지식 창고</a>
                  <ol>
                    {wikiData.knowledge.map((k, i) => (
                      <li key={k.id}>
                        <span className="namu-toc-num">8.{i + 1}.</span>
                        <a href={`#s-kn-${k.id}`}>{k.name}</a>
                      </li>
                    ))}
                  </ol>
                </li>
                <li><span className="namu-toc-num">9.</span><a href="#s-gears">장비(Gears)</a></li>
                <li><span className="namu-toc-num">10.</span><a href="#s-cert">자격증</a></li>
                <li><span className="namu-toc-num">11.</span><a href="#s-lang">어학</a></li>
                <li><span className="namu-toc-num">12.</span><a href="#s-nick">별명</a></li>
                <li><span className="namu-toc-num">13.</span><a href="#s-quote">어록</a></li>
                <li><span className="namu-toc-num">14.</span><a href="#s-trivia">여담</a></li>
                <li><span className="namu-toc-num">15.</span><a href="#s-links">둘러보기</a></li>
              </ol>
            </nav>

            {/* 1. 개요 */}
            <h2 id="s-overview" className="namu-h2" style={{ clear: 'both', paddingTop: '40px' }}>
              <span className="namu-secnum">1.</span>개요<Edit />
            </h2>
            <p>
              대한민국의 백엔드 개발자(지망). {wikiData.romaja}. 2002년 3월 23일 서울특별시 관악구에서 태어났다. 
              현재 한양대학교 소프트웨어융합대학에 재학 중이며, B2B와 ERP/SAP로 대표되는 엔터프라이즈급 백엔드 시스템 도메인을 전문 분야로 삼고 있다.<Fn n={3} />
            </p>
            <p>
              단순한 '기능 구현'을 넘어 비즈니스 시스템의 안정성과 데이터 정합성을 확보하는 백엔드 엔지니어링을 지향한다. 
              부서 간 데이터 흐름과 비즈니스 규칙을 분석하고 설계하는 데 강점이 있으며, 이를 위해 <Ext href="https://obsidian.md" blue>Obsidian</Ext> 기반의 <b>Park Brain</b>이라는 지식 저장소를 직접 구축하여 운영 중이다.<Fn n={5} />
            </p>
            <p>
              주력 기술 스택은 Java와 Spring Boot이며, 관계형 데이터베이스(MySQL) 모델링에 깊은 조예가 있다. 
              RAG 파이프라인 구축이나 <Ext href="https://namu.wiki/w/인공지능" blue>AI 에이전트</Ext>를 통한 업무 자동화(AX) 등은 백엔드 개발자로서의 생산성을 높이고 서비스의 가치를 더하기 위한 보조 기술로 탐구하고 있다.
            </p>

            {/* 2. 생애 */}
            <h2 id="s-life" className="namu-h2">
              <span className="namu-secnum">2.</span>생애<Edit />
            </h2>
            <p>
              서울특별시에서 태어나 초·중·고 교육 과정을 마쳤다. 고등학교 시절에는 원래 초등교사를 지망하여 교대 입시를 준비했으나, 
              급격한 <b>저출산 문제</b>로 인한 임용 절벽 현상에 절망하고 진로를 컴퓨터공학으로 선회했다.<Fn n={19} /> 
              2021년 한양대학교 소프트웨어융합대학에 입학하면서도 "컴퓨터 교사가 될 수 있다"는 차선책을 염두에 두었을 만큼 교육 분야에 대한 관심도 높았다.
            </p>
            <p>
              2022년 8월 9일부터 2024년 2월 8일까지 <Ext href="https://namu.wiki/w/제31보병사단" blue>제31보병사단 95여단</Ext>에서 복무하며 병장으로 만기 전역했다. 
              복학 이후에는 실무형 프로젝트인 'U-sto'와 'Kids-Friends'를 통해 엔지니어링 역량을 비약적으로 성장시켰다. 
              특히 ITCEN Global과의 산학협력<Fn n={1} /> 과정에서 공공데이터 아키텍처 설계의 복잡성을 직접 경험하며 전문가로서의 눈높이를 갖추게 되었다.
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
              <b>"정의서로 소통하고 코드로 증명한다."</b><br />
              협업 시 구두 합의의 모호함을 극도로 경계한다. '센서 이벤트 정의서'나 '스키마 정의서'를 가장 먼저 확정하여 팀 간의 인터페이스를 명확히 함으로써 커뮤니케이션 비용을 절감한다.
            </p>
            <p>
              백엔드 설계 시에는 <b>데이터의 정합성과 안정성</b>을 최우선으로 한다. 
              외부 API 연동 시 발생할 수 있는 네트워크 불안정성과 스키마 변화에 대응하기 위해 <b>Sync History 패턴</b><Fn n={7} />을 적극 도입하며, 
              트랜잭션 물리적 분리(<code>REQUIRES_NEW</code>)<Fn n={8} />를 통해 로그 기록과 비즈니스 로직의 독립성을 확보한다.
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

            {/* 5. 메인 프로젝트 */}
            <h2 id="s-projects" className="namu-h2">
              <span className="namu-secnum">5.</span>메인 프로젝트<Edit />
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
                        {p.links.length > 0 ? p.links.map((l, li) => (
                          <span key={l.label}>
                            <Ext href={l.href}>{l.label}</Ext>
                            {li < p.links.length - 1 ? " · " : ""}
                          </span>
                        )) : "기록 없음"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>{p.desc}</p>
              </div>
            ))}

            {/* 6. Vibe Coding Labs */}
            <h2 id="s-vibe-labs" className="namu-h2">
              <span className="namu-secnum">6.</span>Vibe Coding Labs (Hobby)<Edit />
            </h2>
            <p>
              프론트엔드 구현 한계를 확인하고 빠르게 완성도를 높이는 <b>'바이브 코딩'</b> 스타일을 테스트한 실험적 작업들이다.<Fn n={2} />
            </p>
            <div className="namu-vibe-grid">
              {wikiData.vibeLabs.map((v, i) => (
                <div key={v.id} id={`s-vibe-${v.id}`} style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '4px', background: '#fcfcfc' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1em', marginBottom: '6px' }}>
                    <span className="namu-secnum">6.{i + 1}.</span> {v.name}
                  </div>
                  <p style={{ fontSize: '0.88em', margin: '5px 0' }}>{v.desc}</p>
                  <div style={{ marginTop: '8px' }}>
                    {v.links.map(l => <Ext key={l.label} href={l.href}><span style={{ fontSize: '0.82em' }}>[{l.label}]</span></Ext>)}
                  </div>
                </div>
              ))}
            </div>

            {/* 7. 학술 활동 */}
            <h2 id="s-academic" className="namu-h2">
              <span className="namu-secnum">7.</span>학술 활동<Edit />
            </h2>
            {wikiData.academic.map((a, i) => (
              <div key={a.id}>
                <h3 id={`s-acad-${a.id}`} className="namu-h3">
                  <span className="namu-secnum">7.{i + 1}.</span>{a.name}<Edit />
                </h3>
                <p><b>핵심 주제: {a.topic}</b></p>
                <p>{a.desc}</p>
              </div>
            ))}

            {/* 8. 지식 창고 */}
            <h2 id="s-knowledge" className="namu-h2">
              <span className="namu-secnum">8.</span>지식 창고<Edit />
            </h2>
            {wikiData.knowledge.map((k, i) => (
              <div key={k.id}>
                <h3 id={`s-kn-${k.id}`} className="namu-h3">
                  <span className="namu-secnum">8.{i + 1}.</span>{k.name}<Edit />
                </h3>
                <p>{k.desc}</p>
              </div>
            ))}

            {/* 9. 장비(Gears) */}
            <h2 id="s-gears" className="namu-h2">
              <span className="namu-secnum">9.</span>장비(Gears)<Edit />
            </h2>
            <ul>
              {wikiData.gears.map((g) => (
                <li key={g.name}><b>{g.name}</b>: {g.desc}</li>
              ))}
            </ul>

            {/* 10. 자격증 */}
            <h2 id="s-cert" className="namu-h2">
              <span className="namu-secnum">10.</span>자격증<Edit />
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
                      <span className={`namu-status ${c.status.includes("취득") ? "done" : "wip"}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 11. 어학 */}
            <h2 id="s-lang" className="namu-h2">
              <span className="namu-secnum">11.</span>어학<Edit />
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

            {/* 12. 별명 */}
            <h2 id="s-nick" className="namu-h2">
              <span className="namu-secnum">12.</span>별명<Edit />
            </h2>
            <ul>
              {wikiData.nicknames.map((n) => (
                <li key={n.term}><b>{n.term}</b>: {n.desc}</li>
              ))}
            </ul>

            {/* 13. 어록 */}
            <h2 id="s-quote" className="namu-h2">
              <span className="namu-secnum">13.</span>어록<Edit />
            </h2>
            {wikiData.quotes.map((q, i) => (
              <div className="namu-quote" key={i}>
                <span className="namu-quote-text">{q.text}</span>
                <span className="namu-quote-src">{q.source}</span>
              </div>
            ))}

            {/* 14. 여담 */}
            <h2 id="s-trivia" className="namu-h2">
              <span className="namu-secnum">14.</span>여담<Edit />
            </h2>
            <ul>
              {wikiData.trivia.map((t, i) => (
                <li key={i}>
                  {t.includes("Tistory") ? <>{t.split("Tistory")[0]}<Ext href="https://parkdohyun.tistory.com/">Tistory</Ext>{t.split("Tistory")[1]}</> : 
                   t.includes("Park Brain") ? <>{t.split("Park Brain")[0]}<Ext href="https://github.com/DoHyunBak/Park_Brain">Park Brain</Ext>{t.split("Park Brain")[1]}</> :
                   t.includes("똑똑한 형님들") ? <>{t}</> : t}
                </li>
              ))}
            </ul>

            {/* 15. 둘러보기 */}
            <h2 id="s-links" className="namu-h2">
              <span className="namu-secnum">15.</span>둘러보기<Edit />
            </h2>
            <ul>
              {wikiData.infobox.find(i => i.type === "links")?.value.map((l) => (
                <li key={l.label}><Ext href={l.href} blue>{l.label}</Ext></li>
              ))}
            </ul>
          </div>

          {/* 각주 */}
          <div className="namu-footnotes">
            <ol>
              {wikiData.footnotes.map((f, i) => (
                <li key={i} id={`fn-${i + 1}`}>
                  <a href={`#fnref-${i + 1}`}>[{i + 1}]</a> {f}
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
            <div style={{ borderBottom: '1px solid #ebebeb', paddingBottom: '12px', marginBottom: '12px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>내용의 저작권은 박도현 본인에게 있습니다.</div>
            </div>
            <div style={{ fontSize: '11px', color: '#888', lineHeight: '1.6' }}>
              <p>이 저작물은 CC BY-NC-SA 2.0 KR에 따라 이용할 수 있습니다. (단, 라이선스가 명시된 일부 문서 및 삽화 제외)</p>
              <p>기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는 기여하신 부분의 저작권을 갖습니다.</p>
              <br />
              <p>나무위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.</p>
              <p>나무위키는 위키위키입니다. 여러분이 직접 문서를 고칠 수 있으며, 다른 사람의 의견을 원할 경우 직접 토론을 발제할 수 있습니다.</p>
            </div>
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

          <div className="namu-rail-sticky">
            {/* 광고 1 */}
            <a className="namu-railad" href={wikiData.ads[1].href} target="_blank" rel="noreferrer" style={{ display: 'block', padding: 0, border: 'none', background: 'transparent' }}>
              <span className="namu-ad-label" style={{ position: 'static', marginBottom: '5px' }}>광고</span>
              <img src={wikiData.ads[1].img} alt="ad" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '10px', background: '#fff' }} />
            </a>

            {/* 광고 2 */}
            <a className="namu-railad" href={wikiData.ads[2].href} target="_blank" rel="noreferrer" style={{ display: 'block', padding: 0, border: 'none', background: 'transparent', marginTop: '15px' }}>
              <span className="namu-ad-label" style={{ position: 'static', marginBottom: '5px' }}>광고</span>
              <img src={wikiData.ads[2].img} alt="ad" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '10px', background: '#fff' }} />
            </a>
          </div>
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
