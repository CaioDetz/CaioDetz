import { ReactNode } from "react";

interface CarrusselProps {
  children: ReactNode;
}
export default function Carrussel({ children }: CarrusselProps) {
  return (
    <div className="flex flex-row w-full gap-7 overflow-x-scroll scroll-smooth">
      {children}
    </div>
  );
}
