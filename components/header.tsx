import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-300/10 bg-gradient-to-br from-[#0c192c] via-[#1a273a] to-[#273a4d]/70 px-6 backdrop-blur-md md:px-52">
      <div className="dropdown block md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-ghost text-white"
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
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-md bg-slate-800 p-2 shadow-lg"
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
      <nav className="hidden gap-5 text-white md:flex">
        <Link href="/">Home</Link>
        <Link href="/chat">Chatbot</Link>
        <Link href="/articles">Articles</Link>
      </nav>
    </header>
  );
}
