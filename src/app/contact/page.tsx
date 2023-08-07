import Header from "@/components/Header";
import TalkToMe from "@/components/TalkToMe";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
export default function Contact() {
  return (
    <>
      <Header active={"Contato"} />

      <TalkToMe.Root className="bg-white text-black w-full xl:px-64 px-10 py-24 mb-36">
        <TalkToMe.Title text="Vamos Conversar." />
        <TalkToMe.LineSection>
          <TalkToMe.Line text="Me mande uma Mensagem: +55 (66) 9 9934-8031." />
          <TalkToMe.Line text="Ou mande um E-mail: contato@caiodetz.com." />
        </TalkToMe.LineSection>
        <TalkToMe.Section>
          <TalkToMe.SectionTitle text="Minhas Redes Sociais:" />
          <TalkToMe.Links>
            <TalkToMe.Link href="https://instagram.com/caiodetz">
              <BsInstagram size={24} color="#000" />
            </TalkToMe.Link>
            <TalkToMe.Link href="https://facebook.com/caiodetz">
              <BsFacebook size={24} color="#000" />
            </TalkToMe.Link>
            <TalkToMe.Link href="https://br.linkedin.com/in/caio-detz-927345187">
              <BsLinkedin size={24} color="#000" />
            </TalkToMe.Link>
          </TalkToMe.Links>
        </TalkToMe.Section>
      </TalkToMe.Root>
    </>
  );
}
