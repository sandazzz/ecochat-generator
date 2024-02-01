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
};

export default function Chatbot() {
  /*const [htmlCode, setHtmlCode] = useState("");
  const timedHtmlCode = useTimedState(htmlCode, 1000)
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    const formData = new FormData(event.currentTarget);

    const prompt = formData.get("prompt") as string;
    setLoading(true);

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

    const readChunk = async () => {
      const { done, value } = await reader.read();

      if (!done) {
        setLoading(false);
        setHtmlCode("");
        return;
      }

      const chunk = new TextDecoder().decode(value);
      setHtmlCode((prev) => prev + chunk);
      await chunk;
    };
    await readChunk;
  };*/
  return (
    /*<main className="h-full relative">
      {loading ? (
        <div className="absolute top-4 left-0 right-0 flex items-center justify-center">
          <progress className="progress w-56" />
        </div>
      ) : null}

      <pre>{htmlCode}</pre>
      {htmlCode ? (
        <iframe
          className="h-full w-full"
          srcDoc={`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Code - pen TailwindCSS</title>
          <script src ="https://cdn.tailwindcss.com"></script>
          <style>
          body {
            padding : 8px
          }
          </style>
      </head>
      <body>
          ${htmlCode}
      </body>
      </html>`}
        />
      ) : null}


      <div className="fixed bottom-4 right-0 left-0 flex items-center justify-center">
        <form
          className="p-4 bg-base-200 max-w-lg w-full rounded-lg shadow-xl"
          onSubmit={handleSubmit}
        >
          <fieldset className="flex gap-4 items-start">
            <textarea
              name="prompt"
              className="textarea textarea-primary w-full"
            />
            <button className="btn btn-primary btn-sm" type="submit">
              <Sparkles size={20} />
            </button>
          </fieldset>
        </form>
      </div>
    </main>*/
    <div></div>
  );
}
