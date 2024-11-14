import Link from "next/link";
import { ReactNode } from "react";

// components/Card.js
export default function Card({ title, children, href }: { title: string, children: ReactNode, href: string }) {
    return (
        <Link href={href} target="_blank" className="bg-white rounded-lg outline-1 outline outline-gray-200 p-6 hover:outline-blue-400 group/card cursor-pointer">
            <h2 className="text-xl font-bold mb-2 hover: group-hover/card:text-blue-400">{title}</h2>
            <div className="text-gray-700 group-hover/card:text-blue-400">{children}</div>
        </Link>
    );
}
