import ParticlesBackground from "@/components/particles-background";
import { Bot } from "lucide-react";
import { AnimatedCardLeft } from "@/components/animated-card";
import { AnimatedCardRight } from "@/components/animated-card";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d]">
      <ParticlesBackground />
      <section className="w-full min-h-screen flex flex-col justify-center items-center gap-6 p-4 sm:p-6 md:flex-row md:gap-8">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg text-[#0c192c] animate-fade-right animate-ease-in-out transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Welcome!
          </h1>
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-md">
            <Bot className="text-white" size={64} />
          </div>
          <p className="text-base sm:text-lg mb-2 sm:mb-4 text-center">
            Hello, and welcome to our site!
          </p>
          <p className="text-base sm:text-lg text-center">
            You can do two things: you can chat with our Chatbot or you can
            check our latest article.
            <br />
            Enjoy!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 text-white">
          <AnimatedCardLeft />
          <AnimatedCardRight />
        </div>
      </section>
    </main>
  );
}
