"use client";
import Card from "@/components/Card";
import Link from "next/link";
import {
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
export default function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A");
  };
  return (
    <main className="flex flex-col flex-1 flex-wrap justify-center items-center ">
      <Card className="flex flex-1 flex-col items-center">
        <h1 className="md:text-4xl text-2xl text-center font-semibold md:my-5">
          Minhas Redes Sociais:
        </h1>
        <div className="flex felx-row flex-wrap w-96 felx-1">
          <Link
            href={"/CONTATO"}
            className="flex items-center justify-center md:gap-2 md:p-5 "
            target="_blank"
          >
            <BsWhatsapp size={35} color="#2BB741" />
            <label>Whatsapp</label>
          </Link>
          <Link
            href={"/CONTATO"}
            className="flex items-center justify-center md:gap-2 md:p-5 "
            target="_blank"
          >
            <BsFacebook size={35} color="#1877F2" />
            <label>Facebook</label>
          </Link>
          <Link
            href={"/CONTATO"}
            className="flex items-center justify-center md:gap-2 md:p-5 "
            target="_blank"
          >
            <BsInstagram size={35} color="#5851D8" />
            <label>Instagram</label>
          </Link>
          <Link
            href={"/CONTATO"}
            className="flex items-center justify-center md:gap-2 md:p-5 "
            target="_blank"
          >
            <BsLinkedin size={35} color="#0e76a8" />
            <label>Linkedin</label>
          </Link>
          <Link
            href={"/CONTATO"}
            className="flex items-center justify-center md:gap-2 md:p-5 "
            target="_blank"
          >
            <BsGithub size={35} color="" />
            <label>GitHub</label>
          </Link>
        </div>
      </Card>
      <div className="flex flex-1 items-center justify-center w-full my-4 gap-5">
        <div className="bg-gray-400 w-96 h-[0.5px] " />
        <span className="font-semibold text-2xl">OU</span>
        <div className="bg-gray-400 w-96 h-[0.5px] " />
      </div>
      <Card className="flex flex-1 flex-col items-center">
        <h1 className="md:text-4xl text-2xl text-center font-semibold md:my-5">
          Me Envie Uma Mensagem
        </h1>
        <span className="flex flex-1 text-sm md:text-xl text-center opacity-60 mx-10">
          As Mensagens serão enviadas via e-mail e serão respondias <br /> o
          quanto antes possivel, tenha paciencia e comprenção.
        </span>
        <form className="flex flex-1 w-full flex-col items-center justify-center p-5 md:px-24 md:pb-14 md:pt-5">
          <input
            type="text"
            placeholder="Nome:"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="email"
            placeholder="Email:"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="text"
            placeholder="Assunto:"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <textarea
            rows={10}
            cols={10}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-96 w-full px-5 py-2.5 text-center"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Enviar
          </button>
        </form>
      </Card>
    </main>
  );
}
