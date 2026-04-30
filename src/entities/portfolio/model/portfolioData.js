export const portfolioData = {
  profile: {
    name: "박도현",
    role: "Enterprise Backend Developer",
    headline: "Portfolio of DoHyun Park",
    subHeadline:
      "Focusing on how technology supports real business operations. \nI am a backend engineer dedicated to enterprise system management, \nencompassing data flows and business processes.",
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
      status: "active",
      tags: ["Java", "Spring Boot", "AWS", "MySQL","RDS","Docker", "Flyway","Hexagonal Architecture","Open API"],
      problem:
        "Managing large-scale organizational assets across departments lacks centralized ownership and lifecycle tracking, similar to enterprise challenges.",
      solution: 
        "Designed a backend system for structured asset data management, tracking asset lifecycles, and supporting organizational allocation, inspired by ERP/SAP asset modules.",
      result:   
        "Established a simplified EAM architecture in collaboration with ITCEN Global, providing a reliable technical foundation for business operations.",
      role: "Backend Development(Spring) & Database Administration (DBA) & Cloud Engineering(AWS)",
      links: {
        github: "https://github.com/U-sto/U-sto_BE",
        docs: "http://13.124.10.41:8080/swagger-ui/index.html#/",
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
        github: "https://github.com/DoHyunBak/my_app",
        docs: "https://smockout.vercel.app/",
      },
    },
    {
      id: "kids-friends",
      title: "키즈카페 로봇",
      status: "active",
      tags: ["Spring Boot", "MySQL", "Temi Robot", "Raspberry Pi", "Sensor Integration","AI Chatbot"],
      problem:
        "Data silo phenomenon and inconsistency between internal individual systems and external business platforms.",
      solution:
        "Implemented scheduling-based synchronization and defined standardized RESTful API specs for ERP/SAP data integration.",
      result:
        "Secured enterprise-wide data reliability and centralized management of business data flow.",
      role: "Data Integration & Backend Development",
      links: {
        github: "https://github.com/Kids-Friends",
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
  languages: [
    {
      language: "한국어(Korean)",
      level: "Native",
      certificates: [{ name: "-", grade: "-" }],
    },
    {
      language: "영어(English)",
      level: "Intermediate",
      certificates: [
        { name: "TOEFL", grade: "Planned" },
        { name: "OPIC", grade: "Planned" },
      ],
    },
    {
      language: "중국어(Chinese)",
      level: "Beginner",
      certificates: [{ name: "HSK", grade: "Planned" }],
    },
    {
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
