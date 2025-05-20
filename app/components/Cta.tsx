import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const plans = [
  {
    name: 'Premium',
    description: 'Comece a organizar suas finanças',
    price: 'R$19,90/mês',
    freeTrial: true,
    features: [
      { text: 'Sistema web com gráficos interativos e gestão financeira', included: true },
      { text: 'Controle de gastos via WhatsApp por texto, áudio e imagem', included: true },
      { text: 'Transações ilimitadas de gastos via WhatsApp', included: true },
      { text: 'Criação de categorias personalizadas para melhor organização', included: true },
      { text: 'Suporte via Whatsapp', included: true },
      { text: 'Gestão individual e personalização de perfil', included: true },
      { text: 'Até 3 contas bancárias', included: true },
      { text: 'Lembretes pelo whatsapp de conta a pagar e receber', included: false },
      { text: 'Gestão compartilhada', included: false },
      { text: 'Exportação de dados', included: false },
      { text: 'Suporte por ligação', included: false },
    ],
  },
  {
    name: 'Zen',
    description: 'Gestão financeira avançada e colaborativa',
    price: 'R$34,90/mês',
    freeTrial: true,
    features: [
      { text: 'Todos os recursos do plano Premium', included: true },
      { text: 'Contas bancárias ilimitadas', included: true },
      { text: 'Gestão compartilhada\n1 Usuário incluso sem custo adicional', included: true },
      { text: 'Suporte humanizado pelo WhatsApp', included: true },
      { text: 'Suporte por ligação', included: true },
      { text: 'Exportação de dados', included: true },
      { text: 'Lembretes pelo whatsapp de conta a pagar e receber', included: true },
    ],
  },
];

export default function Cta() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-6">
      {plans.map((plan) => (
        <div key={plan.name} className="w-full lg:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-white text-2xl font-bold mb-1">{plan.name}</h2>
          <p className="text-zinc-500 mb-3">{plan.description}</p>
          {plan.freeTrial && (
            <div className="text-green-600 font-semibold mb-4">✨ 3 dias grátis ✨</div>
          )}
          <div className="text-white text-3xl font-bold mb-6">{plan.price}</div>

          <div className="space-y-3 mb-6">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                {feature.included ? (
                  <FaCheckCircle className="text-green-600 mt-1" />
                ) : (
                  <FaTimesCircle className="text-red-500 mt-1" />
                )}
                <span className={`text-sm ${feature.included ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-400 line-through'}`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors">
            Testar agora
          </button>
        </div>
      ))}
    </div>
  );
}
