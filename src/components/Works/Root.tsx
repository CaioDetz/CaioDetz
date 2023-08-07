import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}
export default function Root({ children }: RootProps) {
  return (
    <section className="h-full my-36 w-full text-black flex flex-col xl:px-64 px-10">
      {children}
    </section>
  );
}
