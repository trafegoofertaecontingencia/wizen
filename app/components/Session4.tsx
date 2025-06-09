// components/FoodPhotoSection.tsx
import Image from 'next/image';

const Session4 = () => {
  return (
    <section className="bg-white text-gray-900 pb-6 px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/metas.png" // Troque pelo caminho correto
            alt="Envio de fotos"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
             Defina metas e acompanhe o progresso com clareza
          </h2>
          <p className="text-gray-400 mb-6">
            Quer juntar para viajar? Quitar dívidas? Criar uma reserva? Com o Wizen, você cria metas financeiras personalizadas e acompanha cada etapa da sua evolução — de forma visual, motivadora e simples.
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

export default Session4;
