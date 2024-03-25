'use client';
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
interface HeaderProps {
  active: string;
}
export default function Header({ active }: HeaderProps) {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <header className="flex w-full items-center justify-between py-14 xl:px-64 px-10">
      <div className="text-2xl font-bold text-black">C</div>
      <nav className="xl:flex hidden gap-16">
        <Link
          className={`text-xl cursor-pointer ${
            active == "Home" ? "font-bold text-black" : "font-regular"
          }`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`text-xl cursor-pointer ${
            active == "Trabalhos" ? "font-bold text-black" : "font-regular"
          }`}
          href={"/works"}
        >
          Trabalhos
        </Link>
        <Link
          className={`text-xl cursor-pointer ${
            active == "Sobre" ? "font-bold text-black" : "font-regular"
          }`}
          href={"/about"}
        >
          Sobre
        </Link>
        <Link
          className={`text-xl cursor-pointer ${
            active == "Contato" ? "font-bold text-black" : "font-regular"
          }`}
          href={"/contact"}
        >
          Contato
        </Link>
      </nav>
      <nav className="xl:hidden flex w-7 h-7" onClick={(e)=>{setMenu(true)}}>
        <AiOutlineMenu size={28} color="#000" />
      </nav>

      <div className={`bg-white w-full h-full absolute top-0 left-0 p-10 ${!menu ? 'hidden': '' }`}>
        <div className="flex flex-col gap-16">
          <nav className="flex w-7 h-7" onClick={(e)=>{setMenu(false)}}>
            <AiOutlineClose size={28} color="#000" />
          </nav>

          <nav className="flex flex-col gap-10">
            <Link
              className={`text-xl cursor-pointer ${
                active == "Home" ? "font-bold text-black" : "font-regular"
              }`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`text-xl cursor-pointer ${
                active == "Trabalhos" ? "font-bold text-black" : "font-regular"
              }`}
              href={"/works"}
            >
              Trabalhos
            </Link>
            <Link
              className={`text-xl cursor-pointer ${
                active == "Sobre" ? "font-bold text-black" : "font-regular"
              }`}
              href={"/about"}
            >
              Sobre
            </Link>
            <Link
              className={`text-xl cursor-pointer ${
                active == "Contato" ? "font-bold text-black" : "font-regular"
              }`}
              href={"/contact"}
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
