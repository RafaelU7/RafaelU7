import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    niche: '',
    objective: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `
*Novo Orçamento - Prime Landing Studio*

*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Nicho/Área:* ${formData.niche}
*Objetivo:* ${formData.objective}
*Mensagem:* ${formData.message}
    `.trim()

    // Abrir WhatsApp (substitua pelo número real da empresa)
    const whatsappNumber = '5511999999999' // Substitua pelo número real
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
    
    // Reset form após 3 segundos
    setTimeout(() => {
      setFormData({
        name: '',
        whatsapp: '',
        niche: '',
        objective: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Solicite seu orçamento</h2>
        <p className="section-subtitle animate-on-scroll">
          Proposta personalizada em 24 horas.<br />
          Sem compromisso. 100% gratuito.
        </p>

        <div className="contact-content animate-on-scroll">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>Resposta rápida e atendimento personalizado</p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="info-link">
                (11) 99999-9999
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>Envie sua mensagem a qualquer momento</p>
              <a href="mailto:contato@primelandingstudio.com" className="info-link">
                contato@primelandingstudio.com
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta</p>
              <p className="info-link">9h às 18h</p>
            </div>

            <div className="contact-benefits">
              <h4>Por que nos escolher?</h4>
              <ul>
                <li>✓ Resposta em até 24h</li>
                <li>✓ Orçamento sem compromisso</li>
                <li>✓ Projetos personalizados</li>
                <li>✓ Entrega rápida garantida</li>
                <li>✓ Suporte pós-entrega</li>
              </ul>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp *</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="niche">Nicho/Área de Atuação *</label>
              <input
                type="text"
                id="niche"
                name="niche"
                value={formData.niche}
                onChange={handleChange}
                required
                placeholder="Ex: Fisioterapia, E-commerce, Curso Online..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="objective">Objetivo da Página *</label>
              <select
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="Captar Leads">Captar Leads</option>
                <option value="Vender Produto">Vender Produto</option>
                <option value="Vender Serviço">Vender Serviço</option>
                <option value="Agendamento">Agendamento</option>
                <option value="Anúncios">Página para Anúncios</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Conte-nos Mais Sobre Seu Projeto</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Descreva brevemente o que você precisa..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg btn-submit"
              aria-label={submitted ? 'Formulário enviado com sucesso' : 'Solicitar orçamento agora'}
            >
              {submitted ? '✓ Enviado com Sucesso!' : 'Solicitar Orçamento Agora'}
            </button>

            <p className="form-note">
              * Campos obrigatórios. Seus dados estão seguros e não serão compartilhados.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
