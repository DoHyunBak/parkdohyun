import {
  BadgeInfo,
  CakeSlice,
  Coffee,
  Globe2,
  Heart,
  Home,
  PawPrint,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import MotionSection, { MotionCard } from "./MotionSection";

const detailIcons = {
  paw: PawPrint,
  cake: CakeSlice,
  badge: BadgeInfo,
  user: UserRound,
  sparkles: Sparkles,
  heart: Heart,
  coffee: Coffee,
  home: Home,
  stethoscope: Stethoscope,
  globe: Globe2,
};

export default function ProfileSection({ profile }) {
  return (
    <MotionSection
      id="cat-profile"
      kicker="Profile"
      title={`${profile.name} 기본 정보`}
      description="작은 습관과 취향까지 포트폴리오처럼 정리한 프로필 카드입니다."
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.details.map((item, index) => {
          const Icon = detailIcons[item.icon] ?? PawPrint;

          return (
            <MotionCard key={item.id} className="cat-card rounded-3xl p-5" delay={index * 0.025}>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f7e4d2] text-[#9a5f42]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#907761]">{item.label}</p>
                  <p className="mt-1 text-lg font-black leading-6 text-[#33271f]">{item.value}</p>
                </div>
              </div>
            </MotionCard>
          );
        })}
      </div>
    </MotionSection>
  );
}
