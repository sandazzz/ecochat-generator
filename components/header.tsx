import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass w-full h-16 px-6 md:px-52 flex items-center">
      <div className="dropdown block md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/chat">Chatbot</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </div>
      <nav className="flex gap-5 text-white">
        <Link href="/">Home</Link>
        <Link href="/chat">Chatbot</Link>
        <Link href="/articles">Articles</Link>
      </nav>
    </header>
  );
}
