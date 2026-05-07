import { Github, Youtube, Linkedin } from "lucide-react";
import { TistoryIcon } from "@/shared/ui/TistoryIcon";
import Dock from "@/shared/ui/Dock";
import FuzzyText from "@/shared/ui/FuzzyText";

export default function ModernContactSection({ profile }) {
  const dockItems = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      onClick: () => window.open(profile.github, "_blank", "noreferrer"),
    },
    {
      icon: <TistoryIcon className="w-6 h-6 fill-current" />,
      label: "Tistory",
      onClick: () => window.open(profile.tistory, "_blank", "noreferrer"),
    },
    {
      icon: <Youtube size={26} />,
      label: "YouTube",
      onClick: () => window.open(profile.youtube, "_blank", "noreferrer"),
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      onClick: () => window.open(profile.linkedin, "_blank", "noreferrer"),
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 aria-label="Contact Me" className="text-4xl md:text-5xl font-light text-white mb-16">
          <FuzzyText
            fontSize="clamp(2.25rem, 4vw, 3rem)"
            fontWeight={700}
            baseIntensity={0.08}
            hoverIntensity={0.22}
            fuzzRange={12}
            fps={30}
            transitionDuration={8}
            gradient={["#ffffff", "#dbeafe", "#c4b5fd"]}
            className="mx-auto block h-auto max-w-full"
          >
            Contact Me
          </FuzzyText>
        </h2>

        <div className="flex justify-center mb-16">
          <Dock 
            items={dockItems}
            panelHeight={72}
            baseItemSize={54}
            magnification={100}
            distance={150}
            spring={{ mass: 0.2, stiffness: 100, damping: 18 }}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-[#a0a0a0] font-light">Or reach out directly at</p>
          <a href={profile.email} className="text-2xl font-semibold text-white hover:text-accent transition-colors">
            {profile.email.replace("mailto:", "")}
          </a>
        </div>
      </div>
    </section>
  );
}
