interface SectionTitleProps {
  text: string;
}
export default function SectionTitle({ text }: SectionTitleProps) {
  return <p className="text-2xl mb-4">{text}</p>;
}
