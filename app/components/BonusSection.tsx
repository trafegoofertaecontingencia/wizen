export default function BonusSection() {
  return (
    <section className="bg-slate-100 text-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-lime-600">
          🎁 Bônus Exclusivos do Plano Premium
        </h2>

        <ul className="space-y-6 text-left text-lg md:text-xl font-medium max-w-2xl mx-auto text-slate-800">
          <li className="flex items-start gap-3">
            <span className="text-lime-600">✔️</span>
            <span>
              Guia <strong>“10 Tipos de Renda Extra que Qualquer Pessoa Pode Começar Ainda Hoje”</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-lime-600">✔️</span>
            <span>
              Guia <strong>“Como Economizar Sem Sofrimento”</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-lime-600">✔️</span>
            <span>
              <strong>Checklist imprimível</strong> de controle mensal de dívidas
            </span>
          </li>
        </ul>

        <p className="text-slate-500 text-md italic">
          Todos os bônus são liberados imediatamente após a confirmação da assinatura Premium.
        </p>
      </div>
    </section>
  );
}
