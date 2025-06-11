import VideoPlayer from "@/app/components/VideoPlayer";

export default function Intro() {
  return (
    <section className="bg-slate-900 text-white py-8 px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center space-y-10">
        {/* Nome do app */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-lime-400">
          WIZEN
        </h1>

        {/* Headline principal */}
        <h2 className="text-2xl md:text-5xl font-bold leading-tight max-w-3xl">
          Chega de viver no vermelho:{" "}
          <span className="">organize sua vida financeira</span>{" "}
          sem complicação.
        </h2>

        {/* Vídeo demonstrativo */}
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg border border-slate-700">
          <VideoPlayer src="/videos/showing.mp4" />
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
          Um app <span className="text-white font-semibold">simples, prático e visual</span> que te ajuda a sair das dívidas, entender seus gastos e recuperar o controle do seu dinheiro — mesmo que você nunca tenha feito um planejamento antes.
        </p>

        {/* Botão CTA */}
        <a
          href="#cta"
          className="bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-3 px-6 rounded-xl transition-colors shadow-md"
        >
          Testar por 7 dias grátis
        </a>
      </div>
    </section>
  );
}
