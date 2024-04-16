import Link from "next/link";
import Tilt from "./vanilla-tilt";
import { Layers, Bot } from "lucide-react";

export function AnimatedCardLeft() {
  const options = {
    max: 35,
    startX: -20, // the starting tilt on the Y axis, in degrees.

    speed: 300,
    glare: true,
    "max-glare": 1,
  };
  return (
    <Tilt
      options={options}
      className="flex flex-col items-center w-72 h-64 md:h-96
        bg-white bg-opacity-10 
        border-t-2 border-l-2 
        border-solid border-white border-opacity-50 rounded-2xl"
    >
      <Link className="relative top-10 flex flex-col items-center" href="/chat">
        <Bot size={180} />
        Chatbot
      </Link>
    </Tilt>
  );
}

export function AnimatedCardRight() {
  const option = {
    max: 35,
    startX: 20, // the starting tilt on the Y axis, in degrees.

    speed: 300,
    glare: true,
    "max-glare": 1,
  };
  return (
    <Tilt
      options={option}
      className=" flex flex-col items-center w-72 h-64 md:h-96 
      bg-white bg-opacity-10 
        border-t-2 border-r-2 
        border-solid border-white border-opacity-50 rounded-2xl"
    >
      <Link
        className="relative top-10 flex flex-col items-center"
        href="/articles"
      >
        <Layers size={180} />
        Articles scientifiques
      </Link>
    </Tilt>
  );
}
