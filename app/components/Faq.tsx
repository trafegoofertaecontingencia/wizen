'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'O que é o Controle Financeiro App?',
    answer: 'É um aplicativo gratuito que ajuda você a organizar suas finanças pessoais de forma simples e eficiente. Com ele, você pode registrar receitas e despesas, criar orçamentos, acompanhar metas e visualizar relatórios detalhados.',
  },
  {
    question: 'Preciso conectar minha conta bancária?',
    answer: 'Não. Você pode usar o app manualmente, cadastrando suas transações. Mas, se preferir, é possível integrar com seu banco para importar dados automaticamente com segurança.',
  },
  {
    question: 'Posso criar metas financeiras?',
    answer: 'Sim! Você pode definir metas como “economizar R$ 500 por mês” ou “gastar no máximo R$ 300 com alimentação”. O app acompanha seu progresso e envia alertas para manter você no caminho certo.',
  },
  {
    question: 'O app é gratuito?',
    answer: 'Sim, o Controle Financeiro App é gratuito. Oferecemos também uma versão premium com recursos extras, como relatórios avançados, sincronização multi-dispositivo e exportação de dados.',
  },
  {
    question: 'Meus dados estão seguros?',
    answer: 'Totalmente. Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança para proteger suas informações financeiras.',
  },
  {
    question: 'O app funciona offline?',
    answer: 'Sim! Você pode registrar transações mesmo sem internet. Os dados serão sincronizados automaticamente assim que você se conectar novamente.',
  },
  {
    question: 'Quais plataformas são suportadas?',
    answer: 'O Controle Financeiro App está disponível para Android, iOS e também em versão web para desktop.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-gray-800 font-medium text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`mt-2 text-gray-600 text-base transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
