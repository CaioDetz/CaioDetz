import React from "react";
import Card from "@/components/Card";
import Link from "next/link";
import Image from "next/image";

import projeto1 from "public/projeto1.png";
export default function Projetos() {
  return (
    <main className="flex flex-1 h-full flex-wrap justify-center items-center w-full">
      <Card className="flex flex-col items-center">
        <h1 className="text-lg">Gerenciamento de Assistencias Tecnicas</h1>
        <p className="text-sm text-center">
          Um sistema de gerenciamento de assistencias tecnicas online
        </p>
        <Link
          href="https://jmc-kard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={projeto1}
            alt="Projeto1"
            width={450}
            className="rounded-md"
          />
        </Link>
      </Card>
      <Card className="flex flex-col items-center">
        <h1 className="text-lg">Gerenciamento de Assistencias Tecnicas</h1>
        <p className="text-sm text-center">
          Um sistema de gerenciamento de assistencias tecnicas online
        </p>
        <Link
          href="https://jmc-kard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={projeto1}
            alt="Projeto1"
            width={450}
            className="rounded-md"
          />
        </Link>
      </Card>
      <Card className="flex flex-col items-center">
        <h1 className="text-lg">Gerenciamento de Assistencias Tecnicas</h1>
        <p className="text-sm text-center">
          Um sistema de gerenciamento de assistencias tecnicas online
        </p>
        <Link
          href="https://jmc-kard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={projeto1}
            alt="Projeto1"
            width={450}
            className="rounded-md"
          />
        </Link>
      </Card>
    </main>
  );
}
