"use client";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { BiSolidCopyAlt, BiCheck } from "react-icons/bi";
import Link from "next/link";

export default function TalkMe() {
  return (
    <section className="bg-black text-white w-full xl:px-64 px-10 py-24 mb-36 gap-5">
      <h1 className="text-4xl mb-24">Vamos Conversar.</h1>
      <p
        className="text-2xl mb-3 cursor-pointer flex flex-row items-center"
        >
        Me envie um email:
        <br className="md:hidden visible" /> contato@caiodetz.com.
      </p>
      <p
        className="text-2xl cursor-pointer flex flex-row items-center"
      >
        Ou uma mensagem:
        <br className="md:hidden visible" /> +55 (66) 9 9934-8031.
        
      </p>
      <div className="mt-5">
        <p className="text-2xl mb-4">Minhas redes sociais</p>
        <div className="flex gap-5">
          <Link target="_blank" href="https://instagram.com/caiodetz">
            <BsInstagram size={24} color="#FFF" />
          </Link>
          <Link target="_blank" href="https://facebook.com/caiodetz">
            <BsFacebook size={24} color="#FFF" />
          </Link>
          <Link
            target="_blank"
            href="https://br.linkedin.com/in/caio-detz-0395b7270"
          >
            <BsLinkedin size={24} color="#FFF" />
          </Link>
        </div>
      </div>
    </section>
  );
}
