// 나무위키 패러디 포트폴리오 콘텐츠 데이터 (박도현 / 백엔드 개발자)
// Park Brain(Obsidian 지식 저장소) 심층 데이터를 기반으로 콘텐츠 전면 동기화
import React from 'react';

// 각주/역참조로 부드럽게 스크롤 이동 (SPA 해시 라우터와 충돌 방지 위해 기본 동작 차단)
export const scrollToAnchor = (e, id) => {
  if (e) e.preventDefault();
  const el = typeof document !== "undefined" ? document.getElementById(id) : null;
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
};

// 본문/데이터 설명 안에서 나무위키식 위첨자 각주를 달기 위한 헬퍼.
// 번호 n은 footnotes 배열의 (n)번째 항목과 연결된다. (각 번호는 한 번만 참조)
const fn = (n) => (
  <sup className="namu-fn" id={`fnref-${n}`}>
    <a href={`#fn-${n}`} onClick={(e) => scrollToAnchor(e, `fn-${n}`)}>[{n}]</a>
  </sup>
);

const debutDate = new Date("2025-07-01T00:00:00+09:00");
const today = new Date();
const diffTime = Math.abs(today - debutDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

export const wikiData = {
  title: "박도현",
  disambiguation: "개발자",
  romaja: "Park Do-hyun",
  lastEdited: new Date().toISOString().replace('T', ' ').substring(0, 19),
  editCount: 738,
  image: "/profile.jpg",

  notice:
    "이 문서는 나무위키를 패러디한 박도현 본인의 포트폴리오입니다. 실제 나무위키 문서가 아니며, 등재된 사실도 없습니다. 모든 내용은 로컬 지식 저장소인 'Park Brain'의 심층 데이터를 기반으로 동기화되었습니다.",

  infobox: [
    { label: "출생", value: <><a href="https://namu.wiki/w/2002년" target="_blank" rel="noreferrer">2002년</a> <a href="https://namu.wiki/w/3월 23일" target="_blank" rel="noreferrer">3월 23일</a> (만 24세)</> },
    { label: "거주지", value: <><a href="https://namu.wiki/w/대한민국" target="_blank" rel="noreferrer">대한민국</a> <a href="https://namu.wiki/w/서울특별시" target="_blank" rel="noreferrer">서울특별시</a> <a href="https://namu.wiki/w/관악구" target="_blank" rel="noreferrer">관악구</a></> },
    { label: "국적", value: <a href="https://namu.wiki/w/대한민국" target="_blank" rel="noreferrer">대한민국</a> },
    { label: "본관", value: <a href="https://namu.wiki/w/밀양 박씨" target="_blank" rel="noreferrer">밀양 박씨</a> },
    { label: "신체", value: <>181.6cm, 89kg, <a href="https://namu.wiki/w/ABO식 혈액형" target="_blank" rel="noreferrer">O형</a></> },
    { label: "종교", value: <a href="https://namu.wiki/w/불교" target="_blank" rel="noreferrer">불교</a> },
    { label: "전망", value: <><a href="https://namu.wiki/w/코퍼러토크러시" target="_blank" rel="noreferrer">Corporatocracy</a>{fn(34)}</> },
    { label: "병역", value: <><a href="https://namu.wiki/w/제31보병사단" target="_blank" rel="noreferrer">제31보병사단 95여단</a> 병장 만기전역<br />(2022년 8월 9일 ~ 2024년 2월 8일)</> },
    {
      label: "학력",
      value: [
        <><a href="https://namu.wiki/w/서울당곡초등학교" target="_blank" rel="noreferrer">당곡초등학교</a> (졸업)</>,
        <><a href="https://namu.wiki/w/성보중학교" target="_blank" rel="noreferrer">성보중학교</a> (졸업)</>,
        <><a href="https://namu.wiki/w/세화고등학교(서울)" target="_blank" rel="noreferrer">세화고등학교</a> (졸업)</>,
        <><a href="https://namu.wiki/w/한양대학교/학부/소프트웨어융합대학" target="_blank" rel="noreferrer">한양대학교 소프트웨어융합대학</a><br /><span style={{ fontSize: '0.82em', color: 'var(--namu-muted)' }}>(ICT융합학부 미디어테크놀로지 21 / 공학사)</span></>
      ],
    },
    { label: "직업", value: <><a href="https://namu.wiki/w/백엔드" target="_blank" rel="noreferrer">백엔드 개발자</a> (지망)</> },
    { label: "데뷔", type: "debut", value: <><a href="https://namu.wiki/w/2025년" target="_blank" rel="noreferrer">2025년</a> 산학캡스톤디자인</>, sub: `(데뷔일로부터 +${diffDays}일)` },
    { label: "분야", value: <><a href="https://namu.wiki/w/B2B" target="_blank" rel="noreferrer">B2B</a> · <a href="https://namu.wiki/w/전사적 자원 관리" target="_blank" rel="noreferrer">ERP/SAP</a> · <a href="https://namu.wiki/w/백엔드" target="_blank" rel="noreferrer">엔터프라이즈 백엔드</a></> },
    { label: "주력 스택", value: <><a href="https://namu.wiki/w/Java" target="_blank" rel="noreferrer">Java</a> · <a href="https://namu.wiki/w/Spring(프레임워크)" target="_blank" rel="noreferrer">Spring Boot</a> · <a href="https://namu.wiki/w/MySQL" target="_blank" rel="noreferrer">MySQL</a> · AI/RAG</> },
    { label: "MBTI", value: "ENTP와 ISTJ가 번갈아 나와 신뢰하지 않음 (T는 확실)" },
    { label: "소속", value: <a href="https://namu.wiki/w/한양대학교/학부/소프트웨어융합대학" target="_blank" rel="noreferrer">한양대학교 소프트웨어융합대학</a> },
    {
      label: "링크",
      type: "links",
      value: [
        { label: "GitHub", href: "https://github.com/DoHyunBak" },
        { label: "Tistory", href: "https://parkdohyun.tistory.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/in/dohyunbak" },
        { label: "YouTube", href: "https://www.youtube.com/@Mr.Share_Man" },
      ],
    },
  ],

  categories: [
    "2002년 출생",
    "서울특별시 출신 인물",
    "세화고등학교 출신",
    "한양대학교 재학생",
    "대한민국의 개발자",
    "백엔드 개발자",
    "Park_Brain 운영자",
    "밀양 박씨",
    "공학사 학위 보유자",
    "ERP/SAP 지망생",
    "산학협력 프로젝트 참여자",
  ],

  timeline: [
    { year: "2002. 03. 23.", event: "서울특별시 관악구 출생" },
    { year: "유년기", event: "당곡초등학교 → 성보중학교 → 세화고등학교 졸업" },
    { year: "고교 시절", event: "원래 초등교사를 지망하여 교대 입시를 준비했으나, 저출산 문제로 인한 임용 절벽 현상에 절망하고 진로를 컴퓨터공학으로 선회" },
    { year: "2021. 03.", event: "한양대학교 소프트웨어융합대학 ICT융합학부 입학 (컴퓨터 교사가 될 수 있다는 차선책을 염두에 둠)" },
    { year: "2022 - 2024", event: "제31보병사단 95여단 병장 만기전역 (2022.08.09 ~ 2024.02.08)" },
    { year: "2024 - 2025", event: "복학 후 설계방법론·모바일로봇·웹애플리케이션개발 등 실무형 교과에서 프로젝트 다수 수행 (리빙랩, Temi 로봇, 키오스크)" },
    { year: "2025. 07.", event: "ITCEN Global 산학협력 프로젝트 'U-sto' 백엔드 아키텍처 설계 및 구축 주도 (백엔드 데뷔)" },
    { year: "2026 상반기", event: "U-sto에 조달청 G2B OpenAPI·AI 예측 연동 고도화. 'Park Brain' 지식 자동화 시스템 구축·운영 시작" },
    { year: "현재", event: "ERP/SAP 도메인 심화 및 효율적 백엔드 아키텍처 연구 중. 2026 여름 현장실습 지원, AI/RAG는 보조 수단으로 활용" },
    { year: "2027 (계획)", event: "SSAFY / SAP CODE 부트캠프 진입 목표 — 실무형 백엔드 → ERP/SAP 전문가 트랙" },
    { year: "2027. 03.", event: "졸업 예정" },
    { year: "졸업 이후 (의향)", event: "취업 후 직장과 병행하는 야간대학원 진학 의향 — 백엔드·ERP 도메인 심화" },
  ],

  signatureStack: [
    {
      id: "spring",
      name: "Java / Spring Boot",
      desc: <>엔터프라이즈급 서비스 구축을 위한 핵심 기술. Controller-Service-Repository-Entity-DTO의 책임을 철저히 분리{fn(35)}하고 트랜잭션 경계는 항상 Service 계층에 둔다. 새 기능은 '동작'부터가 아니라 요구사항 요약 → ERD → Flyway → Entity → Repository → Service → Controller → Test → 운영 점검 순서로 DB 스키마부터 잡아 나간다. 인증은 별도 지시가 없으면 JWT가 아닌 세션 기반(Spring Security)을 기본값{fn(36)}으로 가정하며, 관리자 API에는 세션 인증 가드를 반드시 건다. 이력·동기화 로그처럼 비즈니스 롤백과 함께 사라지면 안 되는 기록은 REQUIRES_NEW 전파 속성으로 물리적으로 분리한다.</>,
    },
    {
      id: "data",
      name: "MySQL / 데이터 모델링",
      desc: <>비즈니스 요구사항을 정규화된 관계형 모델로 추상화하는 것을 백엔드 역량의 근간으로 본다. 코드성 숫자(물품분류번호 등)는 VARCHAR로, Y/N 컬럼은 CHAR(1) + YesNoConverter{fn(37)}로 다루고, 모든 테이블에 CRE_BY/CRE_AT/UPD_BY/UPD_AT 감사 컬럼을 둔다. 공공데이터(G2B) 연동 시에는 RAW(수집) → STG(중복제거) → 운영의 3단계 적재 구조를 설계하고, 대량 반영은 JPA save() 반복 대신 Native upsert(ON DUPLICATE KEY UPDATE)로 처리한다. 읽기·검색·페이징은 전체 조회 후 서버 필터링 대신 JPQL·QueryDSL + DTO Projection{fn(38)}으로 DB단에서 끝낸다.</>,
    },
    {
      id: "infra",
      name: "AWS / Docker / Flyway",
      desc: <>Docker Compose 기반 컨테이너 배포 환경을 선호하며, docker-compose up -d --build로 코드 변경을 반영한다. Flyway로 DB 스키마를 소스 코드처럼 버전 관리해 개발-운영 환경 불일치를 제거한다. EC2/RDS 보안그룹(3306 인바운드), 프리티어 비용 초과(RDS 자동백업·MultiAZ·데이터 전송) 대응, 디스크 용량 부족(docker system prune 시 볼륨 백업 확인{fn(39)}), CORS·SameSite·Secure 쿠키 같은 배포 환경 특유의 트러블슈팅에 능숙하다.</>,
    },
    {
      id: "integration",
      name: "외부 시스템 연동 & 계약 설계",
      desc: <>외부 OpenAPI·AI 서버 연동을 '계약(Req/Res 고정) + 운영(관측·재시도·로그)'으로 확정해 모델이나 벤더가 바뀌어도 백엔드를 거의 손대지 않도록 설계한다. 조달청 물품목록정보서비스(ThngListInfoService)의 2→4→6→8→10단위 물품분류 계층을 다루고, ServiceKey·TPS 30 제한·도메인 재등록 같은 운영 이슈를 처리한다. AI 연동은 /api/ai/chat과 /api/ai/forecast로 책임을 분리하고 상태코드 규칙(200/400/401/429/502/504)·X-Request-Id·Idempotency-Key{fn(40)}를 둔다. 외부 결과코드는 클라이언트에 노출하지 않고 내부 코드(G2B_NO_DATA 등)로 매핑한다.</>,
    },
    {
      id: "ai",
      name: "RAG & AX (Subsidiary)",
      desc: <>백엔드 생산성 향상과 지능형 서비스 구현을 위한 보조 기술. LLM의 환각{fn(41)}을 줄이기 위해 Query Encoder → MIPS 검색 → Generator로 이어지는 RAG 파이프라인을 이해하고, 매개변수 메모리(언어 능력)와 비매개변수 메모리(외부 지식 DB)를 구분해 설계한다. AI를 '정답 생성기'가 아니라 '작업 분배 도구'로 보고 결과를 항상 검증하며, 여러 모델을 역할별로 나눠 쓴다. 이 철학을 'Park Brain' 지식 자동화 시스템과 AI 에이전트 기반 업무 자동화(AX)로 직접 구현하고 있다.</>,
    }
  ],

  projects: [
    {
      id: "usto",
      name: "대학물품관리시스템 (U-sto)",
      domain: "B2B · 대학 자산 관리 (EAM) · 공공데이터",
      role: "백엔드 총괄 · DB 아키텍트 · 보안/인증",
      desc: <>조달청 G2B OpenAPI를 연동해 대학 내 자산을 취득→운용→반납→폐기→불용의 전 생애주기로 관리하는 Spring Boot 시스템. 단순 CRUD가 아니라 공공데이터 연동·동기화 이력·세션 인증·DB 설계가 차별점이다. 박도현은 백엔드 환경 세팅(Gradle·Swagger·Flyway·폴더구조)부터 SecurityConfig 세션 인증 필터 체인과 CustomUserDetailsService, 회원/인증 도메인 전반(이메일·휴대폰 인증, 중복확인, 가입·로그인·아이디/비밀번호 찾기, 회원 승인), 전역 Exception 구조 커스터마이징, G2B 목록번호 갱신과 자산 생애주기 승인 API(취득 확정·반납·불용·처분)까지 담당했다. 핵심 트러블슈팅으로는 ① 동기화 트랜잭션 롤백 시 실패 로그까지 사라지는 문제를 Sync History를 REQUIRES_NEW로 분리해 해결, ② AI 예측 연동에서 내부 DTO와 AI 서버 스키마 불일치로 발생한 422 오류를 '외부 전송 전용 DTO 분리'로 해결, ③ AI 응답의 section을 List로 가정했다가 실제로는 객체 1개여서 터진 Jackson START_OBJECT 파싱 오류{fn(42)}를 실제 응답 구조에 맞춰 수정해 결과를 TB_FC001M에 저장, ④ IP 직접 노출(13.124.10.41)을 api.도메인으로 분리하며 CORS allowedOrigins + credentials:include{fn(43)}와 조달청 허용 도메인 재등록을 처리한 것이 있다.</>,
      status: "완료",
      links: [
        { label: "GitHub(BE)", href: "https://github.com/U-sto/U-sto_BE" },
        { label: "Demo(FE)", href: "https://u-sto-fe.vercel.app/" },
        { label: "ERD", href: "https://www.erdcloud.com/d/3kAz5Rp8kcKG9qzRv" },
      ],
    },
    {
      id: "kids-friends",
      name: "키즈카페 서비스 로봇 (Kids-Friends)",
      domain: "로봇 서비스 자동화 · Physical AI · IoT",
      role: "백엔드 API 설계 · 시스템 아키텍처 · 메시징",
      desc: <>Temi 서비스 로봇{fn(44)}에 라즈베리파이 센서·AI·웹 서비스를 연결해 키즈카페에서 안내·대화·안전 보조를 제공하는 5인 팀 프로젝트(모바일로봇의이해). 'Temi로 무엇을 할까'가 아니라 '현장에서 누가 어떤 반복 문제를 겪는가'에서 출발해, 직원이 위치 안내·규칙 설명·호출 응대를 반복하느라 안전관리에 집중 못 하는 pain point를 1차 응대 자동화로 풀었다. 박도현은 '소프트웨어만으로 가능한 기능(AI 대화·FAQ·안내 시나리오)'과 '센서/HW가 필요한 기능(장애물 감지·위험구역 알림·실시간 제어)'을 분리해, 센서 도착 전에 FE/BE와 API 정의서를 먼저 끝내는 선개발 전략을 세웠다. 일반 조회는 REST, 센서·로봇 실시간 제어는 WebSocket/MQTT(pub/sub{fn(45)})로 통신을 분리하고, 라즈베리파이는 현장 센서 게이트웨이 / EC2는 백엔드 서버로 역할을 나눴다. 하드웨어 팀과는 '센서 이벤트 정의서'(eventType·deviceId·distanceCm·detectedAt JSON)를 계약서로 합의해 TB_SENSOR_EVENT 스키마로 적재했고, DB는 회원 중심이 아닌 visitor_session·robot·staff_call·chat_log·zone·faq 중심으로 재설계했다.</>,
      status: "진행 중",
      links: [
        { label: "GitHub", href: "https://github.com/Kids-Friends" },
      ],
    },
    {
      id: "park-brain",
      name: "Park Brain (지식 자동화 시스템)",
      domain: "개인 백엔드 · 자동화 · RAG 지식관리",
      role: "기획 · 구현 · 운영 (1인)",
      desc: <>개발 활동(Git 커밋·AI 대화·터미널 명령어·수정 파일)을 매일 자동 수집해 Obsidian 볼트에 기록하고 GitHub에 push하는 Python 기반 자동화 시스템. dev_logger.py(일간)·weekly_reporter.py(주간 Mermaid 차트)·vault_sync.py(30분마다 즉시 동기화)가 Windows Task Scheduler{fn(46)}로 무인 구동된다. 단순 로깅을 넘어 운영 안정성을 직접 설계한 것이 핵심으로, ① 민감 패턴(API 키·JWT eyJ… 토큰)을 정규식으로 잡아 [REDACTED] 치환하는 보안 스캔{fn(47)}, ② Park_Brain 이외 remote URL push를 차단하는 검증(HTTPS '/'와 SSH ':' 형식 모두 커버), ③ Windows 8.3 짧은 경로와 전체 경로 혼용으로 생긴 문자열 오프셋 버그, CP949에서 em dash 출력 시 UnicodeEncodeError, PS1 한글 깨짐(UTF-8 BOM) 등을 트러블슈팅하며 재현 가능한 방법론 문서로 남겼다. 수집된 원천 노트는 RAG 지식층(Wiki)으로 ingest되어 이 포트폴리오 데이터의 근간이 된다.</>,
      status: "운영 중",
      links: [
        { label: "GitHub", href: "https://github.com/DoHyunBak/Park_Brain" },
      ],
    }
  ],

  vibeLabs: [
    {
      id: "hana-management",
      name: "하나주택종합관리 회사 홈페이지",
      desc: "어버이날 선물로 직접 제작한 아버지 회사 홈페이지. Vercel Functions로 민감한 환경 변수를 백엔드로 격리 처리한 보안 강화형 관리 웹.",
      links: [{ label: "Site", href: "https://hanahm.co.kr" }],
    },
    {
      id: "living-lot",
      name: "교내 공유 모빌리티 주차 해결 (리빙랩)",
      desc: "한양대 ERICA 캠퍼스 전동킥보드 불법주정차 문제를 IoT 위치추적 + AI 불법주차 판별 + 1클릭 신고로 푸는 리빙랩·디자인싱킹 프로토타입. 페르소나·경험 여정 맵으로 문제를 정의하고, 이용자를 단순 사용자가 아닌 문제 발굴~평가 주체로 끌어들였다.",
      links: [{ label: "Demo", href: "https://living-lot-fe.vercel.app/" }],
    },
    {
      id: "smockout",
      name: "금연쉼터 (SmockOut)",
      desc: "UI 개선과 취약점 패치(시크릿 노출·인증 토큰 저장 위치·보안 헤더 점검)를 중점적으로 진행한 금연 보조 서비스 앱.",
      links: [{ label: "Demo", href: "https://smockout.vercel.app/" }],
    },
    {
      id: "all-time",
      name: "올 타임 (All-Time)",
      desc: "기숙사 생활(커뮤니티·공지·시설예약·결제)을 한 앱으로 통합하는 리빙랩 프로젝트의 프론트엔드. 고정폭 숫자·시맨틱 태그·성공 햅틱 등 2026 UI/UX 트렌드를 반영했다.",
      links: [{ label: "Demo", href: "https://all-time-fe.vercel.app/" }],
    },
    {
      id: "sony-kiosk",
      name: "소니 A7 체험형 키오스크",
      desc: "PEST·3C 분석 기반 기획 논리를 React + Babel Standalone 인터랙티브 애니메이션으로 구현. '무엇을 눌렀나'보다 '무엇을 이해했나'를 목표로 랜딩→메인→서브→인터랙션→결과(추천·QR) 구조를 설계했다.",
      links: [{ label: "Demo", href: "https://sonykiosk.vercel.app/" }],
    },
    {
      id: "parkdohyun-web",
      name: "박도현 포트폴리오 (본 사이트)",
      desc: "Vite 5.4.8 + React 19 기반의 나무위키 패러디 포트폴리오. Park Brain 볼트 데이터를 콘텐츠 단일 소스로 연동한다.",
      links: [{ label: "Repo", href: "https://github.com/DoHyunBak/parkdohyun" }],
    }
  ],

  academic: [
    {
      id: "mobile-robot",
      name: "모바일 로봇의 이해",
      topic: "Physical AI (Sensing → Algorithm → Actuation)",
      desc: <>Temi SDK(goTo·speak·follow·telepresence)와 Android Studio 기반으로 로봇 제어 앱을 개발했다. ESP32/Arduino 호출 버튼, Firebase 로그, LLM(의도 분류·응답) + VLM(공간 인식){fn(48)}을 연결하며 현실 환경과 상호작용하는 물리적 지능 시스템의 구조를 학습했다. UX/UI를 넘어 대상 환경과 물리 시스템의 역할(EX/EI)까지 보는 관점을 익혔다.</>,
    },
    {
      id: "linear-algebra",
      name: "선형대수학 (Linear Algebra)",
      topic: "수학적 동형적 사고와 문제 풀이 원칙",
      desc: "가우스 소거법(REF/RREF), 행렬식, 벡터공간 공리를 학습했다. 서로 다른 문제를 같은 수학적 구조로 치환해 해결하는 '동형적 사고'의 가치를 익혔고, 이는 복잡한 데이터를 구조화하는 백엔드 모델링 역량의 근간이 되었다.",
    },
    {
      id: "design-thinking",
      name: "설계방법론 · 리빙랩과 디자인싱킹",
      topic: "사용자 참여형 문제 해결 방법론",
      desc: <>리빙랩(사용자가 문제 발굴~프로토타입 평가까지 참여하는 '살아있는 실험실')과 디자인싱킹(문제 정의 → 아이디어 도출 → 리빙랩 실증 → 솔루션 검증)을 다뤘다. 페르소나·경험 여정 맵으로 페인포인트를 도출하고, 기술을 중립적 도구가 아니라 사용자 생활·이해관계 속에서 의미가 결정되는 것으로 보는 구성주의{fn(49)} 관점(기술 결정론/도구주의의 한계)을 학습했다. 전동킥보드 주차질서 리빙랩과 올타임 기숙사 앱이 그 산물이다.</>,
    },
    {
      id: "space-exploration",
      name: "현대우주탐사 및 추진시스템기초",
      topic: "추진 시스템과 'Successful Failure'",
      desc: "우주 추진 시스템의 기초와 함께, 실패하더라도 그 과정의 교훈이 미래 성공의 자산이 된다는 긍정적 실패관(Apollo 13의 'Successful Failure')을 인상 깊게 정리했다. 시험 후에는 준비 과정을 회고 글로 남기는 학습 습관을 적용했다.",
    },
    {
      id: "big-data",
      name: "빅데이터분석기사 학습",
      topic: "데이터 분석 전 과정의 키워드 구조화",
      desc: <>필기 4과목(기획/플랫폼/법 · 전처리/통계 · 모델링/알고리즘 · 평가/진단)을 트리 구조로 압축한 키워드맵을 직접 만들었다. DIKW{fn(50)}·SECI·3V부터 결측값(MCAR/MAR/NMAR)·PCA·앙상블(RF/GBM/XGBoost)·혼동행렬·ROC/AUC·교차검증까지, 용어를 한 기준으로 계층화해 '머릿속에 싹 넣는' 학습법을 적용했다.</>,
    },
    {
      id: "web-app",
      name: "웹애플리케이션개발",
      topic: "정보 전달형 키오스크 UI/UX",
      desc: <>기획 → Figma → HTML/CSS → React + Babel Standalone{fn(51)} → 상태관리 → 키오스크 로직 → 발표로 이어지는 흐름을 익혔다. 개발자 편의가 아니라 실제 사용자 시나리오에서 출발해 화면을 설계하고, 사용자 테스트로 검증하는 관점을 체화했다.</>,
    }
  ],

  knowledge: [
    {
      id: "rag-deep",
      name: "RAG (Retrieval-Augmented Generation)",
      desc: <>AI가 학습 데이터(매개변수 메모리)에만 의존하지 않고 외부 지식 DB(비매개변수 메모리)에서 관련 정보를 실시간 검색해 답변을 생성하는 기술. 질문을 벡터로 바꾸는 Query Encoder{fn(52)}, 수억 개 지식 중 내적 최대로 광속 검색하는 MIPS(Maximum Inner Product Search), 검색 결과와 질문을 결합해 답을 만드는 Generator로 이어진다. '무지성 자동화는 수익화가 아니다 — 고유한 지식이 있어야 가치가 생긴다'는 전제를 Park Brain에 체계화했다.</>,
    },
    {
      id: "ai-collab",
      name: "AI 협업 원칙",
      desc: <>AI는 정답 생성기가 아니라 작업 분배 도구라는 태도. 결과를 그대로 믿지 않고 검증하며, 여러 모델을 역할별로 나눠 쓰고 맥락을 분리한다. 모르는 사실은 추측하지 않고 'Uncertain/확실하지 않음'으로 표기한다. 산출은 항상 복붙 가능하게 Summary → Key Points → Micro Steps → Example 구조{fn(53)}로 받고, 디버깅은 문제 재진술 → 가능 원인 2~3개 → 검증 명령 → 최소 수정으로 좁힌다. 글쓰기에는 너무 매끈한 AI 문체를 금지하고 구체적 사례·장면에서 시작하는 '안-AI 글쓰기 원칙'을 적용한다.</>,
    },
    {
      id: "backend-tx",
      name: "Spring 트랜잭션 & 세션 인증 패턴",
      desc: <>비즈니스 로직과 이력/동기화 로그의 트랜잭션을 분리해, 메인이 롤백돼도 실패 로그는 남도록 REQUIRES_NEW를 별도 Service로 호출한다(같은 클래스 자기호출 금지{fn(54)}). 인증은 세션 기반을 기본으로 하며, 간헐적으로 SecurityContext가 사라지는 버그는 '빈 컨텍스트 저장 금지' 가드로, 원인 추적은 쿠키/세션/인증 3단 로그로 좁힌다 — 쿠키 X는 프론트 전송, 세션 X는 서버 저장/만료, 인증 X는 SecurityContext 저장, 인증 O인데 실패는 권한 또는 DTO 변환 문제다.</>,
    },
    {
      id: "api-sync",
      name: "외부 API 동기화 설계",
      desc: <>외부 OpenAPI를 매번 호출하지 않고 RAW(수집) → STG(중복제거) → 운영의 3단계로 적재한 뒤 내부 DB 기준으로 조회한다. 대량 반영은 JPA save() 반복 대신 Native upsert(ON DUPLICATE KEY UPDATE)로, 동기화 성공/실패는 Sync History에 REQUIRES_NEW로 남긴다. 날짜 범위는 'now-2일 ~ now-1일'이 안전하며(당일 데이터는 미반영{fn(55)}), 429 Too Many Requests에는 재시도 + Exponential Backoff로 대응한다. 외부 결과코드는 내부 코드로 매핑하고 '03 No Data'는 장애가 아닌 빈 결과로 처리한다.</>,
    },
    {
      id: "aws-ops",
      name: "AWS 배포 & 운영 트러블슈팅",
      desc: <>EC2 git pull이 막힐 때의 dirty state 정리(checkout/clean), JAR manifest mainClass 확인, Docker 리빌드 시점(--build), 프리티어 비용 초과($13 경험: RDS 자동백업·MultiAZ·데이터 전송){fn(56)}, RDS↔EC2 보안그룹(3306), 디스크 용량 부족(docker system prune 시 볼륨 백업 필수), 그리고 'Network Error는 서버 에러가 아니라 브라우저가 응답을 못 받은 것'이라는 CORS 디버깅 순서를 정리해 두었다.</>,
    },
    {
      id: "g2b-openapi",
      name: "조달청 물품목록정보서비스 OpenAPI",
      desc: <>나라장터 G2B가 제공하는 표준 물품 분류·식별 공공 OpenAPI(ThngListInfoService). REST GET + ServiceKey 인증이며, 물품분류번호의 2(Segment)→4(Family)→6(Class)→8(Commodity)→10(Detail)단위 계층이 핵심이다. 내용연수{fn(57)}는 /getPrdctClsfcNoUslfsvc로 조회해 초기 NULL 허용 적재 후 배치 벌크 UPDATE한다. TPS 30 제한, 일일 호출 제한, 도메인·IP 등록형(서버 변경 시 재등록 필수), URL 인코딩 누락 같은 운영 이슈를 다룬다.</>,
    },
    {
      id: "pkm-method",
      name: "지식 관리 및 개념 단위 분해",
      desc: "프로젝트와 학습 경험을 재사용 가능한 '개념 단위'로 쪼개고 개념 간 연결까지 정리하는 방법론. 요약·숏폼 문화가 읽고 이해하는 힘(Reading Capacity)을 퇴화시킨다고 보고, 긴 글을 끝까지 읽어 자기 언어로 바꾸는 능력을 진짜 실력으로 본다. 회고를 '문제 → 해결 → 깨달음' 패턴으로 반복 축적해 지식의 휘발을 막고 지속 가능한 제2의 뇌를 구축한다.",
    },
    {
      id: "youtube-strategy",
      name: "유튜브 콘텐츠 전략 (데이터 분석)",
      desc: <>MrBeast의 실제 영상 KPI와 풀스크립트를 데이터셋으로 분석한 성장·후킹 전략. 첫 3초 훅, 중간 구독 유도 삽입, 대규모 참여 + 고액 상금의 규모의 경제가 핵심이며, 대결·생존 포맷이 최고 조회수(87M)를 냈다. 대문자·감탄사 비율을 높여 에너지를 청각적으로 전달하고 시청 지속률(retention){fn(58)} 중심으로 구조를 짠다. 자기계발 채널(Mr. Share_Man) 운영의 참조 자료로 쓴다.</>,
    }
  ],

  gears: [
    { name: "본 컴퓨터", desc: "i5-14500 | RTX 3060 12GB | RAM 32GB | SSD 3TB. 주력 개발 워크스테이션 겸 로컬 LLM 실험용." },
    { name: "서브 컴퓨터", desc: "i5-9400F | GTX 1060 3GB | RAM 16GB | SSD 240GB. 모니터링 및 서브 작업용." },
    { name: "노트북", desc: "삼성 갤럭시북4 프로. 이동 중 개발 및 미팅용 메인 랩탑." },
    { name: "작업 환경", desc: "LG 모니터 기반 코딩 세팅. Obsidian(Park Brain) + VS Code + Git/GitHub CLI로 구성된 지식·개발 파이프라인." },
  ],

  certifications: [
    { name: "SQLD", status: "취득" },
    { name: "ADsP", status: "취득" },
    { name: "컴퓨터활용능력 2급", status: "취득" },
    { name: "정보처리기사", status: "준비 중" },
    { name: "빅데이터분석기사", status: "준비 중" },
    { name: "전산회계 2급", status: "준비 중" },
    { name: "JLPT N5", status: "응시" },
    { name: "SAP Certified Associate - ABAP Cloud", status: "예정" },
  ],

  languages: [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "중급" },
    { name: "일본어", level: "JLPT N5 / 듀오링고 학습 중" },
    { name: "중국어", level: "HSK 1급 계획 / 듀오링고 학습 중" },
  ],

  nicknames: [
    { term: "두리안", desc: "블로그 필명 '두리안 스무디'에서 따와 주변에서 줄여 부르는 별명." },
    { term: "셰어맨", desc: "자기계발 유튜브 채널 'Mr. Share_Man'에서 비롯된 별명." },
    { term: "백엔드 담당", desc: "팀 프로젝트마다 자연스럽게 서버·DB·인증을 맡게 되면서 굳어진 포지션 호칭." },
    { term: "정의서부터", desc: "협업을 시작할 때 'API 정의서·스키마부터 맞추자'고 먼저 말한다고 팀원들이 붙인 별명." },
  ],

  // 어록은 실제 블로그(두리안 스무디의 블로그)의 회고 글에서 그대로 인용한다.
  quotes: [
    {
      text: "정보가 쉬워질수록 사람은 생각을 덜 하게 된다.",
      source: <a href="https://parkdohyun.tistory.com/33" target="_blank" rel="noreferrer" style={{ color: "var(--namu-link)" }}>블로그 「Reading Capacity의 중요성, 책을 읽어라」</a>,
    },
    {
      text: "진짜 문제는 책을 덜 읽는 게 아니라, 읽고 이해하는 능력 자체가 퇴화할 수 있다는 점이다.",
      source: <a href="https://parkdohyun.tistory.com/33" target="_blank" rel="noreferrer" style={{ color: "var(--namu-link)" }}>블로그 「Reading Capacity의 중요성, 책을 읽어라」</a>,
    },
    {
      text: "결국 좋은 해결책은 멋있는 기능보다 문제정의에서 시작된다는 점을 더 분명하게 보게 됐다.",
      source: <a href="https://parkdohyun.tistory.com/35" target="_blank" rel="noreferrer" style={{ color: "var(--namu-link)" }}>블로그 「리빙랩 수업을 공부하며 정리한 생각」</a>,
    },
    {
      text: "기술은 단순히 시간을 아껴주는 도구가 아니라, 인간이 정보를 받아들이고 판단하는 방식 자체를 바꾸고 있었다.",
      source: <a href="https://parkdohyun.tistory.com/35" target="_blank" rel="noreferrer" style={{ color: "var(--namu-link)" }}>블로그 「리빙랩 수업을 공부하며 정리한 생각」</a>,
    },
    {
      text: "정치는 계산의 문제가 아니라 책임의 문제이기도 하다는 생각이 들었다.",
      source: <a href="https://parkdohyun.tistory.com/36" target="_blank" rel="noreferrer" style={{ color: "var(--namu-link)" }}>블로그 「AI가 정치를 할 수 없는 이유」</a>,
    },
    {
      text: "정치는 한 가지 기준으로만 판단할 수 없는 일이다. 공정, 효율, 자유, 안전, 복지, 책임 같은 가치들이 계속 부딪히는 자리다.",
      source: <a href="https://parkdohyun.tistory.com/36" target="_blank" rel="noreferrer" style={{ color: "var(--namu-link)" }}>블로그 「AI가 정치를 할 수 없는 이유」</a>,
    },
  ],

  trivia: [
    "기술 블로그(Tistory) '두리안 스무디의 블로그'를 통해 실제 삽질의 기록을 공유한다.",
    "로컬에 'Park Brain'이라는 Obsidian 기반 지식 저장소가 30분마다 자동 동기화되고 매일 23:59 개발 일지가 자동 생성된다.",
    "백엔드 개발의 완성도를 높이기 위한 도구로서 AX와 RAG를 탐구한다.",
    "똑똑한 형님들이 구상하고 만든 것을 재배치해서 내 것으로 만드는 것을 모토로 삼는다.",
    "자기계발을 주제로 한 유튜브 채널 'Mr. Share_Man'을 운영하며, MrBeast의 영상 데이터를 직접 분석해 콘텐츠 전략을 연구했다.",
    "CEO·개발·디자인·유튜브 등 7명의 AI 에이전트로 구성된 '1인 기업' 자동화 프레임워크를 실험 중이다.",
    "원래는 초등교사를 지망해 교대 입시를 준비했으나 임용 절벽을 보고 컴퓨터공학으로 진로를 틀었다.",
    "커리어 방향은 실무형 백엔드에서 ERP/SAP 전문가로, 2027년 SSAFY/SAP CODE 부트캠프 진입을 계획하고 있다.",
    "어버이날 선물로 아버지 회사 홈페이지를 직접 만들어 Vercel Functions로 보안까지 챙겼다.",
    "정보처리기사·빅데이터분석기사·전산회계 2급을 동시에 준비하며 트리 구조화·손필기·오답노트 학습법을 쓴다.",
  ],

  realtimeSearch: [
    "박도현",
    "백엔드 개발자",
    "Spring Boot",
    "Park Brain",
    "공공데이터 G2B 연동",
    "REQUIRES_NEW",
    "ERP SAP",
    "RAG",
    "세션 인증",
    "갤럭시북4 프로",
  ],

  recentChanges: [
    { title: "개요", ago: "방금 전" },
    { title: "메인 프로젝트", ago: "1분 전" },
    { title: "지식 창고", ago: "3분 전" },
    { title: "Vibe Coding Labs", ago: "5분 전" },
  ],

  ads: [
    {
      id: "top",
      img: "/top_ad.png",
      href: "https://github.com/DoHyunBak",
    },
    {
      id: "right1",
      img: "/right_ad_1.png",
      href: "https://github.com/DoHyunBak/parkdohyun",
    },
    {
      id: "right2",
      img: "/right_ad_2.png",
      href: "mailto:badberg2002@gmail.com",
    },
  ],

  footnotes: [
    "ITCEN Global과의 산학협력으로 진행한 프로젝트다.",
    "직접 화면을 짜기보다 AI 도구를 활용해 빠르게 구현하는 방식. 본인은 이를 '바이브 코딩'이라 부른다.",
    "정확히는 ERP/SAP로 대표되는 기업용 백엔드 시스템 도메인.",
    "SAP Certified Associate - Back-End Developer - ABAP Cloud.",
    "Park Brain: Obsidian 기반의 지식 관리 시스템으로, 본 포트폴리오 데이터의 근간이다.",
    "AX (AI Transformation): AI 기술을 도입하여 기존의 비즈니스 모델이나 업무 프로세스를 혁신하는 과정.",
    "Sync History 패턴: 외부 API 동기화 시 성공/실패 여부와 처리 건수를 별도 이력 테이블에 남기는 설계 방식.",
    "REQUIRES_NEW: Spring의 트랜잭션 전파 속성 중 하나로, 부모 트랜잭션 여부와 상관없이 항상 새로운 트랜잭션을 시작한다.",
    "422 Unprocessable Entity: 서버가 요청 엔티티의 문법을 이해했지만, 포함된 지시를 따를 수 없을 때 발생하는 상태 코드.",
    "PEST 분석: 정치(Political), 경제(Economic), 사회(Social), 기술(Technological) 등 거시적 환경 요소를 분석하는 기법.",
    "3C 분석: 자사(Company), 고객(Customer), 경쟁사(Competitor)의 관점에서 시장 상황을 분석하는 기법.",
    "SWOT 분석: 강점(Strength), 약점(Weakness), 기회(Opportunity), 위협(Threat)을 분석하여 전략을 수립하는 기법.",
    "REF/RREF: 선형대수학에서 행렬을 가우스 소거법을 통해 단순화한 형태 (Row Echelon Form / Reduced Row Echelon Form).",
    "MIPS: Maximum Inner Product Search의 약자로, 벡터 공간에서 가장 유사도가 높고 빠른 검색을 가능케 하는 기술.",
    "Encoder: 데이터를 임베딩(숫자 벡터) 공간의 좌표로 변환하는 장치.",
    "Generator: RAG 파이프라인에서 검색된 정보와 질문을 결합하여 최종 답변 문장을 생성하는 LLM 단계.",
    "Successful Failure: 실패하더라도 그 과정에서 얻은 교훈이 미래의 성공을 위한 자산이 된다는 긍정적 실패관 (Apollo 13 사례).",
    "저출산 문제와 임용 절벽: 교대 지망생들의 꿈을 꺾게 만든 대한민국 사회의 거시적 변수.",
    "Staging Table: 대량의 외부 데이터를 본 테이블에 반영하기 전 임시로 적재하여 가공하거나 검증하는 중간 테이블.",
    "Native SQL Bulk Upsert: 다량의 데이터를 한 번에 처리하기 위해 JPA의 추상화 계층을 우회하고 DB 전용 문법(ON DUPLICATE KEY 등)을 사용하는 방식.",
    "G2B: 조달청에서 운영하는 나라장터 공공조달 서비스.",
    "EAM: Enterprise Asset Management의 약자로, 기업의 고정 자산(설비, 비품 등)의 전 생애주기를 관리하는 시스템.",
    "MQTT: IoT 장치 간 가벼운 메시징을 위해 설계된 Publish/Subscribe 기반의 통신 프로토콜.",
    "Physical AI: 가상 세계를 넘어 실제 물리적 환경(로봇, 센서 등)과 상호작용하며 동작하는 인공지능.",
    "Vercel: 프론트엔드 애플리케이션(React, Next.js 등)의 배포 및 호스팅을 자동화해 주는 클라우드 플랫폼.",
    "Flyway: DB의 변경 이력을 소스 코드처럼 버전별로 관리하여 마이그레이션을 자동화하는 도구.",
    "SecurityContext: Spring Security에서 현재 인증된 사용자의 정보를 보관하는 저장소.",
    "CORS: Cross-Origin Resource Sharing의 약자로, 다른 도메인 간의 리소스 공유를 허용하거나 차단하는 브라우저 보안 정책.",
    "Exponential Backoff: 네트워크 실패 시 재시도 간격을 지수적으로 늘려가며 서버 부하를 줄이는 전략.",
    "정의서 주도 개발: 구두 합의 대신 센서 이벤트 정의서·스키마 정의서·API 명세 같은 '오해의 여지 없는 기준'을 먼저 합의하고 개발을 시작하는 협업 방식.",
    "dev_logger: Park Brain의 핵심 Python 스크립트로, 매일 개발 활동을 수집해 일지를 만들고 민감 정보를 [REDACTED] 처리한 뒤 GitHub에 push한다.",
    "쿠키/세션/인증 3단 로그: 세션 인증 장애를 쿠키(전송)·세션(저장)·인증(SecurityContext) 세 단계로 나눠 찍어 원인을 좁히는 디버깅 기법.",
    "Reading Capacity: 요약·숏폼에 의존하지 않고 긴 글을 끝까지 읽어 자기 언어로 재구성하는 능력. 박도현이 진짜 실력으로 보는 역량.",
    "지향하는 가치가 아니라 '어차피 그렇게 흘러갈 것'이라는 전망에 가까운 믿음이다. 사이버펑크 2077의 거대기업 아라사카(Arasaka)처럼 기업이 국가의 기능을 대체해 가는 흐름이 현실에서도 불가피하다고 본다. 굳이 그 자리를 차지할 기업 한 곳을 예상하자면, 이름이 'G'로 시작하는 곳 정도.",
    "계층 분리: Controller는 요청/응답, Service는 비즈니스 로직·트랜잭션, Repository는 DB 접근, DTO는 계층 간 데이터 전달만 맡게 해 각 계층의 책임을 나누는 설계 원칙.",
    "세션 기반 인증: 로그인 상태를 서버 세션(SPRING_SECURITY_CONTEXT)에 저장하는 방식. 토큰을 클라이언트가 들고 다니는 JWT와 달리 서버가 상태를 가진다.",
    "YesNoConverter: DB의 'Y'/'N' 문자(CHAR(1))를 자바 boolean으로 자동 변환해 주는 JPA AttributeConverter.",
    "DTO Projection: 엔티티 전체가 아니라 화면에 필요한 필드만 골라 DTO로 바로 조회하는 방식. 과다 조회와 N+1을 줄인다.",
    "docker system prune: 미사용 이미지·컨테이너·네트워크·캐시를 한 번에 정리하는 명령. -a나 volume까지 지우면 DB 데이터가 날아갈 수 있어 운영 서버에선 백업 확인이 필수다.",
    "Idempotency-Key: 같은 요청이 여러 번 와도 한 번만 처리되도록 보장하는 키. 예측처럼 '같은 입력=같은 결과'인 호출의 중복 실행을 막는다.",
    "환각(Hallucination): LLM이 학습에 없는 사실을 그럴듯하게 지어내는 현상. RAG로 외부 지식을 붙여 줄이는 것이 목표다.",
    "Jackson START_OBJECT 오류: 코드가 배열(List)을 기대했는데 실제 JSON 응답은 객체 1개여서 발생하는 역직렬화 예외. 추측 대신 실제 응답 구조에 DTO를 맞춰야 한다.",
    "credentials:include: 세션 쿠키를 교차 출처(CORS) 요청에 함께 보내도록 하는 설정. 서버의 allowedOrigins와 짝을 맞춰야 동작한다.",
    "Temi: 화면·스피커·자율주행·음성 상호작용을 갖춘 서비스 로봇. SDK로 goTo·speak·follow·telepresence를 제어한다.",
    "pub/sub: 발행(publish)-구독(subscribe) 메시징 모델. 센서·로봇 상태처럼 실시간으로 흩어 보내는 데 적합하며 MQTT가 대표적이다.",
    "Windows Task Scheduler: 지정한 시각·간격·로그온 이벤트에 스크립트를 무인 실행하는 윈도우 작업 스케줄러. dev_logger를 매일 23:59 자동 구동한다.",
    "[REDACTED] 마스킹: API 키·JWT 같은 민감 패턴을 정규식으로 찾아 [REDACTED]로 치환해 로그·커밋에 비밀이 새지 않게 하는 보안 처리.",
    "VLM (Vision-Language Model): 이미지/영상과 언어를 함께 이해하는 모델. 로봇의 공간·사물 인식에 쓰인다. (최종 채택 여부는 확실하지 않음)",
    "구성주의: 기술은 중립적 도구가 아니라 사용자의 생활·이해관계 속에서 의미가 결정된다고 보는 관점. 기술 결정론·도구주의의 한계를 지적한다.",
    "DIKW 피라미드: Data → Information → Knowledge → Wisdom으로 데이터가 가치로 정제되는 단계 모델.",
    "Babel Standalone: 빌드 도구 없이 브라우저에서 바로 JSX/ES6를 변환해 주는 Babel. 가벼운 키오스크 프로토타입에 적합하다.",
    "Query Encoder: 질문 텍스트를 의미 좌표(벡터)로 바꾸는 인코더. RAG 검색의 첫 단계다.",
    "답변 포맷: 박도현이 AI 산출물을 받을 때 쓰는 고정 틀. 요약(Summary) → 실전 불릿(Key Points) → 체크리스트(Micro Steps) → 코드/예시(Example) 순으로 바로 복붙 가능하게 받는다.",
    "자기호출 금지: 같은 클래스 안에서 메서드를 직접 부르면 Spring AOP 프록시를 거치지 않아 @Transactional이 무시된다. REQUIRES_NEW는 반드시 별도 빈(Service)으로 호출해야 적용된다.",
    "당일 데이터 미반영: 공공 API는 당일 데이터가 아직 적재 전일 수 있어 안전 조회 범위로 'now-2일 ~ now-1일'을 쓴다. 실험으로 당일 범위가 0건임을 확인했다.",
    "프리티어 비용 초과: AWS 프리티어 한도를 넘겨 약 $13가 청구된 경험. RDS 자동백업 보존·MultiAZ·데이터 전송이 주원인이었다.",
    "내용연수(DRB_YR): 자산을 사용할 수 있는 표준 연한. 초기 적재 시 NULL을 허용해 넣고 이후 배치로 벌크 UPDATE했다.",
    "시청 지속률(retention): 영상을 끝까지 보는 비율. 유튜브 알고리즘이 가장 중시하는 지표로, 후킹·구조 설계의 목표가 된다.",
  ],
};
