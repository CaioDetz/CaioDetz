import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full mt-36 text-black flex flex-col">
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
      </main>
    </>
  );
}
