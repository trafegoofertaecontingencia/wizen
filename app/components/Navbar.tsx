"use client"

import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    console.log(isOpen);

    return (
        <nav className="relative overflow-hidden bg-[#333]">
            <ul className="md:flex gap-3 pl-3 pr-3 pb-2 text-white hidden">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/">Contato</Link></li>
                <li><Link href="/">Sobre nós</Link></li>
            </ul>

            <motion.div 
            initial={{ height: "24px" }}
            animate={isOpen ? {height: "200px"} : {height: "24px"}}
            transition={isOpen ? {} : {duration: 0.4, delay: 0.2}}
            className="bg-[#333] text-white cursor-pointer md:hidden" onClick={handleMenu}>
            <GiHamburgerMenu className="ml-3" onClick={handleMenu} />
            </motion.div>

            <motion.div className="bg-[#333] w-[100%] p-3 absolute right-[-100%] z-1 top-[50px] text-white"
            initial={{ right: "-100%" }}
            animate={ isOpen ? { right: "0" } : { right: "-100%" }  }
            transition={isOpen ? { delay: 0.2 } : {durantion: 0.1}}>
                <ul className="flex flex-col items-center gap-2">
                    <li>Início</li>
                    <li>Contato</li>
                    <li>Sobre nós</li>
                </ul>
            </motion.div>
        </nav>
    )
};
