import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
interface HeaderProps {
  active: string;
}
export default function Header({ active }: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between py-14 xl:px-64 px-10">
      <div className="text-2xl font-bold text-black">C</div>
      <nav className="xl:flex hidden gap-16">
        <Link
          className={`text-xl cursor-pointer ${active == "Home" ? "font-bold text-black" : "font-regular"}`} href={"/"}        >
          Home
        </Link>
        <Link
          className={`text-xl cursor-pointer ${active == "Trabalhos" ? "font-bold text-black" : "font-regular"}`} href={"/works"}        >
          Trabalhos
        </Link>
        <Link
          className={`text-xl cursor-pointer ${active == "Sobre" ? "font-bold text-black" : "font-regular"}`} href={"/about"}        >
          Sobre
        </Link>
        <Link
          className={`text-xl cursor-pointer ${active == "Contato" ? "font-bold text-black" : "font-regular"}`} href={"/contact"}        >
          Contato
        </Link>
      </nav>
      <nav className="xl:hidden flex w-7 h-7">
        <AiOutlineMenu size={28} color="#000" />
      </nav>
    </header>
  );
}
