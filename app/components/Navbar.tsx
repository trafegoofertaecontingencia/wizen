"use client"

import Link from "next/link";

export default function Navbar() {


    return (
        <nav className="bg-[#333]">
            <ul className="flex gap-3">
                <li><Link href="/">Início</Link></li>
                <li><Link href="#bullets">Funcionalidades</Link></li>
                <li><Link href="#cta">Planos</Link></li>
                <li><Link href="#faq">Faq</Link></li>
            </ul>
        </nav>
    )
};
