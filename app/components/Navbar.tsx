"use client"

import Link from "next/link";

export default function Navbar() {


    return (
        <nav className="bg-[#333]">
            <ul className="flex gap-3">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/">Contato</Link></li>
                <li><Link href="/">Sobre nós</Link></li>
            </ul>
        </nav>
    )
};
