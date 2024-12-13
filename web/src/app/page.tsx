import Card from '../components/Card';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 pt-24 flex flex-col justify-between">

      <div className='container mx-auto px-24 py-4 text-center space-y-5'>
        <div className='w-48 h-48 mx-auto object-cover overflow-hidden rounded-full relative'>
          <Image src={"/perfil.webp"} alt={"Pefil"} fill sizes='100%' />
        </div>
        <h1 className='text-4xl font-semibold'>Caio Detz</h1>
        <h3 className='text-xl'>Programador at Sorriso, Brasil 🇧🇷</h3>
      </div>

      <main className="container mx-auto max-w-[750px] px-4 py-8 grid grid-cols-2 gap-6">
        <Card title="Me envie uma mensagem 👋🏻" href='https://whatsapp.caiodetz.com'>
          Clique aqui e entre em contato comigo para criarmos algo juntos.
        </Card>
        <Card title="Meu Perfil no Github 🚀" href='https://github.com/caiodetz'>
          Aqui, você encontra meus projetos/POCs e pode conhecer um pouco do meu trabalho.
        </Card>
        <Card title="Instagram 🍃" href='https://instagram.com/caiodetz'>
          Apenas um pouco do meu dia a dia.
        </Card>
        <Card title="Harpia Development 🍂" href='https://harpiadev.org'>
          Minha empresa de desenvolvimento de software ainda está em construção.
        </Card>
        <Card title="Zenji - Assosiação 🥋" href='https://zenji.vercel.app'>
          A associação sem fins lucrativos de karatê da qual faço parte e apoio muito. Dá uma olhada lá, tem vários projetos legais 😃.
        </Card>
        <Card title="Meu Linkedin 💼" href='https://linkedin.com/in/caiodetz'>
          Um excelente lugar para acompanhar conteúdos mais profissionais.
        </Card>
      </main>

      <div className="container mx-auto mt-auto px-4 py-4 text-center">
        <p className="text-sm text-gray-600 ">© 2024 Caio Detz. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
