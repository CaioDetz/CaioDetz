import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

export default function LinkTalk({ href, children }: LinkProps) {
  return (
    <Link target="_blank" href={href}>
      {children}
    </Link>
  );
}
