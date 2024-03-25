import Header from "@/components/Header";
import TalkToMe from "@/components/TalkToMe";
import Works from "@/components/Works";
import { BsGithub, BsInstagram } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <Header active={"Home"} />
      <section className="h-full mt-24 mb-36 w-full text-black flex flex-col xl:px-64 px-10">
        <h1 className="text-4xl">Olá.</h1>
        <h1 className="text-4xl font-semibold">Eu Sou Caio Detz.</h1>
        <span className="text-4xl">
          Designer e Programador da equipe Harpia.
        </span>
        <span className="text-4xl">Com sede em Sorriso, Brasil.</span>

        <p className="md:w-[50rem] mt-24 text-2xl">
          Com mais de 7 anos de experiência em programação, fundei a Harpia, uma
          empresa voltada para o ramo de desenvolvimento de software. Algumas
          das minhas experiências incluem o uso de frameworks como React,
          React-Native, NextJs, Flutter, entre outros.
        </p>
      </section>

      <TalkToMe.Root>
        <TalkToMe.Title text="Vamos Conversar." />
        <TalkToMe.LineSection>
          <TalkToMe.Line text="Me mande uma Mensagem: +55 (66) 9 9934-8031." />
          <TalkToMe.Line text="Ou mande um E-mail: contato@caiodetz.com." />
        </TalkToMe.LineSection>
        <TalkToMe.Section>
          <TalkToMe.SectionTitle text="Minhas Redes Sociais:" />
          <TalkToMe.Links>
            <TalkToMe.Link href="https://instagram.com/caiodetz">
              <BsInstagram size={24} color="#FFF" />
            </TalkToMe.Link>
            
            <TalkToMe.Link href="https://github.com/caiodetz">
              <BsGithub size={24} color="#FFF" />
            </TalkToMe.Link>
          </TalkToMe.Links>
        </TalkToMe.Section>
      </TalkToMe.Root>

      <Works.Root>
        <Works.Title text="Trabalhos:" />
        <Works.Carrusel>
          <Works.Card
            href={"https://miumiu.caiodetz.com"}
            title="Miu Miu App Flutter"
            src="https://miumiu.caiodetz.com/icons/Icon-512.png"
            content="Um Aplivativo para Gerenciamento Comercial de uma Lojinha no Instagram @loja_miumiu"
          />
          <Works.Card
            href={"https://flutter.caiodetz.com"}
            title="Cartão de Visita App Flutter"
            src="https://flutter.caiodetz.com/icons/Icon-512.png"
            content="Um Aplivativo para Cartão de Visita Com alumas Informações"
          />
        </Works.Carrusel>
      </Works.Root>
    </>
  );
}
