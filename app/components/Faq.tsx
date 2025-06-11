'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'O app é realmente fácil de usar?',
    answer:
      'Sim! Ele foi criado para ser tão simples quanto uma planilha, mas muito mais visual e intuitivo. Em poucos minutos você já começa a organizar sua vida financeira.',
  },
  {
    question: 'Preciso conectar minha conta bancária?',
    answer:
      'Não! Nosso diferencial é justamente permitir total controle manual, com mais segurança, privacidade e foco.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim, você pode cancelar a qualquer momento direto no painel, sem multas ou taxas.',
  },
  {
    question: 'O que a IA faz exatamente?',
    answer:
      'A inteligência artificial analisa seus dados reais e te dá sugestões personalizadas para reduzir dívidas, ajustar gastos e melhorar sua vida financeira.',
  },
  {
    question: 'Os bônus são entregues como?',
    answer:
      'Todos os bônus são liberados imediatamente após a confirmação da sua assinatura Premium.',
  },
  {
    question: 'O plano básico é suficiente?',
    answer:
      'Para começar, sim. Mas os recursos Premium foram feitos para quem realmente quer transformar sua vida financeira com mais controle, clareza e suporte.',
  },
]

export default function FAQSimple() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-slate-100 text-slate-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          FAQ – Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-300 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-5 py-4 bg-white hover:bg-slate-50 transition font-medium"
                onClick={() => toggle(index)}
              >
                {faq.question}
              </button>
              <div
                className={`transition-all duration-300 px-5 text-slate-600 overflow-hidden ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
