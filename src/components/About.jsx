import './About.css'

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Por que escolher a Prime Landing Studio</h2>
        <p className="section-subtitle animate-on-scroll">
          Especialistas em páginas que convertem.<br />
          Design bonito + estratégia de vendas.
        </p>

        <div className="about-content animate-on-scroll">
          <div className="about-main">
            <div className="about-card feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Metodologia Focada em Conversão</h3>
              <p>
                Cada elemento da página é estrategicamente posicionado para guiar o visitante 
                até a ação desejada. Usamos técnicas comprovadas de UX, copywriting persuasivo 
                e gatilhos mentais que realmente funcionam.
              </p>
            </div>

            <div className="about-card feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance e Velocidade Extrema</h3>
              <p>
                Páginas lentas perdem clientes. Desenvolvemos com tecnologias modernas que 
                garantem carregamento ultrarrápido, mesmo em conexões lentas. Seu anúncio 
                não vai desperdiçar investimento com páginas pesadas.
              </p>
            </div>

            <div className="about-card feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Entrega Rápida Sem Perder Qualidade</h3>
              <p>
                Entendemos que tempo é dinheiro. Entregamos projetos completos entre 2 a 5 dias úteis, 
                com qualidade profissional, ajustes inclusos e suporte de 30 dias após a entrega.
              </p>
            </div>
          </div>

          <div className="comparison">
            <h3 className="comparison-title">Landing Page Amadora vs Profissional</h3>
            <div className="comparison-grid">
              <div className="comparison-col amateur">
                <div className="comparison-header">❌ Landing Amadora</div>
                <ul className="comparison-list">
                  <li>Design genérico e sem estratégia</li>
                  <li>Textos fracos que não convencem</li>
                  <li>Carregamento lento (perde clientes)</li>
                  <li>Não funciona bem no celular</li>
                  <li>Sem integração com ferramentas</li>
                  <li>Baixíssima taxa de conversão</li>
                </ul>
              </div>

              <div className="comparison-col professional">
                <div className="comparison-header">✅ Landing Profissional</div>
                <ul className="comparison-list">
                  <li>Design estratégico focado em vendas</li>
                  <li>Copywriting persuasivo e direto</li>
                  <li>Performance extrema (2s ou menos)</li>
                  <li>Perfeito em todos os dispositivos</li>
                  <li>Integrado com WhatsApp, CRM e mais</li>
                  <li>Até 300% mais conversões</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
