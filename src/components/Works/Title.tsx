import { ReactNode } from "react";

interface TitleProps {
  text: string;
}
export default function Title({ text }: TitleProps) {
  return <h1 className="text-4xl mb-12">{text}</h1>;
}
