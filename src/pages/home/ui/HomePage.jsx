import { lazy, Suspense, useEffect } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { homeData } from "@/entities/home/model/homeData";
import "@/app/styles/home.css";

const HeroScene3D = lazy(() => import("./HeroScene3D.jsx"));

function SmartLink({ href, className, children, ariaLabel }) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }) {
  const trackPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--card-x", `${localX}px`);
    event.currentTarget.style.setProperty("--card-y", `${localY}px`);
    event.currentTarget.style.setProperty("--card-rx", `${-(localY / rect.height - 0.5) * 3.2}deg`);
    event.currentTarget.style.setProperty("--card-ry", `${(localX / rect.width - 0.5) * 4.2}deg`);
  };

  const resetPointer = (event) => {
    event.currentTarget.style.setProperty("--card-rx", "0deg");
    event.currentTarget.style.setProperty("--card-ry", "0deg");
  };

  return (
    <article
      className={`home-project-card${project.featured ? " home-project-featured" : ""}`}
      id={`project-${project.id}`}
      data-reveal
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
    >
      <div className="home-project-index" aria-hidden="true">
        {project.index}
      </div>
      <div className="home-project-content">
        <div className="home-project-meta">
          <span>{project.type}</span>
          <span className="home-status">
            <i aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <div className="home-project-heading">
          <h3 data-title={project.title}>{project.title}</h3>
          {project.signal && <p>{project.signal}</p>}
        </div>

        <p className="home-project-summary">{project.summary}</p>

        <div className="home-tag-list" aria-label={`${project.title} 기술`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <details className="home-case-study">
          <summary>
            <span>Case note</span>
            문제와 설계 결정 보기
            <ArrowDownRight aria-hidden="true" />
          </summary>
          <div className="home-case-body">
            <div>
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>Decisions</h4>
              <ul>
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Contribution</h4>
              <p>{project.contribution}</p>
            </div>
          </div>
        </details>

        <div className="home-project-links">
          {project.links.map((link) => (
            <SmartLink
              key={`${project.id}-${link.label}`}
              href={link.href}
              className={link.primary ? "home-link-primary" : "home-link-secondary"}
              ariaLabel={`${project.title} ${link.label}`}
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </SmartLink>
          ))}
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="home-section-heading" data-reveal>
      <h2>{title}</h2>
    </div>
  );
}

export default function HomePage() {
  const { profile, proof, projects, experience, capabilities, notes } = homeData;

  useEffect(() => {
    const root = document.querySelector(".portfolio-home");
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(root.querySelectorAll("[data-reveal]"));

    const updatePointer = (event) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      root.style.setProperty("--scroll-progress", progress);
    };

    let observer;
    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6%" },
      );
      revealItems.forEach((item) => observer.observe(item));
      window.addEventListener("pointermove", updatePointer, { passive: true });
    }

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      observer?.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <div className="portfolio-home">
      <div className="home-scroll-progress" aria-hidden="true" />
      <div className="home-cursor-light" aria-hidden="true" />
      <div className="home-grain" aria-hidden="true" />
      <a className="home-skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>

      <header className="home-header">
        <a className="home-brand" href="#top" aria-label="박도현 포트폴리오 홈">
          <span>PDH</span>
          <i aria-hidden="true" />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#notes">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="home-wiki-link" href="#/wiki">
          <Braces aria-hidden="true" />
          <span>도현위키</span>
        </a>
      </header>

      <main id="main-content">
        <section className="home-hero" id="top">
          <div className="home-hero-copy" data-reveal>
            <p className="home-eyebrow">
              <span>{profile.role}</span>
              {profile.eyebrow}
            </p>
            <h1 data-text={profile.headline}>{profile.headline}</h1>
            <p className="home-introduction">{profile.introduction}</p>
            <div className="home-hero-actions">
              <a className="home-button-primary" href="#project-vibe-unbound">
                VIBE:UNBOUND
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="home-button-secondary" href="#work">
                대표 프로젝트
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="home-resume-link" href={profile.resume} download>
                <Download aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>

          <div
            className="home-hero-system home-hero-3d"
            data-reveal
            role="img"
            aria-label="마우스 움직임에 반응하는 개발자 역량 연결 3D 오브젝트"
          >
            <div className="home-3d-visual" aria-hidden="true">
              <Suspense
                fallback={(
                  <div className="home-3d-fallback">
                    <i />
                    <span>LOADING 3D FIELD</span>
                  </div>
                )}
              >
                <HeroScene3D />
              </Suspense>
            </div>
            <div className="home-3d-frame" aria-hidden="true">
              <span className="home-3d-index">FIELD / 001</span>
              <span className="home-3d-mode">WEBGL · INTERACTIVE</span>
              <div className="home-3d-crosshair"><i /><i /></div>
              <div className="home-3d-caption">
                <strong>DOHYUN.EXE</strong>
                <small>MOVE POINTER TO ROTATE</small>
              </div>
              <span className="home-node node-systems">SYSTEMS</span>
              <span className="home-node node-game">GAME</span>
              <span className="home-node node-ai">AI</span>
              <span className="home-node node-product">PRODUCT</span>
            </div>
          </div>
          <div className="home-scroll-cue" aria-hidden="true">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>

        <div className="home-marquee" aria-hidden="true">
          <div className="home-marquee-track">
            <span>DEVELOPER — SYSTEMS — GAME — AI — PRODUCT — BUILD WHAT MATTERS — </span>
            <span>DEVELOPER — SYSTEMS — GAME — AI — PRODUCT — BUILD WHAT MATTERS — </span>
          </div>
        </div>

        <section className="home-proof" aria-label="핵심 정보">
          {proof.map((item) => (
            <div key={item.label} data-reveal>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="home-section home-work" id="work">
          <SectionHeading title="PROJECTS" />
          <div className="home-project-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="home-section home-capabilities" id="capabilities">
          <SectionHeading title="CAPABILITIES" />
          <div className="home-capability-grid">
            {capabilities.map((item) => (
              <article key={item.number} data-reveal>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.proof}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-experience" id="experience">
          <SectionHeading title="EXPERIENCE" />
          <div className="home-timeline">
            {experience.map((item) => (
              <article key={`${item.period}-${item.title}`} data-reveal>
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <strong>{item.role}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-notes" id="notes">
          <SectionHeading title="WRITING" />
          <div className="home-note-list">
            {notes.map((note, index) => (
              <SmartLink
                key={note.title}
                href={note.href}
                className="home-note-link"
                ariaLabel={note.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{note.label}</small>
                  <strong>{note.title}</strong>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </SmartLink>
            ))}
          </div>
        </section>

        <section className="home-contact" id="contact" data-reveal>
          <h2>CONTACT</h2>
          <a href={profile.email} className="home-contact-mail">
            <Mail aria-hidden="true" />
            badberg2002@gmail.com
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="home-socials" aria-label="외부 프로필">
            <SmartLink href={profile.github} ariaLabel="GitHub">
              <Github aria-hidden="true" />
              GitHub
            </SmartLink>
            <SmartLink href={profile.linkedin} ariaLabel="LinkedIn">
              <Linkedin aria-hidden="true" />
              LinkedIn
            </SmartLink>
            <SmartLink href={profile.blog} ariaLabel="Tistory Blog">
              Blog
              <ArrowUpRight aria-hidden="true" />
            </SmartLink>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <span>Designed &amp; built by Park Do-hyun</span>
        <span>Developer across systems, game, AI and product.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
