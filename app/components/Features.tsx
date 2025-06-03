// components/Features.tsx
import { FC } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🧠",
    title: "Assistente com IA 24h respondendo dúvidas e dando orientações",
    description:
      "Conte com um assistente virtual disponível a qualquer hora para esclarecer dúvidas, sugerir estratégias e orientar suas decisões com base no seu perfil e comportamento.",
  },
  {
    icon: "📅",
    title: "Relatórios semanais automáticos para clareza financeira",
    description:
      "Receba relatórios completos toda semana, de forma automática, com análise das suas finanças, destacando pontos fortes e oportunidades de melhoria.",
  },
  {
    icon: "💬",
    title: "Envie perguntas direto no chat e receba análise com base nos seus dados",
    description:
      "Interaja diretamente pelo chat, enviando perguntas ou solicitando insights, e obtenha respostas personalizadas baseadas nos seus dados e histórico.",
  },
  {
    icon: "📈",
    title: "Dashboard com gráficos em tempo real para entender sua evolução",
    description:
      "Acompanhe sua performance e progresso através de gráficos interativos e atualizados em tempo real, facilitando o entendimento da sua evolução e a tomada de decisões.",
  },
];

const Features: FC = () => {
  return (
    <section className="py-4 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        Recursos inteligentes para impulsionar sua organização e evolução
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Automatize análises, receba orientações personalizadas e acompanhe seu progresso com tecnologia de ponta.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center p-4">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
