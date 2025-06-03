// components/FoodPhotoSection.tsx
import Image from 'next/image';

const AboutForm = () => {
  return (
    <section className="bg-black text-white py-12 px-6 mt-5">
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
          <div className="text-4xl mb-4">📸</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Adicione refeições com fotos e vídeos
          </h2>
          <p className="text-gray-400 mb-6">
            Envie uma foto ou vídeo da sua refeição e calcularemos automaticamente as
            calorias e nutrientes ao longo do dia. Incluindo produtos industrializados.
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

export default AboutForm;
