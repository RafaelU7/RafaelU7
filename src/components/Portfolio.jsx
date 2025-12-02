import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      title: 'FisioLife Clinic',
      niche: 'Fisioterapia',
      description: 'Landing page para clínica de fisioterapia especializada em reabilitação. Aumento de 280% nas marcações de consulta.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      color: '#06b6d4'
    },
    {
      title: 'Burger Master',
      niche: 'Hamburgueria',
      description: 'Site delivery para hamburgueria gourmet. Integração com WhatsApp resultou em 45% mais pedidos.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
      color: '#f59e0b'
    },
    {
      title: 'Style Boutique',
      niche: 'Loja de Roupas',
      description: 'E-commerce de moda feminina com catálogo completo. Conversão de 8,5% em vendas diretas.',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
      color: '#ec4899'
    },
    {
      title: 'FitPro Training',
      niche: 'Personal Trainer',
      description: 'Landing page para personal trainer com venda de planos de treino. 150+ clientes captados em 3 meses.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      color: '#10b981'
    },
    {
      title: 'Bella Essence',
      niche: 'Salão de Beleza',
      description: 'Site com sistema de agendamento online para salão de beleza. Redução de 70% no tempo de agendamento.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
      color: '#8b5cf6'
    },
    {
      title: 'Marketing Pro Academy',
      niche: 'Curso Online',
      description: 'Página de vendas para curso de marketing digital. R$ 180 mil em vendas na primeira semana de lançamento.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      color: '#2563eb'
    },
    {
      title: 'Clean Express',
      niche: 'Empresa de Limpeza',
      description: 'Landing page para empresa de limpeza residencial e comercial. 320% de aumento em solicitações de orçamento.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      color: '#14b8a6'
    },
    {
      title: 'Mente Serena',
      niche: 'Psicoterapia',
      description: 'Site profissional para psicóloga com blog e sistema de marcação. Credibilidade e autoridade instantânea.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
      color: '#6366f1'
    }
  ]

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Portfólio de projetos</h2>
        <p className="section-subtitle animate-on-scroll">
          Trabalhos desenvolvidos com estratégia.<br />
          Cada projeto é único para o nicho específico.
        </p>

        <div className="portfolio-grid stagger-animation">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
                <img 
                  src={project.image} 
                  alt={`Landing page profissional para ${project.title} - ${project.niche}`} 
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="portfolio-overlay">
                  <button className="btn-view" aria-label={`Ver demonstra\u00e7\u00e3o do projeto ${project.title}`}>Ver Demonstra\u00e7\u00e3o</button>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-badge" style={{ background: `${project.color}22`, color: project.color }}>
                  {project.niche}
                </div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Seu projeto pode ser o próximo case de sucesso!</p>
          <button className="btn btn-primary" onClick={() => {
            const element = document.getElementById('contact')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}>
            Começar Meu Projeto
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
