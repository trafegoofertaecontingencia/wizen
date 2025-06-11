import Image from 'next/image';

const Session1 = () => {
  return (
    <section id="bullets" className="bg-slate-100 text-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/images/registro.png" // Substitua se necessário
            alt="Envio de fotos"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Adicione suas entradas e saídas com poucos cliques
          </h2>
          <p className="text-slate-600 text-lg">
            Registre suas <span className="text-lime-600 font-medium">receitas</span>, <span className="text-lime-600 font-medium">despesas</span> e categorias em segundos — sem complicação, sem planilhas.
            O <span className="text-purple-600 font-semibold">Wizen</span> organiza tudo automaticamente e atualiza seus saldos, gráficos e metas em tempo real.
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

export default Session1;
