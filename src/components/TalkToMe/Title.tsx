interface TitleProps {
  text: string;
}
export default function Title({ text }: TitleProps) {
  return <h1 className="text-4xl mb-16">{text}</h1>;
}
