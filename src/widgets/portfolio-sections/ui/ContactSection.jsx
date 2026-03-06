import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactSection({ profile }) {
  return (
    <section id="contact" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-3xl space-y-10 text-center">
        <div>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white">Let's build reliable systems.</h2>
          <p className="text-base text-zinc-400 font-mono">
            Looking to join a team that innovates and manages business processes through technology.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <div className="group relative w-full sm:w-auto">
            <a
              href={profile.email}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition-colors hover:bg-zinc-200"
            >
              <Mail className="h-5 w-5" /> Email
            </a>

            <div className="pointer-events-none absolute -bottom-16 left-1/2 z-10 w-max -translate-x-1/2 rounded-md bg-zinc-900 px-3 py-2 text-xs font-mono text-zinc-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              <div>{profile?.email?.replace?.("mailto:", "") || "이메일 정보 없음"}</div>
            </div>
          </div>

          <div className="group relative w-full sm:w-auto">
            <a
              href={profile.phone}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition-colors hover:bg-zinc-200"
            >
              <Phone className="h-5 w-5" /> Phone
            </a>

            <div className="pointer-events-none absolute -bottom-16 left-1/2 z-10 w-max -translate-x-1/2 rounded-md bg-zinc-900 px-3 py-2 text-xs font-mono text-zinc-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              <div>{profile?.phone?.replace?.("tel:", "") || "연락처 정보 없음"}</div>
            </div>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 font-bold text-white transition-colors hover:bg-zinc-800 sm:w-auto"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 font-bold text-white transition-colors hover:bg-zinc-800 sm:w-auto"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
