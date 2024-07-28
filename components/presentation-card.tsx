import { Bot } from "lucide-react";

export default function PresentationCard() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-96 p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg text-[#0c192c] animate-fade-right animate-ease-in-out transition-transform transform flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
        Welcome!
      </h1>
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-md">
        <Bot className="text-white" size={64} />
      </div>
      <p className="text-base sm:text-lg mb-4 text-center">
        Hello, and welcome to our site!
      </p>
      <div className="text-base sm:text-lg text-center">
        <p className="mb-2">You can do two things:</p>
        <ul className="list-disc list-inside">
          <li>Chat with our Chatbot</li>
          <li>Check our latest article</li>
        </ul>
        <p className="mt-4">Enjoy!</p>
      </div>
    </div>
  );
}
