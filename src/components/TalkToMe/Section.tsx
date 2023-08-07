import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}
export default function Section({ children }: SectionProps) {
  return <div className="mt-5">{children}</div>;
}
