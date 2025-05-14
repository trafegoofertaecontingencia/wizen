export default function Intro() {
    return (
        <div className="pt-15 flex justify-center text-center md:justify-start md:ml-15">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-4xl">WIZEN</p>
            <p className="text-blue-300 text-3xl md:text-5xl font-bold">App mobile</p>
            <p className="text-4xl md:text-6xl font-bold">Seu novo assistente <br /> financeiro chegou</p>
            <p className="m-2 md:text-lg">Organize sua vida financeira com inteligência - mesmo que viva no aperto</p>
            <button className="bg-blue-300 rounded-lg p-3 mt-2 w-50">Testar por 7 dias grátis</button>
          </div>
        </div>
    )
};