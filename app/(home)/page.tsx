import ParticlesBackground from "@/components/particles-background";
import { AnimatedCardLeft } from "@/components/animated-card";
import { AnimatedCardRight } from "@/components/animated-card";
import PresentationCard from "@/components/presentation-card";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-center bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d]">
      {<ParticlesBackground />}

      <div className="flex w-full items-center justify-center gap-6 py-12 text-white max-lg:flex-col sm:py-16">
        <PresentationCard />
        <AnimatedCardLeft />
        <AnimatedCardRight />
      </div>
    </main>
  );
}
