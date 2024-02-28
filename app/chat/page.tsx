"use client";

import { CornerDownLeft } from "lucide-react";

export default function Chat() {
    const handlesubmit =() => {
        console.log("coucou")
    }
  return (
    <main className="h-full relative">
      <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center">
        <div className="p-3 bg-base-200 max-w-2xl w-full rounded-lg shadow-xl">
          <form onSubmit={handlesubmit}>
            <fieldset className="flex gap-4 items-start">
              <textarea
                name="prompt"
                className="w-full textarea textarea-bordered"
              />
              <button className="btn btn-outline" type="submit">
                <CornerDownLeft size={16} />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
