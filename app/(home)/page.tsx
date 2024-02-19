"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import ParticlesBackground from "@/app/ui/particlesBackground";
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
    <main className="h-screen w-full">
      <ParticlesBackground />
      <section className="absolute top-32 
        w-full h-screen md:h-3/4
        flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-80 h-96 p-4 bg-white rounded-2xl shadow-2xl shadow-blue-500/20 text-[#0c192c] animate-fade-right animate-ease-in-out">
          <h1 className="text-xl font-bold">Welcome !</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
            nemo doloribus repudiandae ab sapiente quo qui magnam? Est tenetur
            deleniti assumenda dolor sit laudantium? Atque ad magni quaerat a!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
            nemo doloribus repudiandae ab sapiente quo qui magnam?
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 text-white">
          <div
            className="
            cardLeft
                flex flex-col items-center
                w-72 h-64 md:h-96
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
                w-72 h-64 md:h-96
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
