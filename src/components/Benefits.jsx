import './Benefits.css'

function Benefits() {
  const benefits = [
    {
      icon: '📈',
      title: 'Aumenta Conversão em Até 300%',
      description: 'Design estratégico e copywriting persuasivo que transformam visitantes em clientes pagantes.'
    },
    {
      icon: '💰',
      title: 'Otimização para Anúncios',
      description: 'Páginas otimizadas para Google Ads e Meta Ads, maximizando o ROI dos seus investimentos.'
    },
    {
      icon: '⚡',
      title: 'Carregamento Ultrarrápido',
      description: 'Performance extrema garante que você não perca clientes por páginas lentas.'
    },
    {
      icon: '🎨',
      title: 'Design Profissional',
      description: 'Visual moderno e sofisticado que transmite credibilidade e autoridade imediata.'
    },
    {
      icon: '✍️',
      title: 'Copywriting Estratégico',
      description: 'Textos persuasivos com gatilhos mentais que conduzem o visitante até a conversão.'
    },
    {
      icon: '📱',
      title: 'Responsividade Total',
      description: 'Funciona perfeitamente em todos os dispositivos: desktop, tablet e smartphone.'
    },
    {
      icon: '🔗',
      title: 'Integrações Profissionais',
      description: 'WhatsApp, CRM, automações de email, analytics e todas as ferramentas que você precisa.'
    },
    {
      icon: '🎯',
      title: 'Foco 100% em Resultados',
      description: 'Cada elemento é projetado com um único objetivo: converter visitantes em clientes.'
    }
  ]

  return (
    <section className="section benefits" id="benefits">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Benefícios do nosso serviço</h2>
        <p className="section-subtitle animate-on-scroll">
          Design estratégico + copywriting persuasivo.<br />
          Tecnologia que vende.
        </p>

        <div className="benefits-grid stagger-animation">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
