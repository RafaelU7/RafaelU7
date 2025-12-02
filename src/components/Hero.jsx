import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-badge">
          <span className="badge-icon">✦</span>
          <span>Transformamos visitantes em clientes</span>
        </div>
        
        <h1 className="hero-title">
          Landing pages profissionais que aumentam<br />suas vendas, <span className="gradient-text">conversões e autoridade</span>
        </h1>
        
        <p className="hero-subtitle">
          Construímos páginas rápidas, modernas e pensadas para converter<br />
          — ideais para negócios locais, infoprodutos e prestadores de serviços.
        </p>
        
        <div className="hero-cta">
          <button className="btn btn-primary btn-lg" onClick={scrollToContact} aria-label="Solicitar landing page profissional">
            Quero uma landing page profissional
          </button>
          <button className="btn btn-outline btn-lg" onClick={() => {
            const element = document.getElementById('portfolio')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }} aria-label="Ver exemplos de páginas">
            Ver exemplos de páginas
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">+150</div>
            <div className="stat-label">Projetos Entregues</div>
          </div>
          <div className="stat">
            <div className="stat-number">2-5 dias</div>
            <div className="stat-label">Entrega Rápida</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
