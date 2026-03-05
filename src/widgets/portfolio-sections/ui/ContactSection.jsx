import { Github, Linkedin, Mail } from "lucide-react";

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
          <a
            href={`mailto:${profile.email}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition-colors hover:bg-zinc-200 sm:w-auto"
          >
            <Mail className="h-5 w-5" /> Email
          </a>
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
