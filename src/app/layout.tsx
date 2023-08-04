import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caio Detz",
  description: "Caio Detz Portifólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " xl:px-64 px-10 text-zinc-700"}>
        {children}
      </body>
    </html>
  );
}
