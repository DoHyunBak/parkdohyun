import { Youtube, Linkedin } from "lucide-react";
import { TistoryIcon } from "@/shared/ui/TistoryIcon";

export default function CatFooter({ meta }) {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="cat-card rounded-[2rem] px-6 py-8 text-center">
        <p className="text-lg font-black text-[#33271f]">{meta.ownerCredit}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {meta.ownerSite && (
            <a
              href={meta.ownerSite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-[#d8c0a8] bg-white/50 px-4 py-2 text-sm font-bold text-[#8a5a42] transition hover:bg-white/80 hover:text-[#33271f] focus:outline-none focus:ring-2 focus:ring-[#c98b63]/45"
            >
              {meta.ownerSiteLabel ?? meta.ownerSite}
            </a>
          )}
          {meta.ownerTistory && (
            <a
              href={meta.ownerTistory}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d8c0a8] bg-white/50 px-4 py-2 text-sm font-bold text-[#8a5a42] transition hover:bg-white/80 hover:text-[#33271f] focus:outline-none focus:ring-2 focus:ring-[#c98b63]/45"
              title="Tistory"
            >
              <TistoryIcon className="w-4 h-4 fill-current" />
              Tistory
            </a>
          )}
          {meta.ownerYoutube && (
            <a
              href={meta.ownerYoutube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d8c0a8] bg-white/50 px-4 py-2 text-sm font-bold text-[#8a5a42] transition hover:bg-white/80 hover:text-[#33271f] focus:outline-none focus:ring-2 focus:ring-[#c98b63]/45"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
          )}
          {meta.ownerLinkedin && (
            <a
              href={meta.ownerLinkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d8c0a8] bg-white/50 px-4 py-2 text-sm font-bold text-[#8a5a42] transition hover:bg-white/80 hover:text-[#33271f] focus:outline-none focus:ring-2 focus:ring-[#c98b63]/45"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}
        </div>
        <p className="mt-4 text-sm text-[#756252]">{meta.dedication}</p>
      </div>
    </footer>
  );
}
