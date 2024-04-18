"use client";

import { useState } from "react";
import { CornerDownLeft } from "lucide-react";

export default function Chat() {
  const [chat, setChat] = useState("");
  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;

    const formData = new FormData(event.currentTarget);

    const prompt = formData.get("prompt") as string;

    const result = await fetch("api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const json = await result.json();

    setChat(json.chat)
  };

  return (
    <main className="h-full relative">
      <div className="absolute top-20 left-0 right-0 flex items-center justify-center">
        <progress className=" progress progress-accent w-56" />
      </div>
      
      <h1 className="text-lg">{chat}</h1>

      <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center">
        <form
          className="p-4 bg-base-200 max-w-lg w-full"
          onSubmit={handlesubmit}
        >
          <fieldset className="flex gap-4 items-start">
            <textarea
              name="prompt"
              className="w-full textarea textarea-primary"
            />
            <button className="btn btn-outline" type="submit">
              <CornerDownLeft size={16} />
            </button>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
