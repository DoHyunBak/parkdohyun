export const portfolioData = {
  profile: {
    name: "박도현",
    role: "Enterprise Backend Developer",
    headline: "Portfolio of DoHyun Park",
    subHeadline:
      "Focusing on how technology supports real business operations. \nI am a backend engineer dedicated to enterprise system management, \nencompassing data flows and business processes.",
    subHeadlineKo:
      "ERP·SAP 도메인에 특화된 백엔드 개발자입니다.\n기업 시스템의 데이터 흐름과 비즈니스 프로세스를 코드로 구현합니다.",
    email: "mailto:badberg2002@gmail.com",
    tistory: "https://parkdohyun.tistory.com/",
    github: "https://github.com/DoHyunBak",
    linkedin: "https://linkedin.com/in/dohyunbak",
    resumeLink: "/resume_park.pdf",
  },
  kpis: [
    { id: 1, label: "핵심 도메인", value: "ERP / SAP", icon: "building2" },
    { id: 2, label: "주력 스택", value: "Java / Spring", icon: "server" },
    { id: 3, label: "핵심 역량", value: "Management", icon: "briefcase" },
  ],
  philosophy: {
    direction: {
      title: "방향성",
      content:
        "I am interested in how companies operate through technology. Rather than focusing only on individual features, I prefer understanding how backend systems manage data flows, business processes, and organizational operations.",
    },
    vision: {
      title: "장기적 비전",
      content:
        "My long-term goal is to become an engineer who can oversee the technical backbone of an organization. I aim to design and manage enterprise backend architectures, ERP systems, and SAP-based business platforms.",
    },
  },
  experience: [
    {
      id: "e1",
      period: "2021.03 - 2027.03",
      title: "한양대학교",
      role: "ICT융합학부 공학사",
      description:
        "Focusing on software engineering, data management, and enterprise system architectures. Building a foundation in computer science and real-world problem solving through technology.",
    },
  ],
  projects: [
    {
      id: "usto",
      title: " 대학물품관리관리시스템",
      summary: "학내 비품·물품의 신청·배부를 디지털화한 대학 자산관리 시스템. ITCEN Global과 산학협력으로 진행.",
      roleKo: "백엔드 개발 · DB 설계 · AWS 인프라 구축",
      achievement: "EAM 아키텍처 도입으로 자산 추적 체계화 및 업무 처리 시간 단축",
      status: "active",
      tags: ["Java", "Spring Boot", "AWS", "MySQL", "RDS", "Docker", "Flyway", "Hexagonal Architecture", "Open API"],
      problem:
        "Managing large-scale organizational assets across departments lacks centralized ownership and lifecycle tracking, similar to enterprise challenges.",
      solution:
        "Designed a backend system for structured asset data management, tracking asset lifecycles, and supporting organizational allocation, inspired by ERP/SAP asset modules.",
      result:
        "Established a simplified EAM architecture in collaboration with ITCEN Global, providing a reliable technical foundation for business operations.",
      role: "Backend Development(Spring) & Database Administration (DBA) & Cloud Engineering(AWS)",
      links: {
        github: "https://github.com/U-sto/U-sto_BE",
        docs: "https://u-sto-fe.vercel.app/",
      },
      architecture: [
        "Client Application",
        "REST API (Spring Boot)",
        "JPA / Hibernate",
        "MySQL Database",
      ],
    },
    {
      id: "smockOut",
      title: "금연쉼터",
      summary: "금연에 도전하는 사람들이 서로 응원하고 소통하는 모바일 커뮤니티 앱.",
      roleKo: "Flutter 앱 개발 · 백엔드 개발 · AWS 인프라",
      achievement: "지속적 사회적 상호작용으로 금연 목표 유지 지원 환경 구축",
      status: "active",
      tags: ["Flutter", "Community App", "Mobile", "Spring Boot", "MySQL", "AWS", "Docker", "Flyway"],
      problem:
        "People trying to quit smoking often struggle to maintain motivation when they attempt alone without consistent peer support.",
      solution:
        "Built a mobile community app where users share progress, encourage each other, and communicate through quit-smoking focused content.",
      result:
        "Created a support-centered communication space that helps users sustain quit-smoking goals through continuous social interaction.",
      role: "Frontend Development(Flutter) , Backend Development(Spring) & Database Administration (DBA) & Cloud Engineering(AWS)",
      links: {
        github: "https://github.com/DoHyunBak/SO_FE",
        docs: "https://smockout.vercel.app/",
      },
    },
    {
      id: "kids-friends",
      title: "키즈카페 로봇",
      summary: "키즈카페 환경에서 Temi 로봇과 AI 챗봇을 연동한 고객 서비스 자동화 시스템.",
      roleKo: "데이터 연동 · 백엔드 개발",
      achievement: "기업 데이터 신뢰성 확보 및 비즈니스 데이터 흐름 중앙화",
      status: "active",
      tags: ["Spring Boot", "MySQL", "Temi Robot", "Raspberry Pi", "Sensor Integration", "AI Chatbot"],
      problem:
        "Data silo phenomenon and inconsistency between internal individual systems and external business platforms.",
      solution:
        "Implemented scheduling-based synchronization and defined standardized RESTful API specs for ERP/SAP data integration.",
      result:
        "Secured enterprise-wide data reliability and centralized management of business data flow.",
      role: "Data Integration & Backend Development",
      links: {
        github: "https://github.com/Kids-Friends",
      },
    },
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
        "REST API design, large-scale transaction management, and business logic structuring in enterprise environments.",
    },
    {
      id: "database",
      category: "Database",
      tech: "MySQL, SQL, Database Modeling",
      techList: [
        { name: "MySQL", label: "관계형 데이터베이스" },
        { name: "SQL", label: "데이터 질의 언어" },
        { name: "Database Modeling", label: "데이터 구조 설계" },
      ],
      description:
        "Schema design ensuring data integrity and SQL query optimization management.",
    },
    {
      id: "infrastructure",
      category: "Infrastructure",
      tech: "Docker, AWS EC2, GitHub, CI/CD, Flyway",
      techList: [
        { name: "Docker", label: "컨테이너 가상화" },
        { name: "AWS EC2", label: "클라우드 서버 인프라" },
        { name: "GitHub", label: "버전 관리·협업" },
        { name: "CI/CD", label: "자동 빌드·배포 파이프라인" },
        { name: "Flyway", label: "DB 마이그레이션 도구" },
      ],
      description:
        "Reliable system deployment, database migration operations, and API documentation via Swagger.",
    },
    {
      id: "enterprise-sap",
      category: "Enterprise / SAP",
      tech: "ERP Systems, SAP Ecosystem",
      techList: [
        { name: "ERP Systems", label: "기업 자원 관리 시스템" },
        { name: "SAP Ecosystem", label: "글로벌 기업용 ERP 플랫폼" },
      ],
      description:
        "Deep understanding of business process systems and financial/accounting domain structure management.",
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
      certificates: [
        { name: "TOEFL", grade: "Planned" },
        { name: "OPIC", grade: "Planned" },
      ],
    },
    {
      id: "chinese",
      language: "중국어(Chinese)",
      level: "Beginner",
      certificates: [{ name: "HSK", grade: "Planned" }],
    },
    {
      id: "japanese",
      language: "일본어(Japanese)",
      level: "Beginner",
      certificates: [{ name: "JLPT", grade: "Planned" }],
    },
  ],
  certifications: [
    {
      id: "sqld",
      name: "SQLD",
      status: "취득",
      detail: "Database modeling and SQL performance tuning capabilities.",
    },
    {
      id: "adsp",
      name: "ADsP",
      status: "취득",
      detail: "Data structuring and statistical analysis-based business logic application.",
    },
    {
      id: "cl2",
      name: "컴퓨터활용능력2급",
      status: "취득",
      detail: "Basic spreadsheet and data management capabilities.",
    },
    {
      id: "ipe",
      name: "정보처리기사",
      status: "준비중",
      detail: "Systematization of knowledge across software engineering and enterprise system architecture.",
    },
    {
      id: "bdae",
      name: "빅데이터분석기사",
      status: "준비중",
      detail: "Understanding of large-scale data collection, storage, processing pipelines, and analysis modeling.",
    },
    {
      id: "ca1",
      name: "전산회계1급",
      status: "준비중",
      detail: "Securing deep domain knowledge of corporate accounting systems and business rules.",
    },
    {
      id: "sap-abap",
      name: "SAP Certified Associate - Back-End Developer - ABAP Cloud",
      status: "예정",
      detail: "Acquiring enterprise ERP financial module and business process development capabilities.",
    },
  ],
};
