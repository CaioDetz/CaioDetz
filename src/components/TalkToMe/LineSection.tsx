import { ReactNode } from "react";

interface LineSectionProps {
  children: ReactNode;
}
export default function LineSection({ children }: LineSectionProps) {
  return <div className="mb-20">{children}</div>;
}
