import  VideoPlayer  from "@/app/components/VideoPlayer";

export default function Intro() {
    return (
        <div className="pt-5 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-4xl">WIZEN</p>
            <p className="text-blue-500 text-3xl md:text-5xl font-bold">App financeiro com inteligência artificial</p>
            <VideoPlayer src="/videos/showing.mp4"/>
            <p className="text-4xl md:text-6xl font-bold">Seu novo assistente <br /> financeiro com IA 24h chegou</p>
            <p className="m-2 md:text-lg">Organize sua vida financeira com ajuda de uma inteligência artificial pensada para quem vive no aperto e quer virar o jogo</p>

            <button className="bg-blue-300 rounded-lg p-3 mt-2 w-50"><a href="#cta">Testar por 7 dias grátis</a></button>
          </div>
        </div>
    )
};