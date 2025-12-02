import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quanto tempo leva para criar minha landing page?',
      answer: 'O prazo médio é de 2 a 5 dias úteis, dependendo da complexidade do projeto. Projetos mais simples podem ser entregues em até 48 horas. Sempre trabalhamos com prazos claros e transparentes.'
    },
    {
      question: 'Posso solicitar ajustes depois da entrega?',
      answer: 'Sim! Durante o desenvolvimento, os ajustes são ilimitados até sua aprovação. Após a entrega, você tem 30 dias de suporte para qualquer ajuste ou correção necessária.'
    },
    {
      question: 'A landing page vem com domínio e hospedagem?',
      answer: 'A página é entregue pronta para ser publicada. Você pode usar seu próprio domínio e hospedagem, ou podemos recomendar opções econômicas e confiáveis. Também oferecemos o serviço de hospedagem se preferir.'
    },
    {
      question: 'O site funciona perfeitamente no celular?',
      answer: 'Com certeza! Todas as páginas são 100% responsivas e otimizadas para mobile. Testamos em diversos dispositivos para garantir que a experiência seja perfeita em qualquer tela.'
    },
    {
      question: 'Vocês fazem integração com WhatsApp?',
      answer: 'Sim! Integramos botão de WhatsApp fixo e flutuante, links diretos para conversa, e podemos configurar mensagens automáticas personalizadas. É uma das integrações mais solicitadas.'
    },
    {
      question: 'A página vai carregar rápido?',
      answer: 'Absolutamente! Performance é nossa prioridade. Usamos as melhores práticas de otimização para garantir carregamento em 2 segundos ou menos. Páginas rápidas convertem muito mais.'
    },
    {
      question: 'Vocês criam as imagens e textos da página?',
      answer: 'Sim! Fornecemos copywriting profissional persuasivo e ajudamos na seleção ou criação de imagens. Se você tiver conteúdo próprio (fotos, textos), podemos usar e otimizar também.'
    },
    {
      question: 'Fazem gestão de tráfego e anúncios?',
      answer: 'Nosso foco é criar a landing page. Porém, podemos recomendar especialistas em tráfego de confiança e garantir que sua página esteja perfeitamente otimizada para receber anúncios.'
    },
    {
      question: 'Qual é o investimento para criar uma landing page?',
      answer: 'O investimento varia de acordo com a complexidade do projeto, funcionalidades e prazo. Entre em contato para receber um orçamento personalizado e transparente sem compromisso.'
    },
    {
      question: 'Oferecem garantia do trabalho?',
      answer: 'Sim! Garantimos 30 dias de suporte após a entrega para qualquer ajuste técnico ou dúvida. Trabalhamos até você aprovar 100% do projeto antes da entrega final.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Perguntas frequentes</h2>
        <p className="section-subtitle animate-on-scroll">
          Dúvidas sobre serviços e processo.<br />
          Não achou sua resposta? Entre em contato.
        </p>

        <div className="faq-container animate-on-scroll">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon" aria-hidden="true">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Ainda tem dúvidas?</h3>
          <p>Entre em contato e teremos prazer em responder todas as suas perguntas.</p>
          <button className="btn btn-primary" onClick={() => {
            const element = document.getElementById('contact')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}>
            Falar com Nossa Equipe
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
