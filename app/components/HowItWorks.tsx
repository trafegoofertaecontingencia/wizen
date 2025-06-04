// components/HowItWorks.tsx
const HowItWorks = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 mt-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Como funciona o Wizen? 
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Em poucos passos, você assume o controle da sua vida financeira com inteligência e praticidade.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">📝Cadastre-se</h3>
            <p className="text-gray-600">Crie sua conta em segundos e personalize seu perfil financeiro.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">💰 2. Registre sua vida financeira</h3>
            <p className="text-gray-600">Adicione entradas e saídas com poucos cliques — o Wizen organiza tudo automaticamente.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📊 3. Acompanhe sua evolução</h3>
            <p className="text-gray-600">Veja gráficos intuitivos, saldos e relatórios atualizados em tempo real.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🤖 4. Receba orientações da IA</h3>
            <p className="text-gray-600">Com base nos seus dados, a IA oferece dicas e análises personalizadas para você economizar e prosperar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
