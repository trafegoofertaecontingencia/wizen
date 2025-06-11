import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    description: "Ideal para começar com o essencial.",
    price: "R$29,90/mês",
    freeTrial: true,
    features: [
      { text: "Registro de receitas e despesas", included: true },
      { text: "Dashboard com gráficos simples", included: true },
      { text: "1 meta ativa - Até 3 contas a pagar", included: true },
      { text: "Suporte por e-mail", included: true },
      { text: "Bônus exclusivos", included: false },
      { text: "Consultor financeiro com IA", included: false },
      { text: "Filtros personalizados", included: false },
    ],
  },
  {
    name: "Premium",
    description: "Tudo que você precisa para transformar sua vida financeira",
    price: "R$89,90/semestre",
    freeTrial: true,
    features: [
      { text: "Registro de receitas e despesas", included: true },
      { text: "Dashboard com gráficos simples", included: true },
      { text: "Meta ativas ilimitadas", included: true },
      { text: "Programação de contas a pagar ilimitadas", included: true },
      { text: "Bônus exclusivos", included: true },
      { text: "Consultor financeiro com IA 24hr", included: true },
      { text: "Filtros personalizados de data (ex: dia 10 a 09)", included: true },
      { text: "Suporte  prioritário via chat", included: true },
    ],
  },
];

export default function Cta() {
  return (
    <div id="cta" className="bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="w-full lg:w-1/2 bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-lg transition hover:shadow-2xl"
          >
            <h2 className="text-white text-2xl font-bold mb-1">
              {plan.name}
            </h2>
            <p className="text-slate-400 mb-3">{plan.description}</p>

            {plan.freeTrial && (
              <div className="text-lime-400 font-semibold mb-4">
                ✨ 7 dias grátis ✨
              </div>
            )}

            <div className="text-3xl font-bold text-white mb-6">
              {plan.price}
            </div>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {feature.included ? (
                    <FaCheckCircle className="text-lime-400 mt-1" />
                  ) : (
                    <FaTimesCircle className="text-red-400 mt-1" />
                  )}
                  <span
                    className={`text-sm ${
                      feature.included
                        ? "text-slate-200"
                        : "text-slate-500 line-through"
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={
                plan.price === "R$29,90/mês"
                  ? "https://pay.kiwify.com.br/vcfgqQN"
                  : "https://pay.kiwify.com.br/g60hLVG"
              }
              target="_blank"
            >
              <button className="bg-lime-500 text-slate-900 w-full py-3 rounded-xl font-semibold hover:bg-lime-400 transition-colors">
                Testar agora
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
