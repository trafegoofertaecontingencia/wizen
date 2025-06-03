// components/FoodPhotoSection.tsx
import Image from 'next/image';

const Session1 = () => {
  return (
    <section className="bg-black text-white pb-6 px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/laptop_and_phone.png" // Troque pelo caminho correto
            alt="Envio de fotos"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
             Adicione suas entradas e saídas com poucos cliques
          </h2>
          <p className="text-gray-400 mb-6">
            Registre suas receitas, despesas e categorias em segundos — sem complicação, sem planilhas. O Wizen organiza tudo automaticamente e atualiza seus saldos, gráficos e metas em tempo real.
          </p>
          <a
            href="#"
            className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center"
          >
            Assine agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Session1;
