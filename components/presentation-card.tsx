import { Bot } from "lucide-react";

export default function PresentationCard() {
  return (
    <div className="flex h-96 w-full max-w-xs transform animate-fade-right flex-col items-center rounded-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 text-[#0c192c] shadow-lg transition-transform animate-ease-in-out sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <h1 className="mb-6 text-2xl font-extrabold sm:text-3xl md:text-4xl">
        Welcome!
      </h1>
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-md sm:h-20 sm:w-20 md:h-24 md:w-24">
        <Bot className="text-white" size={64} />
      </div>
      <p className="mb-4 text-center text-base sm:text-lg">
        Hello, and welcome to our site!
      </p>
      <div className="text-center text-base sm:text-lg">
        <p className="mb-2">You can do two things:</p>
        <ul className="list-inside list-disc">
          <li>Chat with our Chatbot</li>
          <li>Check our latest article</li>
        </ul>
        <p className="mt-4">Enjoy!</p>
      </div>
    </div>
  );
}
