import Image from 'next/image';

const Session2 = () => {
  return (
    <section className="bg-slate-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/mockup-session-2.png"
            alt="Visualize sua evolução financeira"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Visualize sua evolução financeira de forma clara
          </h2>
          <p className="text-slate-300 text-lg">
            Chega de se perder em números. O <span className="text-lime-400 font-semibold">Wizen</span> mostra sua trajetória com gráficos simples, saldos atualizados e comparativos mensais —
            pra você entender exatamente pra onde seu dinheiro está indo.
          </p>
          <a
            href="#cta"
            className="text-lime-400 hover:text-lime-300 font-semibold inline-block underline underline-offset-4"
          >
            Assine agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Session2;
