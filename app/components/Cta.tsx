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
    <div id="cta" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="w-full lg:w-1/2 bg-slate-100 border border-slate-300 p-8 rounded-2xl shadow-lg transition hover:shadow-2xl"
          >
            <h2 className="text-slate-900 text-2xl font-bold mb-1">{plan.name}</h2>
            <p className="text-slate-500 mb-3">{plan.description}</p>

            {plan.freeTrial && (
              <div className="text-lime-600 font-semibold mb-4">✨ 7 dias grátis ✨</div>
            )}

            <div className="text-3xl font-bold text-slate-800 mb-6">{plan.price}</div>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {feature.included ? (
                    <FaCheckCircle className="text-lime-500 mt-1" />
                  ) : (
                    <FaTimesCircle className="text-red-400 mt-1" />
                  )}
                  <span
                    className={`text-sm ${
                      feature.included
                        ? 'text-slate-700'
                        : 'text-slate-400 line-through'
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={
                plan.price === 'R$29,90/mês'
                  ? 'https://pay.kiwify.com.br/vcfgqQN'
                  : 'https://pay.kiwify.com.br/g60hLVG'
              }
              target="_blank"
            >
              <button className="bg-lime-500 text-white w-full py-3 rounded-xl font-semibold hover:bg-lime-600 transition-colors">
                Testar agora
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
