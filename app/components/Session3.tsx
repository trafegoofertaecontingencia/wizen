import Image from 'next/image';

const Session3 = () => {
  return (
    <section className="bg-slate-100 text-slate-900 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/consultor.png"
            alt="Consultor financeiro virtual"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Receba orientações inteligentes com base na sua realidade
          </h2>
          <p className="text-slate-600 text-lg">
            O <span className="text-purple-600 font-semibold">Wizen</span> analisa seus hábitos financeiros e te dá sugestões práticas para economizar, organizar e atingir seus objetivos mais rápido — como se você tivesse um consultor particular no bolso.
          </p>
          <a
            href="#cta"
            className="text-purple-600 hover:text-purple-500 font-semibold inline-block underline underline-offset-4"
          >
            Assine agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Session3;
