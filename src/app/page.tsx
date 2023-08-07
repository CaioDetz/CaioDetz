import Header from "@/components/Header";
import Card from "@/components/Card";
import TalkMe from "@/components/TalkMe";
export default function Home() {
  return (
    <>
      <Header />
      <section className="h-full mt-24 mb-36 w-full text-black flex flex-col xl:px-64 px-10">
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
      <TalkMe />
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
