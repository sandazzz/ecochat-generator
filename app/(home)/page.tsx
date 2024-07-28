import ParticlesBackground from "@/components/particles-background";
import { AnimatedCardLeft } from "@/components/animated-card";
import { AnimatedCardRight } from "@/components/animated-card";
import PresentationCard from "@/components/presentation-card";

export default function Home() {
  return (
    <main
      className=" min-h-screen w-full flex justify-center
        bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d]"
    >
      {<ParticlesBackground />}

      <div className="w-full flex max-lg:flex-col gap-6 justify-center items-center py-12 sm:py-16 text-white">
        <PresentationCard />
        <AnimatedCardLeft />
        <AnimatedCardRight />
      </div>
    </main>
  );
}
