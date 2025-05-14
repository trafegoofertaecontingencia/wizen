import Image from "next/image";

export default function Solution() {
    return (
        <div className="flex flex-col items-center mt-15">
            <h1 className="text-2xl uppercase font-bold w-[600px] text-center m-6 mt-0">Você vive no limite e nunca sobra nada? A culpa não é só sua</h1>
            <p>Mas a solução pode estar no seu bolso, literalmente!</p>
            <Image
                src="/images/laptop_and_phone.png" 
                alt="Descrição da imagem"
                width={350}
                height={200}
                />

            <p className="w-[600px]">Um app com inteligência artificial que entende sua realidade, te
            ajuda a organizar a vida financeira, parar de gastar com besteira e
            começar a viver com tranquilidade.
            </p>
        </div>
    )
}