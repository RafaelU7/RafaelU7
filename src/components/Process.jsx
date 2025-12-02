import './Process.css'

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Você Envia o Briefing',
      description: 'Preenche um formulário simples contando sobre seu negócio, objetivos e o que espera da página. Quanto mais detalhes, melhor!',
      icon: '📝'
    },
    {
      number: '02',
      title: 'Criamos o Design',
      description: 'Nossa equipe desenvolve o design completo e estratégico, incluindo layout, cores, imagens e copywriting persuasivo.',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Ajustamos Juntos',
      description: 'Você recebe a primeira versão e pode solicitar quantos ajustes precisar. Trabalhamos até você aprovar 100%.',
      icon: '🔄'
    },
    {
      number: '04',
      title: 'Página Publicada',
      description: 'Publicamos a página otimizada, configuramos todas as integrações e fazemos os testes finais de performance.',
      icon: '🚀'
    },
    {
      number: '05',
      title: 'Suporte de 30 Dias',
      description: 'Oferecemos suporte completo por 30 dias após a entrega para qualquer dúvida, ajuste ou problema técnico.',
      icon: '💬'
    }
  ]

  return (
    <section className="section process" id="process">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Processo: passo a passo do projeto</h2>
        <p className="section-subtitle animate-on-scroll">
          Simples, transparente e eficiente.<br />
          Você acompanha cada etapa.
        </p>

        <div className="process-timeline animate-on-scroll">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="process-guarantee">
          <div className="guarantee-badge">✓</div>
          <div className="guarantee-content">
            <h3>Garantia de Satisfação</h3>
            <p>
              Trabalhamos até você aprovar 100% do projeto. Ajustes ilimitados durante o desenvolvimento 
              e 30 dias de suporte após a entrega. Seu sucesso é nossa prioridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
