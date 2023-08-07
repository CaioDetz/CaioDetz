import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  src: string;
  title: string;
  content: string;
}

export default function Card({ title, src, content }: CardProps) {
  return (
    <div className="min-w-52 max-w-52 w-52 flex flex-col p-5 items-center gap-3 border rounded-xl">
      <div className="overflow-hidden rounded-xl">
        <Image src={src} alt={"Logo do App"} width={192} height={192} />
      </div>
      <div className="w-full h-0 border" />
      <header className="text-lg text-center">{title}</header>
      <div className="w-full h-0 border" />
      <main className="text-md text-center text-zinc-700">{content}</main>
    </div>
  );
}
