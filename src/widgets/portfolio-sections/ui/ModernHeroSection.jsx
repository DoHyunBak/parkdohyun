import ASCIIText from "@/shared/ui/ASCIIText";

export default function ModernHeroSection({ profile }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] px-6 text-center">
      <div className="absolute inset-0 z-10 w-full h-full">
        <ASCIIText
          text={profile.name}
          enableWaves={false}
          asciiFontSize={10}
        />
      </div>
    </section>
  );
}
