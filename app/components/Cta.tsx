import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    description: 'Comece a organizar suas finanças',
    price: 'R$29,90/mês',
    freeTrial: true,
    features: [
      { text: 'Acesso completo ao app', included: true },
      { text: 'Diagnóstico financeiro com IA', included: true },
      { text: 'Relatórios automáticos semanais', included: true },
      { text: 'Chat com IA 24h por dia', included: true },

      { text: 'Cashback de R$10,00 na renovação', included: false },
      { text: 'Etiqueta de plano mais vantajoso', included: false },
      { text: 'Acesso garantido por 12 meses sem preocupações', included: false },
    ],
  },
  {
    name: 'Premium',
    description: 'Gestão financeira avançada e colaborativa',
    price: 'R$89,90/semestre',
    freeTrial: true,
    features: [
      { text: 'Acesso completo ao app', included: true },
      { text: 'Diagnóstico financeiro com IA', included: true },
      { text: 'Relatórios automáticos semanais', included: true },
      { text: 'Chat com IA 24h por dia', included: true },

      { text: 'Cashback de R$10,00 na renovação', included: true },
      { text: 'Etiqueta de plano mais vantajoso', included: true },
      { text: 'Acesso garantido por 12 meses sem preocupações', included: true },
    ],
  },
];

export default function Cta() {
  return (
    <div id='cta' className="flex flex-col lg:flex-row justify-center items-start gap-8 p-6">
      {plans.map((plan) => (
        <div key={plan.name} className="w-full lg:w-1/2 bg-zinc-900 p-6 rounded-2xl shadow-xl border  border-zinc-700">
          <h2 className="text-white text-2xl font-bold mb-1">{plan.name}</h2>
          <p className="text-zinc-500 mb-3">{plan.description}</p>
          {plan.freeTrial && (
            <div className="text-green-600 font-semibold mb-4">✨ 7 dias grátis ✨</div>
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
                <span className={`text-sm ${feature.included ? 'text-zinc-200' : 'text-zinc-400 line-through'}`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {plan.price === "R$29,90/mês" ? <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors">
            <Link href="https://pay.kiwify.com.br/vcfgqQN">Testar agora</Link>
          </button>
          :
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors">
            <Link href="https://pay.kiwify.com.br/g60hLVG">Testar agora</Link>
          </button>}
        </div>
      ))}
    </div>
  );
}
