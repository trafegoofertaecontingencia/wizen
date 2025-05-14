import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Bullets() {
    return (
        <div className="mt-15 flex flex-col items-center">
            <h1 className="uppercase text-2xl md:text-4xl font-bold text-center m-8 mt-0 ">Esse app é perfeito pra você se:</h1>
            <ul className="m-6 mt-0 flex flex-col gap-1 mb-4">
                <li className="flex gap-3 items-center">
                    <IoIosCheckmarkCircle className="text-blue-500 text-2xl md:text-3xl" />
                    <p className="md:text-2xl">Você recebe e o dinheiro some</p>
                </li>
                <li className="flex gap-3 items-center">
                    <IoIosCheckmarkCircle className="text-blue-500 text-2xl md:text-3xl" />
                    <p className="md:text-2xl">Já tentou planilhas mas não funcionou</p>
                </li>
                <li className="flex gap-3 items-center">
                    <IoIosCheckmarkCircle className="text-blue-500 text-2xl md:text-3xl" />
                    <p className="md:text-2xl">Quer guardar dinheiro mas não sabe como</p>
                </li>
                <li className="flex gap-3 items-center">
                    <IoIosCheckmarkCircle className="text-blue-500 text-2xl md:text-3xl" />
                    <p className="md:text-2xl">É CLT ou MEI e quer controle real</p>
                </li>
            </ul>
        </div>
    )
};