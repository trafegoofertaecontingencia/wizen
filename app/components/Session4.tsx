import Image from 'next/image';

const Session4 = () => {
  return (
    <section className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/metas.png"
            alt="Defina metas financeiras"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Defina metas e acompanhe o progresso com clareza
          </h2>
          <p className="text-slate-300 text-lg">
            Quer juntar para viajar? Quitar dívidas? Criar uma reserva? Com o <span className="text-lime-400 font-semibold">Wizen</span>, você cria metas financeiras personalizadas e acompanha cada etapa da sua evolução — de forma <span className="text-purple-400 font-medium">visual, motivadora</span> e simples.
          </p>
          <a
            href="#cta"
            className="text-purple-400 hover:text-purple-300 font-semibold inline-block underline underline-offset-4"
          >
            Assine agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Session4;
