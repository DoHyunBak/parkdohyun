// 나무위키 패러디 포트폴리오 콘텐츠 데이터 (박도현 / 개발자)
// 레이아웃 구조는 실제 나무위키 인물 문서를 그대로 흉내내고, 내용만 본인 것으로 채운다.
// "TODO" 표시는 본인이 직접 채워야 자연스러운 항목 (정확한 생일 / MBTI / 별명 / 어록 / 여담 등)

export const wikiData = {
  title: "박도현",
  disambiguation: "개발자", // 제목 옆 괄호: 박도현(개발자)
  romaja: "Park Do-hyun",
  lastEdited: "2026-06-10 18:53:13", // 최근 수정 시각 (장식)
  editCount: 17, // 제목 옆 숫자 (장식)
  image: "/myLogo.png",

  // 상단 경고/안내 틀
  notice:
    "이 문서는 나무위키를 패러디한 박도현 본인의 포트폴리오입니다. 실제 나무위키 문서가 아니며, 등재된 사실도 없습니다.",

  // 인포박스(개요 틀)
  infobox: [
    { label: "출생", value: "2002년 3월 23일 (만 24세)" },
    { label: "거주지", value: "대한민국 서울특별시 관악구" },
    { label: "국적", value: "대한민국" },
    {
      label: "학력",
      value: [
        "당곡초등학교 (졸업)",
        "성보중학교 (졸업)",
        "세화고등학교 (졸업)",
        "한양대학교 ICT융합학부 (재학)",
      ],
    },
    { label: "직업", value: "백엔드 개발자 (지망)" },
    { label: "분야", value: "B2B · ERP/SAP · 엔터프라이즈 백엔드" },
    { label: "주력 스택", value: "Java · Spring Boot · MySQL" },
    { label: "MBTI", value: "TODO" }, // TODO
    { label: "활동 시작", value: "2021년 (대학 입학)" },
    { label: "소속", value: "한양대학교 ICT융합학부" },
  ],

  // 인포박스 하단 링크 줄
  links: [
    { label: "GitHub", href: "https://github.com/DoHyunBak" },
    { label: "Tistory", href: "https://parkdohyun.tistory.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dohyunbak" },
    { label: "YouTube", href: "https://www.youtube.com/@Mr.Share_Man" },
  ],

  // 분류 (카테고리)
  categories: [
    "2002년 출생",
    "서울특별시 출신 인물",
    "세화고등학교 출신",
    "한양대학교 재학생",
    "대한민국의 개발자",
    "백엔드 개발자",
    "서울특별시 거주자",
  ],

  // 약력 연표 (생애에서 사용)
  timeline: [
    { year: "2002. 03. 23.", event: "출생" },
    { year: "유년기", event: "당곡초등학교 → 성보중학교 → 세화고등학교 졸업" },
    { year: "2021. 03.", event: "한양대학교 ICT융합학부 입학" },
    { year: "재학 중", event: "ITCEN Global과 산학협력으로 대학 자산관리 시스템 개발" },
    { year: "현재", event: "ERP/SAP 도메인을 목표로 SAP ABAP 인증 준비" },
    { year: "2027. 03.", event: "졸업 예정" },
  ],

  // 주력 기술 스택 (시그니처)
  signatureStack: [
    {
      id: "spring",
      name: "Java / Spring Boot",
      desc: "REST API 설계와 트랜잭션 처리의 주력 무기. 화면이 아니라 비즈니스 규칙을 중심으로 서버를 짠다.",
    },
    {
      id: "data",
      name: "MySQL / 데이터 모델링",
      desc: "SQLD를 취득할 만큼 데이터 구조 설계와 SQL을 중요하게 본다. 스키마와 마이그레이션 이력도 제품 코드의 일부로 관리한다.",
    },
    {
      id: "infra",
      name: "AWS / Docker / Flyway",
      desc: "배포 후 유지보수가 가능한 인프라를 지향한다. 컨테이너 기반 배포와 DB 마이그레이션을 직접 다룬다.",
    },
  ],

  // 프로젝트
  projects: [
    {
      id: "usto",
      name: "대학물품관리시스템",
      domain: "B2B · 대학 자산 관리 (EAM)",
      role: "백엔드 · DB 설계 · AWS 인프라",
      desc: "학내 물품의 신청·배부·자산 추적을 한 흐름으로 관리하는 시스템. ITCEN Global과의 산학협력으로 진행했다.",
      status: "완료 (현재 배포 방식 재검토 중)",
      links: [
        { label: "GitHub", href: "https://github.com/U-sto/U-sto_BE" },
        { label: "ERD", href: "https://www.erdcloud.com/d/3kAz5Rp8kcKG9qzRv" },
      ],
    },
    {
      id: "kids-friends",
      name: "키즈카페 로봇",
      domain: "로봇 서비스 자동화",
      role: "백엔드 API · 데이터 연동",
      desc: "Temi 로봇과 AI 챗봇을 연동해 키즈카페 응대를 보조하는 시스템. 직원이 여러 아이를 동시에 돌보느라 한 명에게 집중하기 어려운 상황을, 로봇이 안내와 기본 응대를 분담해 덜어주는 것을 목표로 했다.",
      status: "진행 중",
      links: [
        { label: "GitHub", href: "https://github.com/Kids-Friends" },
        { label: "ERD", href: "https://www.erdcloud.com/d/sbZJS3cvn8wwFdr9H" },
      ],
    },
  ],

  // 자격증
  certifications: [
    { name: "SQLD", status: "취득" },
    { name: "ADsP", status: "취득" },
    { name: "컴퓨터활용능력 2급", status: "취득" },
    { name: "정보처리기사", status: "준비 중" },
    { name: "빅데이터분석기사", status: "준비 중" },
    { name: "전산회계 1급", status: "준비 중" },
    { name: "SAP Certified Associate - ABAP Cloud", status: "예정" },
  ],

  // 어학
  languages: [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "중급" },
    { name: "중국어", level: "초급" },
    { name: "일본어", level: "초급" },
  ],

  // 별명 (TODO: 본인이 실제 별명/드립으로 교체)
  nicknames: [
    { term: "백엔드 박", desc: "프론트는 바이브 코딩으로 때우고 백엔드에 집중한다고 해서. (TODO: 실제 별명으로 교체)" },
  ],

  // 어록 (TODO: 본인 말투/드립으로 교체)
  quotes: [
    { text: "화면보다 회사가 어떻게 돌아가는지가 더 궁금하다.", source: "본인 피셜 (TODO: 실제 어록으로 교체)" },
  ],

  // 여담 (트리비아)
  trivia: [
    "기술 블로그(Tistory)를 운영하며 공부한 내용을 정리한다.",
    "YouTube 채널 '@Mr.Share_Man'을 운영한다.", // TODO: 채널 성격 한 줄
    "백엔드 개발자지만, 프론트엔드 화면은 바이브 코딩으로 빠르게 만든다.",
    "ERP/SAP 같은 기업용 시스템 도메인을 목표로 한다.",
    // TODO: 취미 / 좌우명 / 에피소드 등 추가
  ],

  // 우측 사이드바 — 실시간 검색어 (패러디)
  realtimeSearch: [
    "박도현",
    "Spring Boot",
    "ERP / SAP",
    "한양대 ICT융합학부",
    "백엔드 개발자 채용",
    "SQLD",
    "바이브 코딩",
    "Temi 로봇",
  ],

  // 우측 사이드바 — 최근 변경 (패러디)
  recentChanges: [
    { title: "개요", ago: "방금 전" },
    { title: "프로젝트", ago: "7분 전" },
    { title: "주력 기술 스택", ago: "14분 전" },
    { title: "여담", ago: "32분 전" },
    { title: "어록", ago: "1시간 전" },
    { title: "개발 스타일", ago: "3시간 전" },
  ],

  // 광고 (패러디 — 실제로는 본인 셀프 광고/CTA)
  ads: [
    {
      id: "hire",
      title: "백엔드 개발자를 찾고 계신가요?",
      body: "엔터프라이즈 백엔드 · ERP/SAP를 지향하는 신입 개발자, 박도현.",
      cta: "지금 연락하기",
      href: "mailto:badberg2002@gmail.com",
    },
    {
      id: "github",
      title: "이 포트폴리오가 마음에 드셨다면",
      body: "GitHub에서 더 많은 코드와 프로젝트를 확인할 수 있습니다.",
      cta: "GitHub 방문",
      href: "https://github.com/DoHyunBak",
    },
  ],

  // 각주
  footnotes: [
    "ITCEN Global과의 산학협력으로 진행한 프로젝트다.",
    "직접 화면을 짜기보다 AI 도구를 활용해 빠르게 구현하는 방식. 본인은 이를 '바이브 코딩'이라 부른다.",
    "정확히는 ERP/SAP로 대표되는 기업용 백엔드 시스템 도메인.",
    "SAP Certified Associate - Back-End Developer - ABAP Cloud.",
  ],
};
