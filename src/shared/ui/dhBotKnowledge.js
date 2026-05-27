/**
 * Park_Brain — DH Bot Knowledge Base
 * 박도현에 대한 정보를 바탕으로 키워드 매칭 응답을 제공합니다.
 */

export const BOT_NAME = "DH Bot";

/* ────────────────────────────────────────────
   인트로 / 웰컴 메시지
──────────────────────────────────────────── */
export const WELCOME_MESSAGE = {
  text: "안녕하세요! 👋 저는 **DH Bot**이에요.\n박도현에 대해 궁금한 걸 물어보세요.\n스킬, 프로젝트, 경력, 연락처 등 뭐든지요!",
  quickReplies: ["스킬이 뭐예요?", "프로젝트 알려줘", "학교가 어디예요?", "연락하고 싶어요"],
};

/* ────────────────────────────────────────────
   응답 풀 — 각 항목은 { keywords, text, quickReplies? }
──────────────────────────────────────────── */
export const RESPONSES = [
  /* ── 인사 ── */
  {
    keywords: ["안녕", "hello", "hi", "hey", "ㅎㅇ", "반가워", "처음"],
    text: "안녕하세요! 😊 박도현의 포트폴리오 챗봇 DH Bot입니다.\n백엔드 개발자 박도현에 대해 궁금한 점을 편하게 물어보세요!",
    quickReplies: ["스킬이 뭐예요?", "프로젝트 알려줘", "연락하고 싶어요"],
  },

  /* ── 이름 / 소개 ── */
  {
    keywords: ["이름", "누구", "소개", "박도현", "자기소개", "어떤 사람", "who"],
    text: "저는 **박도현(DoHyun Park)**을 대신하는 챗봇이에요! 🤖\n\n박도현은 **엔터프라이즈 백엔드 개발자**로, ERP·SAP 도메인에 특화되어 있습니다. Java와 Spring Boot를 주력으로 사용하며, 기업 시스템의 데이터 흐름과 비즈니스 프로세스를 코드로 구현하는 것을 목표로 합니다.",
    quickReplies: ["스킬이 뭐예요?", "학교가 어디예요?", "프로젝트 보고 싶어요"],
  },

  /* ── 학교 / 학력 ── */
  {
    keywords: ["학교", "대학", "전공", "학력", "education", "한양", "재학", "졸업", "학부"],
    text: "📚 **학력 정보**\n\n- **학교**: 한양대학교\n- **전공**: ICT융합학부\n- **학위**: 공학사 (예정)\n- **재학 기간**: 2021.03 ~ 2027.03\n\n소프트웨어 엔지니어링, 데이터 관리, 엔터프라이즈 시스템 아키텍처에 집중하고 있습니다.",
    quickReplies: ["자격증도 있나요?", "스킬이 뭐예요?"],
  },

  /* ── 스킬 / 기술 스택 ── */
  {
    keywords: ["스킬", "기술", "스택", "skill", "tech", "언어", "프레임워크", "잘하는", "주력", "사용"],
    text: "⚙️ **기술 스택**\n\n🔹 **Backend**\nJava · Spring Boot · JPA / Hibernate\n\n🔹 **Database**\nMySQL · SQL · DB 모델링\n\n🔹 **Infrastructure**\nDocker · AWS EC2 · GitHub · CI/CD · Flyway\n\n🔹 **Enterprise / SAP**\nERP 시스템 · SAP 에코시스템\n\n엔터프라이즈 환경에서 REST API 설계, 대용량 트랜잭션 관리, 비즈니스 로직 구조화를 주로 합니다.",
    quickReplies: ["Java 얼마나 잘해요?", "SAP 경험이 있나요?", "프로젝트 알려줘"],
  },

  /* ── Java 심층 ── */
  {
    keywords: ["java", "자바", "spring", "스프링", "jpa", "hibernate"],
    text: "☕ **Java / Spring 스택**\n\nJava와 Spring Boot를 주력 기술로 사용합니다.\nJPA / Hibernate로 데이터베이스 ORM을 다루고, 트랜잭션 경계를 명확히 하는 API 설계를 중요하게 생각합니다.\n\n\"복잡한 추상화보다 읽기 좋은 서비스 로직\"을 선호합니다 💡",
    quickReplies: ["프로젝트에서 어떻게 썼나요?", "다른 스킬도 알려줘"],
  },

  /* ── SAP / ERP ── */
  {
    keywords: ["sap", "erp", "엔터프라이즈", "enterprise", "abap", "기업"],
    text: "🏢 **SAP / ERP 관심 분야**\n\n기업이 어떻게 기술로 운영되는지에 관심이 많습니다.\n\n- ERP 시스템 및 SAP 에코시스템 학습 중\n- **SAP Certified Associate - ABAP Cloud** 자격증 준비 예정\n- 전산회계 1급 준비를 통해 기업 회계 도메인 이해도 향상 중\n\n장기적으로는 SAP 기반 비즈니스 플랫폼을 설계·관리하는 엔지니어가 목표입니다!",
    quickReplies: ["자격증 뭐 있어요?", "프로젝트 알려줘"],
  },

  /* ── AWS / 인프라 ── */
  {
    keywords: ["aws", "docker", "cloud", "클라우드", "인프라", "배포", "ci/cd", "flyway"],
    text: "☁️ **인프라 & 클라우드**\n\n- **AWS EC2**로 서버 운영 경험\n- **Docker**로 컨테이너 기반 배포\n- **Flyway**를 이용한 DB 마이그레이션 관리\n- **GitHub Actions** 기반 CI/CD 파이프라인 구성\n\nDB 스키마와 마이그레이션 이력을 제품 코드의 일부로 관리하는 방식을 선호합니다.",
    quickReplies: ["프로젝트에서 어떻게 썼나요?", "다른 스킬도 알려줘"],
  },

  /* ── 프로젝트 전체 목록 ── */
  {
    keywords: ["프로젝트", "project", "만든것", "포트폴리오", "작업물", "개발한"],
    text: "🗂️ **프로젝트 목록** (총 3개)\n\n1. **대학물품관리시스템** (PRJ-001)\n   학내 자산 관리를 디지털화한 시스템\n\n2. **금연쉼터** (PRJ-002)\n   금연 도전자 커뮤니티 모바일 앱\n\n3. **키즈카페 로봇** (PRJ-003)\n   Temi 로봇 + AI 챗봇 연동 서비스 자동화\n\n각 프로젝트에 대해 자세히 알고 싶으면 물어보세요!",
    quickReplies: ["물품관리 자세히 알려줘", "금연쉼터 알려줘", "키즈카페 로봇 알려줘"],
  },

  /* ── 프로젝트 1: 대학물품관리시스템 ── */
  {
    keywords: ["물품", "자산", "usto", "대학물품", "물품관리", "eam", "itcen"],
    text: "📦 **대학물품관리시스템 (PRJ-001)**\n\n**도메인**: 대학 자산 관리\n**협력**: ITCEN Global 산학협력\n\n**문제**: 부서별 물품 관리가 흩어져 있어 소유자·상태·이력 추적이 어려웠음\n\n**해결**: REST API + 관계형 DB 기준으로 물품 신청·배부·자산 정보 통합\n\n**결과**: EAM 아키텍처 도입으로 자산 추적 체계화\n\n**기술 스택**: Java · Spring Boot · JPA · MySQL · AWS · Docker · Flyway · Hexagonal Architecture\n\n🔗 [GitHub](https://github.com/U-sto/U-sto_BE) | [서비스](https://u-sto-fe.vercel.app/)",
    quickReplies: ["다른 프로젝트도 알려줘", "스킬이 뭐예요?"],
  },

  /* ── 프로젝트 2: 금연쉼터 ── */
  {
    keywords: ["금연", "smockout", "커뮤니티", "모바일", "flutter", "앱"],
    text: "🚭 **금연쉼터 (PRJ-002)**\n\n**도메인**: 모바일 커뮤니티 앱\n\n**문제**: 금연을 혼자 진행하면 동기 유지가 어렵고 이탈 가능성이 높음\n\n**해결**: 사용자가 진행 상황을 공유하고 서로 피드백하는 커뮤니티 구조 설계\n\n**결과**: 금연 목표를 지속적으로 응원받을 수 있는 사용 흐름 구성\n\n**기술 스택**: Flutter · Spring Boot · MySQL · Docker · AWS · Flyway\n\n🔗 [GitHub](https://github.com/DoHyunBak/SO_FE) | [서비스](https://smockout.vercel.app/)",
    quickReplies: ["다른 프로젝트도 알려줘", "Flutter도 할 수 있어요?"],
  },

  /* ── Flutter 관련 ── */
  {
    keywords: ["flutter", "다트", "dart", "모바일앱", "앱개발", "프론트엔드", "frontend"],
    text: "📱 **Flutter / 프론트엔드**\n\n금연쉼터 프로젝트에서 Flutter로 모바일 앱 개발을 담당했습니다.\n\n다만, 박도현의 주력은 **백엔드(Spring Boot)**이며, Flutter는 풀스택 경험을 위해 활용한 기술입니다. 프론트엔드보다는 API 설계와 데이터 흐름에 더 깊이 집중하고 있어요!",
    quickReplies: ["주력 스킬이 뭐예요?", "다른 프로젝트도 알려줘"],
  },

  /* ── 프로젝트 3: 키즈카페 로봇 ── */
  {
    keywords: ["키즈", "로봇", "temi", "kids", "챗봇연동", "라즈베리", "센서", "iot"],
    text: "🤖 **키즈카페 로봇 (PRJ-003)**\n\n**도메인**: 로봇 서비스 자동화\n\n**문제**: 로봇·센서·서비스 데이터가 분리되면 고객 응대 흐름이 끊기기 쉬움\n\n**해결**: Temi 로봇과 백엔드 API를 연결, 응답 흐름 표준화\n\n**결과**: 키즈카페 환경에서 고객 안내와 데이터 연동 자동화\n\n**기술 스택**: Spring Boot · MySQL · Temi Robot · Raspberry Pi · Sensor · AI Chatbot\n\n🔗 [GitHub](https://github.com/Kids-Friends)",
    quickReplies: ["다른 프로젝트도 알려줘", "연락하고 싶어요"],
  },

  /* ── 자격증 ── */
  {
    keywords: ["자격증", "certification", "sqld", "adsp", "정보처리", "빅데이터", "전산회계", "컴활"],
    text: "🏅 **자격증 현황**\n\n✅ **취득 완료**\n- SQLD (SQL 개발자)\n- ADsP (데이터 분석 준전문가)\n- 컴퓨터활용능력 2급\n\n🔄 **준비 중**\n- 정보처리기사\n- 빅데이터분석기사\n- 전산회계 1급\n\n📋 **예정**\n- SAP Certified Associate - ABAP Cloud",
    quickReplies: ["스킬이 뭐예요?", "학교가 어디예요?"],
  },

  /* ── 언어 능력 ── */
  {
    keywords: ["언어", "영어", "중국어", "일본어", "toefl", "opic", "hsk", "jlpt", "외국어"],
    text: "🌏 **언어 능력**\n\n- **한국어**: Native (모국어)\n- **영어**: Intermediate (TOEFL · OPIC 준비 예정)\n- **중국어**: Beginner (HSK 준비 예정)\n- **일본어**: Beginner (JLPT 준비 예정)\n\n다국어 자격증을 통해 글로벌 엔터프라이즈 환경에서의 커리어를 준비 중입니다!",
    quickReplies: ["자격증 뭐 있어요?", "연락하고 싶어요"],
  },

  /* ── 비전 / 목표 ── */
  {
    keywords: ["목표", "비전", "vision", "꿈", "장래", "커리어", "앞으로", "미래", "방향"],
    text: "🎯 **커리어 비전**\n\n박도현의 장기 목표는 **조직의 기술 핵심을 책임지는 엔지니어**가 되는 것입니다.\n\n- 엔터프라이즈 백엔드 아키텍처 설계 및 관리\n- ERP 시스템과 SAP 기반 비즈니스 플랫폼 구축\n- 단순한 기능 개발을 넘어, 기업이 기술로 운영되는 방식 이해\n\n\"화면이 아닌 비즈니스 규칙을 중심으로 API를 설계합니다.\" 💡",
    quickReplies: ["스킬이 뭐예요?", "연락하고 싶어요"],
  },

  /* ── 연락처 ── */
  {
    keywords: ["연락", "이메일", "email", "contact", "깃허브", "github", "링크드인", "linkedin", "티스토리", "블로그", "유튜브"],
    text: "📬 **연락처 & 채널**\n\n- 📧 **Email**: badberg2002@gmail.com\n- 🐙 **GitHub**: [github.com/DoHyunBak](https://github.com/DoHyunBak)\n- 💼 **LinkedIn**: [linkedin.com/in/dohyunbak](https://linkedin.com/in/dohyunbak)\n- 📝 **Blog (Tistory)**: [parkdohyun.tistory.com](https://parkdohyun.tistory.com/)\n- 🎬 **YouTube**: [@Mr.Share_Man](https://www.youtube.com/@Mr.Share_Man)\n\n채용 문의, 협업 제안, 커피챗 모두 환영합니다! ☕",
    quickReplies: ["어떤 사람이에요?", "프로젝트 보고 싶어요"],
  },

  /* ── 협업 / 채용 ── */
  {
    keywords: ["채용", "hire", "협업", "collaboration", "팀", "같이", "함께", "인턴", "신입", "취업"],
    text: "🤝 **협업 & 채용 문의**\n\n박도현은 현재 새로운 기회에 열려 있습니다!\n\n관심 있으신 분들은 아래로 연락해 주세요:\n📧 **badberg2002@gmail.com**\n\n특히 **엔터프라이즈 시스템, ERP/SAP 도메인, 백엔드 API** 관련 포지션에 관심이 많습니다.",
    quickReplies: ["GitHub 보고 싶어요", "스킬이 뭐예요?"],
  },

  /* ── 철학 / 개발 스타일 ── */
  {
    keywords: ["철학", "스타일", "방식", "코드", "개발철학", "원칙", "지향", "중요하게"],
    text: "💭 **개발 철학**\n\n박도현이 중요하게 생각하는 것들:\n\n1. **화면이 아닌 비즈니스 규칙** 중심으로 API 설계\n2. **트랜잭션 경계**를 명확히 하고 테스트 가능한 구조 유지\n3. **복잡한 추상화보다 읽기 좋은 서비스 로직** 선호\n4. **DB 스키마와 마이그레이션 이력**을 제품 코드의 일부로 관리\n\n실제 비즈니스 운영을 지원하는 백엔드 시스템에 집중합니다! 🎯",
    quickReplies: ["스킬이 뭐예요?", "프로젝트 알려줘"],
  },
];

/* ── fallback ── */
export const FALLBACK_RESPONSES = [
  "죄송해요, 그 질문은 잘 모르겠어요 😅\n스킬, 프로젝트, 학력, 자격증, 연락처에 대해 물어봐 주세요!",
  "흠, 아직 그 부분은 제 지식에 없어요 🤔\n다른 걸 물어봐 주시겠어요?",
  "그건 제가 잘 모르는 영역이에요 😊\n박도현의 기술 스택이나 프로젝트에 대해 물어보면 잘 답할 수 있어요!",
];

export const QUICK_REPLY_HINTS = [
  "스킬이 뭐예요?",
  "프로젝트 알려줘",
  "자격증 뭐 있어요?",
  "연락하고 싶어요",
];
