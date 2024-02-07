"use client";

import { Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const useTimedState = (state: unknown, delay = 2000) => {
  const [timedState, setTimedState] = useState(state);

  const lastUpdateRef = useRef(Date.now());

  useEffect(() => {
    if (Date.now() - lastUpdateRef.current > delay) {
      setTimedState(state);
      lastUpdateRef.current = Date.now();
      return;
    }

    const timeout = setTimeout(() => {
      setTimedState(state);
      lastUpdateRef.current = Date.now();
    }, delay - (Date.now() - lastUpdateRef.current));

    return () => clearTimeout(timeout);
  }, [state, delay]);

  return timedState;
};

export default function Home() {
  const [htmlCode, setHtmlCode] = useState("");
  const timedHtmlCode = useTimedState(htmlCode, 4000);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    const formData = new FormData(event.currentTarget);

    const prompt = formData.get("prompt") as string;

    setLoading(true);
    setHtmlCode("");

    const result = await fetch("api/tailwind", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const body = result.body;

    if (!body) {
      alert("Something went wrong");
      return;
    }

    const reader = body.getReader();

    const readChunck = async () => {
      const { done, value } = await reader.read();

      if (done) {
        setLoading(false);
        return;
      }
      const chunck = new TextDecoder().decode(value);
      setHtmlCode((prev) => prev + chunck);
      await readChunck();
    };
    await readChunck();
  };

  return (
    <main className="h-full relative">
      {loading ? (
        <div className="absolute top-36 left-0 right-0 flex items-center justify-center">
          <progress className="progress progress-accent w-56"></progress>
        </div>
      ) : null}

      {htmlCode ? (
        <div className="relative h-full left-0 right-0 top-36 flex items-center justify-center">
          <iframe
            className="w-full h-full"
            srcDoc={`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Code - pen TailwindCSS</title>
            <script src ="https://cdn.tailwindcss.com"></script>

        </head>
        <style>
          body{
            background-color : #0c192c
          }
        </style>
        <body>
            ${timedHtmlCode}
        </body>
        </html>`}
          />
        </div>
      ) : null}

      <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center">
        <div className="p-4 bg-base-200 max-w-lg w-full rounded-lg shadow-xl">
          <div
            className="max-w-full overflow-auto flex flex-col gap-1"
            style={{ maxHeight: 150 }}
          ></div>

          <form onSubmit={handleSubmit}>
            <fieldset className="flex gap-4 items-start">
              <textarea
                name="prompt"
                className="w-full textarea textarea-primary"
              />
              <button className="btn btn-primary" type="submit">
                <Sparkles size={20} />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
