import { FaClock } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

export default function Bullets() {
    return (
        <div className="mt-15 flex flex-col items-center">
            <h1 className="uppercase text-2xl font-bold text-center m-8 mt-0 mb-3">Porque você vai amar o nosso app:</h1>
            <ul className="m-6 mt-0 mb-0 flex flex-col">
                <li className="flex gap-3 items-center">
                    <FaClock />
                    <p>Controle automatico dos gastos</p>
                </li>
                <li className="flex gap-3 items-center">
                    <FaRobot />
                    <p>Chat com IA 24h por dias</p>
                </li>
                <li className="flex gap-3 items-center">
                    <BsGraphUpArrow />
                    <p>Relatórios e metas semanais</p>
                </li>
                <li className="flex gap-3 items-center">
                    <FaSearch />
                    <p>Diagnóstico financeiro no primeiro uso</p>
                </li>
                <li className="flex gap-3 items-center">
                    <FaBoltLightning />
                    <p>Tudo no seu celular em segundos</p>
                </li>
            </ul>
        </div>
    )
}