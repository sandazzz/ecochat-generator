import Link from "next/link";
import Tilt from "@/components/vanilla-tilt";
import { Bot } from "lucide-react";
import { Layers } from "lucide-react";

export function AnimatedCardLeft() {
  const options = {
    max: 10,
    startX: -10,
    speed: 200,
    glare: true,
   
  };
  return (
    <Tilt
      options={options}
      className="flex flex-col items-center w-72 h-72 md:h-80 lg:h-96 bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d] bg-opacity-90 border-t-2 border-l-2 border-solid border-white border-opacity-50 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
    >
      <Link
        className="flex flex-col items-center justify-center h-full"
        href="/chat"
      >
        <Bot size={80} className="text-white" />
        <span className="mt-4 text-xl font-semibold text-white">Chatbot</span>
      </Link>
    </Tilt>
  );
}

export function AnimatedCardRight() {
  const options = {
    max: 10,
    startX: 10,
    speed: 200,
    glare: true,
  };
  return (
    <Tilt
      options={options}
      className="flex flex-col items-center w-72 h-72 md:h-80 lg:h-96 bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d] bg-opacity-90 border-t-2 border-r-2 border-solid border-white border-opacity-50 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
    >
      <Link
        className="flex flex-col items-center justify-center h-full"
        href="/articles"
      >
        <Layers size={80} className="text-white" />
        <span className="mt-4 text-xl font-semibold text-white">
          Articles scientifiques
        </span>
      </Link>
    </Tilt>
  );
}
