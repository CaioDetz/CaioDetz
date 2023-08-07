
interface LineProps {
  text: string;
}
export default function Line({ text }: LineProps) {
  return (
    <p className="text-2xl mb-3 cursor-pointer flex flex-row items-center">
      {text}
    </p>
  );
}
