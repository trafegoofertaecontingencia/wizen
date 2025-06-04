// components/Session2.tsx
import Image from 'next/image';

const Session2 = () => {
  return (
    <section className="bg-white text-gray-900 pb-6 px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/laptop_and_phone.png" // Troque pelo caminho correto
            alt="Visualize sua evolução financeira"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Visualize sua evolução financeira de forma clara
          </h2>
          <p className="text-gray-600 mb-6">
            Chega de se perder em números. O Wizen mostra sua trajetória com gráficos simples, saldos atualizados e comparativos mensais — pra você entender exatamente pra onde seu dinheiro está indo.
          </p>
          <a
            href="#cta"
            className="text-indigo-600 hover:text-indigo-500 font-semibold inline-flex items-center"
          >
            Assine agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Session2;
