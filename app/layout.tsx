import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecochat Generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "from via to min-h-screen w-full bg-base-dark bg-gradient-light bg-gradient-mid bg-gradient-to-br",
        )}
      >
        {<Header />}
        {children}
      </body>
    </html>
  );
}
