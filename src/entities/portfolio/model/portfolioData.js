export const portfolioData = {
  profile: {
    name: "박도현",
    role: "Developer · Systems, Game, AI & Product",
    headline: "Portfolio of DoHyun Park",
    subHeadline:
      "백엔드에서 출발했지만 한 기술이나 직무에 스스로를 가두지 않습니다.\n시스템·게임·AI·제품 경험을 연결해 아이디어를 실제로 작동하게 만드는 개발자입니다.\n\n(a.k.a '빡도': 친구들이 부르기 쉬워서 쓰는 별명, '시고르': 시고르자브종 닮았다고 여자친구가 지어준 별명)",
    subHeadlineKo:
      "백엔드에서 출발했지만 한 기술이나 직무에 스스로를 가두지 않습니다.\n시스템·게임·AI·제품 경험을 연결해 아이디어를 실제로 작동하게 만드는 개발자입니다.\n\n(a.k.a '빡도': 친구들이 부르기 쉬워서 쓰는 별명, '시고르': 시고르자브종 닮았다고 여자친구가 지어준 별명)",
    email: "mailto:badberg2002@gmail.com",
    tistory: "https://parkdohyun.tistory.com/",
    github: "https://github.com/DoHyunBak",
    linkedin: "https://linkedin.com/in/dohyunbak",
    youtube: "https://www.youtube.com/@Mr.Share_Man",
    resumeLink: "/resume_park.pdf",
  },
  kpis: [
    { id: 1, label: "개발 영역", value: "Systems / Game / AI", icon: "building2" },
    { id: 2, label: "기술 기반", value: "Java / Spring / Web", icon: "server" },
    { id: 3, label: "핵심 역량", value: "Connect & Ship", icon: "briefcase" },
  ],
  philosophy: {
    direction: {
      title: "방향성",
      content:
        "기술을 '도구 세트'로 보고 '무엇을 쓸지보다 무엇을 믿고 무엇을 버릴지'를 판단하는 것을 중요하게 생각합니다. 사용, 운영을 넘어 판단의 기준으로 기술을 다룹니다.",
    },
    vision: {
      title: "장기적 비전",
      content:
        "동작보다 안정성·보안·유지보수성을 우선시하며, 코드 한 줄 한 줄에 책임을 지는 엔지니어로 성장하는 것입니다. 예외 처리·로그 구조·트랜잭션 경계를 기능만큼 중요하게 봅니다.",
    },
  },
  experience: [
    {
      id: "e1",
      period: "2021.03 - 2027.03",
      title: "한양대학교 (졸업예정)",
      role: "ICT융합학부 미디어테크놀로지 전공",
      description:
        "소프트웨어 엔지니어링 및 데이터 관리 기반 학습. 대학물품관리시스템, 키즈카페로봇 Kids-Friends 등 다양한 실무 중심 산학 프로젝트 수행.",
    },
  ],
  projects: [
    {
      id: "vibe-unbound",
      title: "VIBE:UNBOUND",
      summary: "자연어 명령을 제한된 규칙으로 컴파일하고, 자동전투에서 반복된 결과를 책임 로그로 되짚는 AI 방치형 RPG Vertical Slice.",
      roleKo: "기획 · 시스템 설계 · 게임/웹 구현 · AI 안전 경계 실험",
      achievement: "결정적 GameEngine과 동일 Seed 회귀 검증으로 명령 수정 전후를 비교",
      status: "개발 중",
      tags: ["React", "TypeScript", "Phaser 3", "GameEngine", "AI Guardrail", "Capacitor"],
      problem:
        "모호한 자연어 명령이 반복 실행될 때 생기는 수많은 결과를 플레이어가 이해하고 수정할 수 있어야 함.",
      solution:
        "React 제품 화면과 Phaser 전투 런타임을 분리하고, 제한된 Schema와 Guardrail 안에서만 AI가 명령을 제안하도록 설계.",
      result:
        "동일 Seed 기반으로 명령 변경 전후의 행동과 결과를 비교하고 책임 로그로 추적할 수 있는 Vertical Slice 공개.",
      role: "Product Concept, Game System Design, Web/Game Development, AI Guardrails",
      links: {
        docs: "https://vibe-unbound.com/",
      },
      architecture: [
        "React Product UI / Loop Compiler",
        "Deterministic GameEngine",
        "Phaser 3 WebGL Runtime",
        "AI Schema / Provider / Guardrail",
      ],
    },
    {
      id: "usto",
      title: "대학물품관리시스템 (U-sto)",
      summary: "대학 내 물품을 등록·조회·수정·관리하고, 조달청 공공데이터 OpenAPI로 표준 물품분류·내용연수를 연동하는 Spring Boot 기반 웹 시스템.",
      roleKo: "초기 구축 · 회원/인증 도메인 · 외부 API 연동",
      achievement: "조달청 API 동기화 이력 관리 및 세션 기반 인증 구현",
      status: "완료",
      tags: ["Java", "Spring Boot", "MySQL", "Flyway", "Spring Security", "OpenAPI", "QueryDSL"],
      problem:
        "기존 대학 물품 관리는 수기 및 분산되어 있어 동기화 이력 관리나 중앙화된 자산 생애주기 승인이 부재함.",
      solution:
        "조달청 OpenAPI 연동 및 Flyway를 통한 DB 형상관리 적용. 동기화 트랜잭션 롤백 시 실패 로그 저장을 위해 @Transactional(REQUIRES_NEW) 적용.",
      result:
        "물품분류 데이터 연동 및 동기화 이력 관리 성공. 세션 기반 로그인 및 결재 라인 구축을 통한 관리자 인증 도입.",
      role: "Backend Development (회원/보안 인증 흐름 통합, 외부 연계 및 자산 생애주기 승인 API 구현)",
      links: {
        github: "https://github.com/U-sto/U-sto_BE",
      },
      architecture: [
        "Client Application",
        "Spring Boot / Spring MVC / Spring Security",
        "Spring Data JPA / Hibernate",
        "MySQL Database",
      ],
    },
    {
      id: "kids-friends",
      title: "키즈카페로봇 Kids-Friends",
      summary: "Temi 로봇에 센서·라즈베리파이·AI·웹 서비스를 연결해 키즈카페에서 안내·대화·안전 보조를 제공하는 자동화 시스템.",
      roleKo: "백엔드·시스템 설계 · 센서 이벤트 정의",
      achievement: "소프트웨어 기능과 하드웨어 기능을 분리하고 정의서 기반 협업 환경 구축",
      status: "active",
      tags: ["Spring Boot", "MySQL", "Temi Robot", "Raspberry Pi", "Sensor Integration", "AI API", "MQTT/WebSocket"],
      problem:
        "하드웨어(센서/라즈베리파이)와 소프트웨어(백엔드/AI) 간 명확한 데이터 규격과 역할 분담이 필요.",
      solution:
        "센서 이벤트 정의서 및 스키마 정의서 기반으로 하드웨어 팀과 합의 구축. 실시간 제어는 MQTT/WebSocket을 도입하여 유연한 통신 구성.",
      result:
        "AI 응답과 DB 조회 등 소프트웨어로 가능한 기능을 선행 개발하고 하드웨어 연동 시점을 유연하게 대처.",
      role: "Backend & System Design, Data Integration",
      links: {
        github: "https://github.com/Kids-Friends",
      },
    }
  ],
  skills: [
    {
      id: "backend",
      category: "Backend",
      tech: "Java, Spring Boot, JPA / Hibernate",
      techList: [
        { name: "Java", label: "서버 개발 언어" },
        { name: "Spring Boot", label: "웹 서버 프레임워크" },
        { name: "JPA / Hibernate", label: "데이터베이스 ORM" },
      ],
      description:
        "REST API 설계, 대량 트랜잭션 관리, Spring Security(세션 기반 인증) 및 예외 처리, 로그 구조화 등 실무 운영 우선의 백엔드 개발.",
    },
    {
      id: "database",
      category: "Database",
      tech: "MySQL, SQL, Flyway",
      techList: [
        { name: "MySQL", label: "관계형 데이터베이스" },
        { name: "SQL / QueryDSL", label: "데이터 질의 및 검색 최적화" },
        { name: "Flyway", label: "DB 스키마 형상관리" },
      ],
      description:
        "무결성을 보장하는 스키마 설계와 QueryDSL, DTO Projection, 인덱스를 활용한 데이터 검색 최적화 및 안정적인 마이그레이션 운영.",
    },
    {
      id: "infrastructure",
      category: "Infrastructure",
      tech: "Docker, AWS EC2, Linux",
      techList: [
        { name: "Docker Compose", label: "컨테이너 가상화 및 통합" },
        { name: "AWS EC2 / RDS", label: "클라우드 서버 인프라 운영" },
        { name: "Linux", label: "운영 체제 환경" },
      ],
      description:
        "AWS 환경에서의 백엔드 시스템 배포, 도메인 분리, 포트 점유 관리 및 트러블슈팅 경험.",
    },
    {
      id: "api-ai",
      category: "API & AI Integration",
      tech: "OpenAPI, AI API",
      techList: [
        { name: "OpenAPI", label: "공공데이터 연동 (조달청 등)" },
        { name: "AI API", label: "외부 AI 모델 연동 및 RAG 활용" },
        { name: "IoT/Sensor", label: "라즈베리파이 센서 및 MQTT/WebSocket" }
      ],
      description:
        "외부 API 오류 발생 시 내부 코드로 매핑하여 시스템을 보호하고, AI 예측 결과를 파싱해 저장하는 구조화된 데이터 흐름 설계.",
    },
  ],
  languages: [
    {
      id: "korean",
      language: "한국어(Korean)",
      level: "Native",
      certificates: [{ name: "-", grade: "-" }],
    },
    {
      id: "english",
      language: "영어(English)",
      level: "Intermediate",
      certificates: [{ name: "-", grade: "-" }],
    },
    {
      id: "japanese",
      language: "일본어(Japanese)",
      level: "Beginner",
      certificates: [{ name: "JLPT N5", grade: "학습 중" }],
    },
  ],
  certifications: [
    {
      id: "sqld",
      name: "SQLD",
      status: "취득",
      detail: "데이터베이스 모델링 및 SQL 질의 성능 최적화 역량.",
    },
    {
      id: "adsp",
      name: "ADsP",
      status: "취득",
      detail: "데이터 구조화 및 통계적 분석 기반 비즈니스 로직 적용.",
    },
    {
      id: "cl2",
      name: "컴퓨터활용능력2급",
      status: "취득",
      detail: "기본적인 스프레드시트 및 데이터 관리 역량.",
    }
  ],
};
