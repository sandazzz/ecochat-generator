import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d]/70 backdrop-blur-md border-b border-slate-300/10 w-full h-16 px-6 md:px-52 flex items-center justify-between">
      <div className="dropdown block md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-slate-800 rounded-md w-52"
        >
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/chat" className="text-white">
              Chatbot
            </Link>
          </li>
          <li>
            <Link href="/articles" className="text-white">
              Articles
            </Link>
          </li>
        </ul>
      </div>
      <nav className="hidden md:flex gap-5 text-white">
        <Link href="/">Home</Link>
        <Link href="/chat">Chatbot</Link>
        <Link href="/articles">Articles</Link>
      </nav>
    </header>
  );
}
