import Image from "next/image";
import Header from "@/components/Header";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import Card from "@/components/Card";
export default function Home() {
  return (
    <>
      <Header />
      <section className="h-full my-36 w-full text-black flex flex-col xl:px-64 px-10">
        <h1 className="text-4xl">Olá.</h1>
        <h1 className="text-4xl font-semibold">Eu Sou Caio Detz.</h1>
        <span className="text-4xl">
          Designer e Prgramador da equipe Harpia.
        </span>
        <span className="text-4xl">Com sede em Sorriso, Brasil.</span>

        <p className="md:w-[50rem] mt-24 text-2xl">
          Com mais de 13 anos de experiência em programação, fundei a Harpia,
          uma empresa voltada para o ramo de desenvolvimento de software.
          Algumas das minhas experiências incluem o uso de frameworks como
          React, React-Native, NextJs, Flutter, entre outros.
        </p>
      </section>

      <section className="bg-black text-white w-full xl:px-64 px-10 py-24 mb-36 gap-5">
        <h1 className="text-4xl mb-24">Vamos Conversar.</h1>
        <p className="text-2xl mb-3">
          Me envie um email:
          <br className="md:hidden visible" /> contato@caiodetz.com.
        </p>
        <p className="text-2xl">
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

      <section className="h-full my-36 w-full text-black flex flex-col xl:px-64 px-10">
        <h1 className="text-4xl mb-12">Projetos:</h1>
        <div className="flex flex-row w-full gap-7 overflow-x-scroll scroll-smooth">
          <Card
            title="Miu Miu App Flutter"
            src="https://miumiu.caiodetz.com/icons/Icon-512.png"
            content="Um Aplivativo para Gerenciamento Comercial de uma Lojinha no Instagram @_miu.miu_0"
          />
          <Card
            title="Cartão de Visita App Flutter"
            src="https://flutter.caiodetz.com/icons/Icon-512.png"
            content="Um Aplivativo para Cartão de Visita Com alumas Informações"
          />
        </div>
      </section>
    </>
  );
}
