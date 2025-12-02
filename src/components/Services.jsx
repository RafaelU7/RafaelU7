import './Services.css'

function Services() {
  const services = [
    {
      title: 'Landing Pages de Conversão',
      description: 'Páginas completas focadas em capturar leads e gerar vendas. Design estratégico que guia o visitante até a ação desejada.',
      features: ['Design profissional', 'Copywriting persuasivo', 'Integração com CRM', 'Otimização de conversão']
    },
    {
      title: 'Páginas para Anúncios',
      description: 'Landing pages otimizadas especificamente para campanhas do Google Ads e Meta Ads, maximizando o ROI.',
      features: ['Otimização para anúncios', 'A/B Testing', 'Pixel tracking', 'Alta performance']
    },
    {
      title: 'Páginas de Captura',
      description: 'Páginas focadas em capturar contatos qualificados para sua lista de email ou WhatsApp.',
      features: ['Formulários estratégicos', 'Iscas digitais', 'Integração automática', 'Follow-up incluído']
    },
    {
      title: 'Páginas de Vendas',
      description: 'Sales pages completas com estrutura VSL, depoimentos, garantias e todos os elementos de persuasão.',
      features: ['Estrutura VSL', 'Gatilhos mentais', 'Checkout integrado', 'Upsell e downsell']
    },
    {
      title: 'Mini Sites',
      description: 'Sites de 3 a 5 páginas para empresas que precisam de presença digital profissional rapidamente.',
      features: ['Múltiplas páginas', 'Menu navegável', 'SEO básico', 'Responsivo total']
    },
    {
      title: 'Sites para Negócios Locais',
      description: 'Websites completos para empresas locais: restaurantes, clínicas, salões, academias e mais.',
      features: ['Google Maps integrado', 'WhatsApp direto', 'Horário de funcionamento', 'Galeria de fotos']
    },
    {
      title: 'Otimização de Páginas',
      description: 'Análise e melhoria de páginas existentes para aumentar a taxa de conversão e performance.',
      features: ['Auditoria completa', 'Melhorias de UX', 'Otimização de velocidade', 'Testes A/B']
    },
    {
      title: 'Consultoria de Conversão',
      description: 'Sessão estratégica para analisar sua página e identificar pontos de melhoria na conversão.',
      features: ['Análise detalhada', 'Relatório completo', 'Plano de ação', 'Suporte incluso']
    }
  ]

  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Como funciona</h2>
        <p className="section-subtitle animate-on-scroll">
          Soluções completas para o seu negócio digital.<br />
          Design estratégico focado em resultados.
        </p>

        <div className="services-grid stagger-animation">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-box">
            <h3>Não encontrou o que procura?</h3>
            <p>Entre em contato e vamos criar uma solução personalizada para você.</p>
            <button className="btn btn-primary" onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}>
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
