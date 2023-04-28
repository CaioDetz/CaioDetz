"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [showModal, setShowModal] = useState(null);
  return (
    <div className="w-full px-10 duration-200 md:px-40 py-5 flex justify-between">
      <span className="text-2xl">Caio Detz</span>

      <nav className="hidden md:flex duration-200">
        <Link className="px-4" href={"/"}>
          Home
        </Link>
        <Link className="px-4" href={"/projetos"}>
          Projetos
        </Link>
        <Link className="px-4" href={"/contato"}>
          Contato
        </Link>
      </nav>

      <nav className="flex md:hidden duration-200">
        <button
          className={"z-50"}
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          {showModal == true ? <MdClose size={38} color={"#000"} /> : <MdMenu size={38} color={"#000"} />}
          
        </button>

        <div
          className={`${
            showModal == true ? "animate-open" : "animate-close"
          } flex flex-col h-screen bg-white absolute justify-center items-center duration-300 left-0 top-0 overflow-hidden`}
        >
          <Link
            className={`py-4 text-3xl`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`py-4 text-3xl`}
            href={"/projetos"}
          >
            Projetos
          </Link>
          <Link
            className={`py-4 text-3xl`}
            href={"/contato"}
          >
            Contato
          </Link>
        </div>
      </nav>
    </div>
  );
}
