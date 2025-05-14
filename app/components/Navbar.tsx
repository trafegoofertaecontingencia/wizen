import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-3 pl-3 pr-3 pb-2 bg-[#333] text-white">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/">Contato</Link></li>
                <li><Link href="/">Sobre nós</Link></li>
            </ul>
        </nav>
    )
};
