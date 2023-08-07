import { ReactNode } from "react";

interface LinksProps {
  children: ReactNode;
}
export default function Links({ children }: LinksProps) {
  return <div className="flex gap-5">{children}</div>;
}
