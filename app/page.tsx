"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import ParticlesBackground from "./ui/particlesBackground";
import { Layers, Bot } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

export default function Home() {
  useEffect(() => {
    const cardLeft: any = document.querySelector(".cardLeft");
    VanillaTilt.init(cardLeft, {
      max: 35,
      startX: -20, // the starting tilt on the Y axis, in degrees.

      speed: 300,
      glare: true,
      "max-glare": 1,
    });

    const cardRight: any = document.querySelector(".cardRight");
    VanillaTilt.init(cardRight, {
      max: 35,
      startX: 20, // the starting tilt on the Y axis, in degrees.

      speed: 300,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  return (
    <main className="h-screen">
      <ParticlesBackground />
      <section className="absolute w-full h-screen flex flex-row justify-center items-center gap-8 ">
        <div className="animate-fade-right animate-ease-in-out">
          <div className="w-[592px] h-[400px] p-4 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#0c192c]">
            <h1 className="text-xl font-bold">Welcome !</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eum nemo doloribus repudiandae ab sapiente quo qui magnam? Est
              tenetur deleniti assumenda dolor sit laudantium? Atque ad magni
              quaerat a!
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <div
            className="
            cardLeft
                flex flex-col items-center
                w-[280px] h-[400px] 
                bg-white bg-opacity-10 
                border-t-2 border-l-2 
                border-solid border-white border-opacity-50 rounded-2xl"
          >
            <Link
              className="relative top-10 flex flex-col items-center"
              href="/chatbot"
            >
              <Bot size={180} />
              Chatbot
            </Link>
          </div>

          <div
            className="
                cardRight
                w-[280px] h-[400px] 
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
          </div>
        </div>
      </section>
    </main>
  );
}
