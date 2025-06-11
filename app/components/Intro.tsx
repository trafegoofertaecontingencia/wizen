import  VideoPlayer  from "@/app/components/VideoPlayer";

export default function Intro() {
    return (
        <div className="pt-5 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-4xl">WIZEN</p>
            <p className="text-blue-500 text-3xl md:text-5xl font-bold">Chega de viver no vermelho: comece hoje a organizar sua vida financeira sem complicacão.</p>
            <VideoPlayer src="/videos/showing.mp4"/>
            <p className="text-xl font-bold">Um app simples, prático e visual que te ajuda a sair das dívidas, entender seus gastos e recuperar o controle do seu dinheiro, mesmo que você nunca tenha feito um planejamento antes.</p>
            

            <button className="bg-blue-300 rounded-lg p-3 mt-2 w-50"><a href="#cta">Testar por 7 dias grátis</a></button>
          </div>
        </div>
    )
};