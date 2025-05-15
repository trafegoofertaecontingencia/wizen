export default function Cta() {
    return (
        <div className="flex flex-col items-center mt-15">
            <p>Assine agora!</p>
            <p className="md:text-4xl text-center bg-blue-200 p-3 rounded-md font-bold">Você só paga se funcionar.</p>
            <p className="text-center">Se não gostar cancele sem burocracia.</p>
            <p className="text-center mr-3 ml-3">Se gostar, continue com a gente por menos de R$ 1,60 por dia.</p>
            <div className="flex flex-col items-center gap-4 bg-blue-400 md:w-[600px] rounded-lg text-white p-4">
                        <div className="flex">
                            <span>R$</span>
                            <span className="text-6xl">29</span>
                            <div className="flex flex-col">
                            <span>,90</span>
                            <span>Mensal</span>
                        </div>
                        </div>
                  <button className="bg-white p-6 rounded-lg cursor-pointer text-blue-400">Testar por 7 dias grátis</button>
            </div>
        </div>
    )
}