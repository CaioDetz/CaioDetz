import { BaseHTMLAttributes, ReactHTML, ReactNode } from "react";

interface RootProps {
  children: ReactNode;
  className?: string;
}
export default function Root({ children, className }: RootProps) {
  return (
    <section
      className={`${
        className
          ? className
          : "bg-black text-white w-full xl:px-64 px-10 py-24 mb-36"
      }`}
    >
      {children}
    </section>
  );
}
