const HowItWorksSteps = () => {
  const steps = [
    {
      id: "01",
      title: "Registre sua vida financeira",
      description: "Adicione entradas e saídas com poucos cliques. Nada de planilhas ou complicação.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "02",
      title: "Visualize sua evolução",
      description: "Veja seus saldos, gráficos e comparativos de forma simples e clara.",
      color: "from-teal-400 to-blue-500",
    },
    {
      id: "03",
      title: "Receba orientações com IA",
      description: "A IA do Wizen analisa seus hábitos e te dá sugestões para economizar e evoluir.",
      color: "from-indigo-500 to-blue-700",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Como funciona o Wizen
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 rounded-full shadow-sm p-4 md:p-6"
            >
              <div
                className={`bg-gradient-to-r ${step.color} text-white font-bold min-w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl shadow`}
              >
                {step.id}
              </div>
              <div className="ml-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
