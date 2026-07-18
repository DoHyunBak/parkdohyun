export const homeData = {
  profile: {
    name: "박도현",
    role: "Developer",
    eyebrow: "SYSTEMS · GAME · AI · PRODUCT",
    headline: "분야의 경계를 넘어, 아이디어를 작동하는 시스템으로 만듭니다.",
    introduction:
      "백엔드에서 출발했지만 한 기술이나 직무에 스스로를 가두지 않습니다. 데이터와 시스템, 게임과 인터랙션, AI와 제품 경험을 함께 이해하며 문제에 필요한 분야를 연결하는 개발자를 지향합니다.",
    email: "mailto:badberg2002@gmail.com",
    github: "https://github.com/DoHyunBak",
    linkedin: "https://linkedin.com/in/dohyunbak",
    blog: "https://parkdohyun.tistory.com/",
    resume: "/resume_park.pdf",
  },
  proof: [
    { label: "현재", value: "Solution Development Intern" },
    { label: "기반", value: "Java · Spring Boot · MySQL" },
    { label: "확장", value: "Game · AI · Web · Automation" },
  ],
  projects: [
    {
      id: "vibe-unbound",
      index: "01",
      featured: true,
      title: "VIBE:UNBOUND",
      type: "AI 방치형 RPG · Game System",
      status: "개발 중 · Vertical Slice 공개",
      summary:
        "자연어 명령을 제한된 규칙으로 컴파일하고, 그 명령이 자동 전투에서 만든 결과를 책임 로그로 되짚는 게임입니다.",
      problem:
        "모호한 한 문장이 반복 실행될 때 생기는 수많은 결과를 플레이어가 직접 확인하고 수정할 수 있어야 했습니다.",
      approach: [
        "React는 제품 화면과 명령 작성 흐름을, Phaser는 월드·전투·카메라를 담당하도록 책임을 분리했습니다.",
        "결정적 GameEngine과 동일 Seed 회귀 검증으로 명령 수정 전후의 결과를 비교할 수 있게 설계했습니다.",
        "AI는 허용된 Schema와 Guardrail 안에서 명령을 제안하며 게임 상태를 직접 조작하지 못하게 경계를 뒀습니다.",
      ],
      contribution: "기획 · 시스템 설계 · 게임/웹 구현 · AI 안전 경계 실험",
      tags: ["React", "TypeScript", "Phaser 3", "GameEngine", "AI Guardrail", "Capacitor"],
      links: [
        { label: "게임 체험", href: "https://vibe-unbound.com/", primary: true },
      ],
      signal: "CONTROL · MISTAKE · RESPONSIBILITY",
    },
    {
      id: "usto",
      index: "02",
      title: "대학물품관리시스템 U-sto",
      type: "Enterprise System · Public API",
      status: "완료",
      summary:
        "조달청 공공데이터와 대학 자산 생애주기를 연결한 산학협력 시스템입니다. 단순 CRUD보다 데이터 정합성, 인증, 동기화 이력과 운영 복구에 집중했습니다.",
      problem:
        "분산된 대학 물품 정보를 표준 분류 체계로 통합하고, 외부 API 장애와 비즈니스 롤백 속에서도 추적 가능한 기록을 남겨야 했습니다.",
      approach: [
        "Spring Boot·JPA·MySQL 기반 도메인과 자산 생애주기 승인 API를 설계했습니다.",
        "Sync History를 REQUIRES_NEW 트랜잭션으로 분리해 본 작업이 실패해도 실패 이력을 보존했습니다.",
        "외부 전송 전용 DTO와 실제 응답 기반 파싱으로 AI·공공 API 계약 변경에 대응했습니다.",
      ],
      contribution: "백엔드 총괄 · DB 아키텍처 · 보안/인증 · 배포 운영",
      tags: ["Java", "Spring Boot", "JPA", "MySQL", "Flyway", "AWS"],
      links: [
        { label: "GitHub", href: "https://github.com/U-sto/U-sto_BE" },
        { label: "Demo", href: "https://u-sto-fe.vercel.app/" },
        { label: "ERD", href: "https://www.erdcloud.com/d/3kAz5Rp8kcKG9qzRv" },
      ],
    },
    {
      id: "kids-friends",
      index: "03",
      title: "키즈카페로봇 Kids-Friends",
      type: "Physical AI · IoT · Robot",
      status: "완료",
      summary:
        "Temi 로봇, 라즈베리파이 센서, AI와 웹 서비스를 연결해 키즈카페의 반복 안내와 안전 보조를 자동화한 5인 팀 프로젝트입니다.",
      problem:
        "하드웨어가 준비되기 전에도 팀이 병렬로 개발할 수 있는 명확한 이벤트 계약과 통신 경계가 필요했습니다.",
      approach: [
        "일반 조회는 REST, 실시간 센서·로봇 제어는 MQTT/WebSocket으로 분리했습니다.",
        "eventType·deviceId·distanceCm·detectedAt 기반 센서 이벤트 정의서를 협업 계약으로 만들었습니다.",
        "사용자 계정보다 visitor_session·robot·staff_call·zone 중심으로 현장 도메인을 다시 모델링했습니다.",
      ],
      contribution: "백엔드 API · 시스템 아키텍처 · 메시징 계약 설계",
      tags: ["Spring Boot", "MQTT", "WebSocket", "Raspberry Pi", "Temi", "IoT"],
      links: [
        { label: "GitHub", href: "https://github.com/Kids-Friends" },
        { label: "Demo Video", href: "https://www.youtube.com/watch?v=tAUQZem72Ao&t=207s" },
      ],
    },
  ],
  experience: [
    {
      period: "2026.06 — NOW",
      title: "Quantum Edu Solution",
      role: "Solution Development Intern",
      description:
        "솔루션 개발 환경에서 제품과 기술의 경계를 넓히며 실무 경험을 쌓고 있습니다.",
    },
    {
      period: "2025.07 — 2026.06",
      title: "U-sto · 산학협력 캡스톤",
      role: "Backend Lead · System Architect",
      description:
        "대학 자산 관리의 데이터 모델, 인증, 공공데이터 연동, 배포 운영을 맡아 시스템의 처음부터 끝까지 경험했습니다.",
    },
    {
      period: "2021.03 — 2027.03",
      title: "한양대학교 소프트웨어융합대학",
      role: "ICT융합학부 · 졸업예정",
      description:
        "소프트웨어를 기반으로 데이터, 미디어, 로봇, 게임과 제품 문제를 넘나드는 프로젝트를 수행하고 있습니다.",
    },
  ],
  capabilities: [
    {
      number: "A",
      title: "Systems",
      text: "데이터 모델과 트랜잭션, 인증, 외부 연동, 배포까지 운영 가능한 시스템을 설계합니다.",
      proof: "U-sto · Spring Boot · MySQL · AWS",
    },
    {
      number: "B",
      title: "Game & Interaction",
      text: "규칙과 상태, 피드백이 맞물리는 인터랙티브 경험을 실제 런타임으로 구현합니다.",
      proof: "VIBE:UNBOUND · Phaser · Deterministic Engine",
    },
    {
      number: "C",
      title: "AI & Automation",
      text: "AI를 정답 생성기가 아닌 검증 가능한 작업 도구로 다루고 안전 경계를 설계합니다.",
      proof: "Loop Compiler · Guardrail · AI Integration",
    },
    {
      number: "D",
      title: "Product Thinking",
      text: "기술에서 출발하지 않고 사용자가 반복해서 겪는 문제와 실제 운영 흐름에서 시작합니다.",
      proof: "키즈카페로봇 Kids-Friends · U-sto · Definition-first",
    },
  ],
  notes: [
    {
      label: "Problem Definition",
      title: "멋있는 기능보다 문제정의에서 시작한다",
      href: "https://parkdohyun.tistory.com/35",
    },
    {
      label: "Reading Capacity",
      title: "정보가 쉬워질수록 더 길게 읽어야 하는 이유",
      href: "https://parkdohyun.tistory.com/33",
    },
    {
      label: "Developer Wiki",
      title: "프로젝트와 판단의 근거를 축적하는 도현위키",
      href: "#/wiki",
    },
  ],
};
