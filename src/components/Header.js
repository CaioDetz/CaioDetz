import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full px-10 duration-200 md:px-40 py-5 flex justify-between">
      <span className="text-2xl">Caio Detz</span>

      <nav className="hidden md:flex duration-200">
        <Link className="px-4" href={"#"}>
          Home
        </Link>
        <Link className="px-4" href={"#"}>
          Projetos
        </Link>
        <Link className="px-4" href={"#"}>
          Contato
        </Link>
      </nav>

      <nav className="flex md:hidden duration-200">
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <MdMenu size={38} color={"#000"} />
        </button>

        <div
          className={`${
            showModal == true ? "h-52" : "h-0 opacity-0"
          } flex flex-col h-52 absolute justify-center items-center duration-300 bottom-0 left-0 w-full sha`}
        >
          <Link
            className={`${showModal == true ? "" : "hidden"} py-4 text-3xl`}
            href={"#"}
          >
            Home
          </Link>
          <Link
            className={`${showModal == true ? "" : "hidden"} py-4 text-3xl`}
            href={"#"}
          >
            Projetos
          </Link>
          <Link
            className={`${showModal == true ? "" : "hidden"} py-4 text-3xl`}
            href={"#"}
          >
            Contato
          </Link>
        </div>
      </nav>
    </div>
  );
}
