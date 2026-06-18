// 나무위키 패러디 포트폴리오 콘텐츠 데이터 (박도현 / 백엔드 개발자)
// 백엔드 개발자 지망 정체성 강화 및 하드웨어 사양 업데이트 완료
import React from 'react';

const debutDate = new Date("2025-07-01T00:00:00+09:00");
const today = new Date();
const diffTime = Math.abs(today - debutDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

export const wikiData = {
  title: "박도현",
  disambiguation: "개발자",
  romaja: "Park Do-hyun",
  lastEdited: new Date().toISOString().replace('T', ' ').substring(0, 19), 
  editCount: 712,
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
    { label: "병역", value: <><a href="https://namu.wiki/w/제31보병사단" target="_blank" rel="noreferrer">제31보병사단 95여단</a> 병장 만기전역<br />(2022년 8월 9일 ~ 2024년 2월 8일)</> },
    {
      label: "학력",
      value: [
        <><a href="https://namu.wiki/w/서울당곡초등학교" target="_blank" rel="noreferrer">당곡초등학교</a> (졸업)</>,
        <><a href="https://namu.wiki/w/성보중학교" target="_blank" rel="noreferrer">성보중학교</a> (졸업)</>,
        <><a href="https://namu.wiki/w/세화고등학교(서울)" target="_blank" rel="noreferrer">세화고등학교</a> (졸업)</>,
        <><a href="https://namu.wiki/w/한양대학교/학부/소프트웨어융합대학" target="_blank" rel="noreferrer">한양대학교 소프트웨어융합대학</a> (졸업예정)<br /><span style={{ fontSize: '0.82em', color: 'var(--namu-muted)' }}>(ICT융합학부 21 / 공학사)</span></>
      ],
    },
    { label: "직업", value: <><a href="https://namu.wiki/w/백엔드" target="_blank" rel="noreferrer">백엔드 개발자</a> (지망)</> },
    { label: "데뷔", type: "debut", value: <><a href="https://namu.wiki/w/2025년" target="_blank" rel="noreferrer">2025년</a> 산학캡스톤디자인</>, sub: `(데뷔일로부터 +${diffDays}일)` },
    { label: "분야", value: <><a href="https://namu.wiki/w/B2B" target="_blank" rel="noreferrer">B2B</a> · <a href="https://namu.wiki/w/전사적 자원 관리" target="_blank" rel="noreferrer">ERP/SAP</a> · <a href="https://namu.wiki/w/백엔드" target="_blank" rel="noreferrer">엔터프라이즈 백엔드</a></> },
    { label: "주력 스택", value: <><a href="https://namu.wiki/w/Java" target="_blank" rel="noreferrer">Java</a> · <a href="https://namu.wiki/w/Spring(프레임워크)" target="_blank" rel="noreferrer">Spring Boot</a> · <a href="https://namu.wiki/w/MySQL" target="_blank" rel="noreferrer">MySQL</a> · AI/RAG</> },
    { label: "MBTI", value: "신뢰하지 않는 편이지만 T는 확실함" }, 
    { label: "소속", value: <><a href="https://namu.wiki/w/한양대학교/학부/소프트웨어융합대학" target="_blank" rel="noreferrer">한양대학교 소프트웨어융합대학</a> (졸업예정)</> },
    {
      label: "링크",
      type: "links",
      value: [
        { label: "GitHub", href: "https://github.com/DoHyunBak", icon: "github" },
        { label: "Tistory", href: "https://parkdohyun.tistory.com/", icon: "tistory" },
        { label: "LinkedIn", href: "https://linkedin.com/in/dohyunbak", icon: "linkedin" },
        { label: "YouTube", href: "https://www.youtube.com/@Mr.Share_Man", icon: "youtube" },
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
  ],

  timeline: [
    { year: "2002. 03. 23.", event: "서울특별시 출생" },
    { year: "2015. 02.", event: "당곡초등학교 졸업" },
    { year: "2018. 02.", event: "성보중학교 졸업" },
    { year: "2021. 02.", event: "세화고등학교 졸업" },
    { year: "2021. 03.", event: "한양대학교 소프트웨어융합대학 입학" },
    { year: <>2022. 08.<br />- 2024. 02.</>, event: "제31보병사단 95여단 병장 만기전역 (2022.08.09 ~ 2024.02.08)" },
    { year: <>2025. 07.<br />- 2026. 06.</>, event: "산학협력 캡스톤 프로젝트 'U-sto' 백엔드 아키텍처 설계 및 인프라 구축 주도" },
    { year: <>2026. 06.<br />- 현재</>, event: "Quantum Edu Solution Solution Development 인턴" },
    { year: "2027. 03.", event: "한양대학교 소프트웨어융합대학 졸업" },
  ],

  signatureStack: [
    {
      id: "spring",
      name: "Java / Spring Boot",
      desc: "엔터프라이즈급 서비스 구축을 위한 핵심 기술. Controller-Service-Repository 계층 분리를 철저히 고수하며, 비즈니스 로직의 순수성을 유지한다. REQUIRES_NEW 전파 속성을 활용해 로그 트랜잭션을 물리적으로 분리하는 등 시스템 안정성을 최우선으로 설계한다.",
    },
    {
      id: "data",
      name: "MySQL / 데이터 모델링",
      desc: "비즈니스 요구사항을 정규화된 관계형 모델로 추상화한다. SQLD 지식을 바탕으로 성능을 고려한 인덱스 설계와 공공데이터(G2B) 연동 시의 3단계 적재 구조(RAW-STG-운영)를 설계하여 데이터 무결성을 보장한다.",
    },
    {
      id: "infra",
      name: "AWS / Docker / Flyway",
      desc: "Docker Compose를 활용한 컨테이너화 배포 환경을 선호한다. Flyway를 통한 DB 스키마 형상관리로 개발-운영 환경의 불일치를 제거하며, EC2/RDS 보안그룹 및 CORS 트러블슈팅에 능숙하다.",
    },
    {
      id: "ai",
      name: "RAG & AX (Subsidiary)",
      desc: "백엔드 생산성 향상과 지능형 서비스 구현을 위한 보조 기술. LLM의 환각을 해결하기 위한 RAG 파이프라인을 구축하거나 AI 에이전트를 통한 업무 자동화(AX)를 연구하여 백엔드 가치를 극대화한다.",
    }
  ],

  projects: [
    {
      id: "usto",
      name: "대학물품관리시스템 (U-sto)",
      domain: "B2B · 대학 자산 관리 (EAM) · 공공데이터",
      role: "백엔드 총괄 · DB 아키텍트",
      desc: "조달청 G2B OpenAPI를 연동하여 대학 내 수만 건의 자산을 관리하는 시스템. AI 예측 API 연동 시 발생한 DTO 구조 불일치(422 Error)를 '외부 전송 전용 DTO 분리' 전략으로 해결했다. Sync History 패턴을 도입하여 동기화 이력을 완벽히 추적한다.",
      status: "완료",
      links: [
        { label: "GitHub(BE)", href: "https://github.com/U-sto/U-sto_BE" },
        { label: "Demo(FE)", href: "https://u-sto-fe.vercel.app/" },
        { label: "ERD", href: "https://www.erdcloud.com/d/3kAz5Rp8kcKG9qzRv" },
      ],
    },
    {
      id: "kids-friends",
      name: "키즈카페 로봇 (Kids-Friends)",
      domain: "로봇 서비스 자동화 · Physical AI",
      role: "백엔드 API 설계 · 메시징 아키텍처",
      desc: "Temi 로봇과 라즈베리파이 센서를 연동한 서비스 로봇 플랫폼. WebSocket과 MQTT 프로토콜을 활용해 하드웨어-서버 간 실시간 양방향 통신을 구현했다. '센서 이벤트 정의서'를 직접 작성하여 하드웨어 팀과의 소통 모호함을 제거했다.",
      status: "진행 중",
      links: [
        { label: "GitHub", href: "https://github.com/Kids-Friends" },
      ],
    }
  ],

  vibeLabs: [
    {
      id: "hana-management",
      name: "하나주택종합관리 회사 홈페이지",
      desc: "어버이날 선물로 직접 제작한 아버지 회사 홈페이지. Vercel Functions를 활용해 민감한 환경 변수를 백엔드로 격리 처리한 보안 강화형 관리 웹.",
      links: [{ label: "Site", href: "https://hanahm.co.kr" }],
    },
    {
      id: "living-lot",
      name: "교내 공유 모빌리티 주차 해결",
      desc: "캠퍼스 주차 문제를 해결하기 위한 리빙랩 기반의 프론트엔드 프로토타입.",
      links: [{ label: "Demo", href: "https://living-lot-fe.vercel.app/" }],
    },
    {
      id: "smockout",
      name: "금연쉼터",
      desc: "UI 개선 및 취약점 패치를 중점적으로 진행한 금연 보조 서비스 앱.",
      links: [{ label: "Demo", href: "https://smockout.vercel.app/" }],
    },
    {
      id: "all-time",
      name: "올 타임 (All Time)",
      desc: "고정폭 숫자 및 시맨틱 태그, 성공 햅틱 등 2026 UI/UX 트렌드를 반영한 타임 매니지먼트 앱.",
      links: [{ label: "Demo", href: "https://all-time-fe.vercel.app/" }],
    },
    {
      id: "sony-kiosk",
      name: "소니 A7 체험형 키오스크",
      desc: "PEST/3C 분석 기반의 기획 논리를 React 인터랙티브 애니메이션으로 구현한 프로젝트.",
      links: [{ label: "Demo", href: "https://sonykiosk.vercel.app/" }],
    },
    {
      id: "parkdohyun-web",
      name: "박도현 포트폴리오 (본 사이트)",
      desc: "Vite 5.4.8 기반의 나무위키 패러디 포트폴리오. Park Brain 데이터를 자동 연동한다.",
      links: [{ label: "Repo", href: "https://github.com/DoHyunBak/parkdohyun" }],
    }
  ],

  academic: [
    {
      id: "database",
      name: "데이터베이스 (Database)",
      topic: "정규화된 관계형 데이터 모델링 및 트랜잭션 최적화",
      desc: "단순한 SQL 작성을 넘어, B2B 도메인에 최적화된 DB 스키마 설계 역량을 쌓았다. 인덱스 튜닝을 통한 조회 성능 개선과 원자성 보장을 위한 트랜잭션 격리 수준을 깊게 탐구하며, '무결한 데이터가 좋은 백엔드의 시작'임을 깨달은 과정이었다.",
    },
    {
      id: "algorithm",
      name: "컴퓨터 알고리즘 (Algorithm)",
      topic: "복잡도 최적화 및 효율적 비즈니스 로직 설계",
      desc: "현실의 비즈니스 문제를 전산학적 사고로 추상화하는 기법을 학습했다. 다양한 정렬 및 탐색 알고리즘을 Java로 직접 구현하며 시간/공간 복잡도를 최소화하는 습관을 들였다. 이는 대규모 트래픽 환경에서도 안정적인 로직을 설계하는 밑거름이 되었다.",
    },
    {
      id: "capstone",
      name: "소프트웨어융합캡스톤1",
      topic: "실무급 백엔드 아키텍처 설계 및 API 라이프사이클 관리",
      desc: "산학협력 수준의 실무 프로젝트를 수행하며 전체 시스템의 척추인 백엔드를 총괄했다. 단순 기능 구현에 그치지 않고 외부 연동 안정성, 에러 핸들링 전략, API 정의서 기반의 효율적 협업 체계를 구축하며 엔지니어로서 한 단계 도약하는 계기가 되었다.",
    },
    {
      id: "java-intro",
      name: "자바 프로그래밍 (Java)",
      topic: "객체지향 패러다임과 엔터프라이즈 개발의 기초",
      desc: "클린 코드와 객체지향 원칙(SOLID)을 체득했다. Spring Boot로 넘어가기 전, JVM 구조와 컬렉션 프레임워크를 심도 있게 다루며 견고한 코드 설계의 중요성을 익혔다. '유지보수하기 좋은 코드가 살아남는 코드'라는 철학을 확립한 수업이었다.",
    },
    {
      id: "smart-sensor",
      name: "스마트센서와 액츄에이터",
      topic: "Physical AI 환경에서의 실시간 데이터 파이프라인",
      desc: "하드웨어 센서에서 발생하는 원시 데이터를 서버로 실시간 수집하고 가공하는 기술을 익혔다. '키즈카페 로봇' 프로젝트의 기술적 모태가 되었으며, 비정형 데이터의 정형화 및 실시간 메시징(MQTT) 처리 능력을 비약적으로 향상시켰다.",
    }
  ],

  knowledge: [
    {
      id: "rag-deep",
      name: "RAG (Retrieval-Augmented Generation)",
      desc: "AI가 외부 지식 DB에서 정보를 실시간으로 찾아 답변을 생성하는 기술. Query Encoder, MIPS 검색, Generator로 이어지는 메커니즘을 'Park Brain'에 체계화했다.",
    },
    {
      id: "pkm-method",
      name: "지식 관리 및 개념 단위 분해",
      desc: "프로젝트와 학습 경험을 재사용 가능한 '개념 단위'로 쪼개어 정리하는 방법론. 지식의 휘발을 막고 지속 가능한 제2의 뇌를 구축하는 핵심 철학이다.",
    }
  ],

  gears: [
    { name: "본 컴퓨터", desc: "i5-14500 | RTX 3060 12GB | RAM 32GB | SSD 3TB. 주력 개발 워크스테이션." },
    { name: "서브 컴퓨터", desc: "i5-9400F | GTX 1060 3GB | RAM 16GB | SSD 240GB. 모니터링 및 서브 작업용." },
    { name: "노트북", desc: "삼성 갤럭시북4 프로. 이동 중 개발 및 미팅용 메인 랩탑." },
  ],

  certifications: [
    { name: "SQLD", status: "취득" },
    { name: "ADsP", status: "취득" },
    { name: "컴퓨터활용능력 2급", status: "취득" },
    { name: "정보처리기사", status: "준비 중" },
    { name: "빅데이터분석기사", status: "준비 중" },
    { name: "전산회계 2급", status: "준비 중" },
    { name: "SAP Certified Associate - ABAP Cloud", status: "예정" },
  ],

  languages: [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "중급" },
    { name: "일본어", level: "듀오링고 학습 중" },
    { name: "중국어", level: "듀오링고 학습 중" },
  ],

  nicknames: [
    { term: "정의서로 말하는 개발자", desc: "모호한 구두 합의보다 '정의서'라는 명확한 기준을 먼저 제시하는 스타일." },
    { term: "백엔드 박", desc: "서버 로직과 트랜잭션 무결성에 집착하는 개발 정체성." },
  ],

  quotes: [
    { text: "화면보다 회사가 어떻게 돌아가는지가 더 궁금하다.", source: "본인 피셜" },
    { text: "AI 모델을 서비스에 붙이는 일은 결국 데이터 계약을 정확히 맞추는 일이다.", source: "U-sto 회고 중" },
    { text: "좋은 소통이란 결국 오해의 여지가 없는 기준을 함께 만드는 일이다.", source: "협업 가치관" }
  ],

  trivia: [
    "기술 블로그(Tistory)를 통해 실제 삽질의 기록을 공유한다.",
    "로컬에 'Park Brain'이라는 Obsidian 기반 지식 저장소가 매일 자동 동기화되고 있다.",
    "백엔드 개발의 완성도를 높이기 위한 도구로서 AX와 RAG를 탐구한다.",
    "똑똑한 형님들이 구상하고 만든 것을 재배치해서 내 것으로 만드는 것을 모토로 삼는다."
  ],

  realtimeSearch: [
    "박도현",
    "백엔드 개발자",
    "Spring Boot",
    "Park Brain",
    "공공데이터 연동",
    "SQLD",
    "Vibe Coding",
    "갤럭시북4 프로",
  ],

  recentChanges: [
    { title: "개요", ago: "방금 전" },
    { title: "메인 프로젝트", ago: "1분 전" },
    { title: "Vibe Coding Labs", ago: "2분 전" },
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
  ],
};