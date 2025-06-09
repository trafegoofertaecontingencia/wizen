// components/Session4.tsx
import Image from 'next/image';

const Session3 = () => {
  return (
    <section className="bg-black text-white pb-6 px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/consultor.png" // Troque pelo caminho correto da imagem de metas
            alt="Metas financeiras"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Receba orientações inteligentes com base na sua realidade
          </h2>
          <p className="text-gray-400 mb-6">
            O Wizen analisa seus hábitos financeiros e te dá sugestões práticas para economizar, organizar e atingir seus objetivos mais rápido — como se você tivesse um consultor particular no bolso.
          </p>
          <a
            href="#cta"
            className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center"
          >
            Assine agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Session3;
