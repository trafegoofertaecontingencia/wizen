export default function Solution() {
  return (
    <main className="bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen px-6 py-20">
      <section className="max-w-5xl mx-auto space-y-12">
        {/* Apresentação */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Apresentamos o <span className="text-lime-400">WizenApp</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Um aplicativo web pensado para quem quer mudar de vida financeira
            de forma <span className="text-lime-300 font-semibold">simples</span> e <span className="text-lime-300 font-semibold">realista</span>.
          </p>
        </div>

        {/* Cards de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="📝 Controle manual com praticidade"
            description="Registre suas receitas e despesas como em uma planilha, mas de forma muito mais rápida e intuitiva."
          />
          <Card
            title="📊 Gráficos visuais"
            description="Veja exatamente para onde está indo seu dinheiro com dashboards limpos e filtros personalizados."
          />
          <Card
            title="🎯 Metas financeiras"
            description='Defina objetivos (como "viagem", "carro") e acompanhe seu progresso com clareza.'
          />
          <Card
            title="📅 Contas a pagar"
            description="Organize suas obrigações futuras e tenha previsão real do seu mês."
          />
          <Card
            title="🤖 Consultor financeiro com IA"
            description="Uma inteligência artificial que analisa seus dados reais e oferece conselhos personalizados 24h por dia."
          />
          <Card
            title="🔒 Sem sincronização bancária"
            description="Nada de conectar com bancos. Você continua no comando, com segurança, privacidade e envolvimento ativo."
          />
        </div>

        {/* Diferencial */}
        <div className="text-center space-y-6">
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto">
            Diferente dos concorrentes que prometem automação total — mas te afastam do controle real —
            aqui você continua no comando, com a simplicidade de uma planilha, mas com a inteligência
            de um sistema que entende suas necessidades de verdade.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-lime-400">
            Simples como uma planilha. Poderoso como um consultor. Tudo em um só lugar.
          </h2>
        </div>
      </section>
    </main>
  );
}

// Componente Card reutilizável
function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-slate-700/40 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 text-lime-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
