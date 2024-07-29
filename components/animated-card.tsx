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
      className="flex h-72 w-72 flex-col items-center rounded-2xl border-2 border-solid border-white border-opacity-50 bg-opacity-90 bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d] shadow-lg md:h-80 lg:h-96"
    >
      <Link
        className="flex h-full flex-col items-center justify-center"
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
      className="flex h-72 w-72 flex-col items-center rounded-2xl border-2 border-solid border-white border-opacity-50 bg-opacity-90 bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d] shadow-lg md:h-80 lg:h-96"
    >
      <Link
        className="flex h-full flex-col items-center justify-center"
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
