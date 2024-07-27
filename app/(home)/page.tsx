import ParticlesBackground from "@/components/particlesBackground";
import { AnimatedCardLeft, AnimatedCardRight } from "@/components/AnimatedCard";

export default async function Home() {
  return (
    <main className="min-h-screen w-full">
      <ParticlesBackground />
      <section className="absolute top-16 w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 p-4">
        <div className="w-80 h-80 p-4 bg-white rounded-2xl shadow-2xl shadow-blue-500/20 text-[#0c192c] animate-fade-right animate-ease-in-out">
          <h1 className="text-2xl font-bold">Welcome !</h1>
          <br />

          <p>Hello, and welcome to our site !</p>
          <br />

          <p>
            You can do 2 things : you can chat with our Chatbot or you can check
            our latest article.
            <br />
            Enjoy !
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-white">
          <AnimatedCardLeft />
          <AnimatedCardRight />
        </div>
      </section>
    </main>
  );
}
