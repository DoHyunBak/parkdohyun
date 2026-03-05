export const portfolioData = {
  profile: {
    name: "박도현",
    role: "Enterprise Backend Engineer",
    headline: "Future-Oriented\nBackend Developer.",
    subHeadline:
      "Focusing on how technology supports real business operations. I am a backend engineer dedicated to enterprise system management, encompassing data flows and business processes.",
    email: "your-email@example.com",
    github: "https://github.com/your-id",
    linkedin: "https://linkedin.com/in/your-id",
    resumeLink: "#",
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
      title: "한양대학교 ERICA",
      role: "ICT융합학부",
      description:
        "Focusing on software engineering, data management, and enterprise system architectures. Building a foundation in computer science and real-world problem solving through technology.",
    },
  ],
  projects: [
    {
      id: "p1",
      title: "대학물품관리시스템",
      tags: ["Java", "Spring Boot", "AWS", "MySQL", "Docker", "Flyway"],
      problem:
        "Managing large-scale organizational assets across departments lacks centralized ownership and lifecycle tracking, similar to enterprise challenges.",
      solution:
        "Designed a backend system for structured asset data management, tracking asset lifecycles, and supporting organizational allocation, inspired by ERP/SAP asset modules.",
      result:
        "Established a simplified EAM architecture in collaboration with ITCEN Global, providing a reliable technical foundation for business operations.",
      role: "Backend Development & Database Administration (DBA)",
      links: {
        github: "https://github.com/your-repo",
        docs: "https://notion.so/your-docs",
      },
      architecture: [
        "Client Application",
        "REST API (Spring Boot)",
        "JPA / Hibernate",
        "MySQL Database",
      ],
    },
    {
      id: "p2",
      title: "스마트 전자결재 시스템 (예정)",
      tags: ["Java", "Spring Boot", "JPA", "ERP System"],
      problem:
        "Scalability limits due to hardcoded business processes and complex approval lines within the organization.",
      solution:
        "Designed a dynamic approval routing and workflow engine backend API using Spring Boot.",
      result:
        "Established an architecture that enables business process automation and flexible approval line management.",
      role: "Backend Architecture & API Design",
      links: {
        github: "#",
        docs: "#",
      },
    },
    {
      id: "p3",
      title: "전사적 데이터 통합 플랫폼 (예정)",
      tags: ["Spring Boot", "MySQL", "SAP Ecosystem"],
      problem:
        "Data silo phenomenon and inconsistency between internal individual systems and external business platforms.",
      solution:
        "Implemented scheduling-based synchronization and defined standardized RESTful API specs for ERP/SAP data integration.",
      result:
        "Secured enterprise-wide data reliability and centralized management of business data flow.",
      role: "Data Integration & Backend Development",
      links: {
        docs: "#",
      },
    },
  ],
  skills: [
    {
      category: "Backend",
      tech: "Java, Spring Boot, JPA / Hibernate",
      description:
        "REST API design, large-scale transaction management, and business logic structuring in enterprise environments.",
    },
    {
      category: "Database",
      tech: "MySQL, SQL, Database Modeling",
      description:
        "Schema design ensuring data integrity and SQL query optimization management.",
    },
    {
      category: "Infrastructure",
      tech: "Docker, AWS EC2, GitHub, CI/CD, Flyway",
      description:
        "Reliable system deployment, database migration operations, and API documentation via Swagger.",
    },
    {
      category: "Enterprise / SAP",
      tech: "ERP Systems, SAP Ecosystem",
      description:
        "Deep understanding of business process systems and financial/accounting domain structure management.",
    },
  ],
  certifications: [
    {
      status: "취득",
      name: "SQLD",
      detail: "Database modeling and SQL performance tuning capabilities.",
    },
    {
      status: "취득",
      name: "ADsP",
      detail: "Data structuring and statistical analysis-based business logic application.",
    },
    {
      status: "취득",
      name: "컴퓨터활용능력 2급",
      detail: "Basic spreadsheet and data management capabilities.",
    },
    {
      status: "준비중",
      name: "정보처리기사",
      detail:
        "Systematization of knowledge across software engineering and enterprise system architecture.",
    },
    {
      status: "준비중",
      name: "빅데이터분석기사",
      detail:
        "Understanding of large-scale data collection, storage, processing pipelines, and analysis modeling.",
    },
    {
      status: "예정",
      name: "SAP ABAP / SAP FI",
      detail:
        "Acquiring enterprise ERP financial module and business process development capabilities.",
    },
    {
      status: "예정",
      name: "전산세무 2급",
      detail:
        "Acquiring practical tax accounting and corporate financial reporting capabilities.",
    },
    {
      status: "예정",
      name: "전산회계 1급",
      detail:
        "Securing deep domain knowledge of corporate accounting systems and business rules.",
    },
  ],
};
