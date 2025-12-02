import { useState } from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana Costa',
      role: 'Proprietária - Estética Facial',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'A landing page que a Prime criou superou todas as minhas expectativas. Em apenas 2 semanas, dobrei o número de agendamentos. O design é lindo e o WhatsApp integrado funciona perfeitamente. Investimento que se pagou em dias!'
    },
    {
      name: 'Rafael Mendes',
      role: 'Personal Trainer',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'Profissionalismo total! Me entregaram uma página completa em 4 dias com tudo funcionando. Os textos são incríveis, convencem mesmo. Já captei mais de 50 alunos através da página. Recomendo demais!'
    },
    {
      name: 'Juliana Ferreira',
      role: 'Advogada',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'Precisava de um site profissional rápido e a Prime entregou exatamente o que eu queria. A página transmite credibilidade e já recebi vários contatos de clientes qualificados. Suporte impecável, responderam todas as minhas dúvidas.'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Dono de Hamburgueria',
      image: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      text: 'Fiz a landing page para delivery e os pedidos explodiram! A página carrega super rápido no celular e o botão do WhatsApp facilita demais. Melhor investimento que fiz para o negócio. Equipe nota 10!'
    },
    {
      name: 'Amanda Silva',
      role: 'Terapeuta Holística',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'Estava perdida sem saber como divulgar meu trabalho online. A Prime criou uma página linda que passa exatamente a sensação de cuidado e bem-estar que eu queria. As marcações de sessão triplicaram!'
    },
    {
      name: 'Bruno Andrade',
      role: 'Criador de Curso Online',
      image: 'https://i.pravatar.cc/150?img=14',
      rating: 5,
      text: 'Lancei meu curso através da página que eles criaram e faturei R$ 87 mil na primeira semana. A estrutura de vendas é perfeita, os gatilhos mentais funcionam de verdade. Já estou fechando o segundo projeto com eles.'
    },
    {
      name: 'Patrícia Souza',
      role: 'Dentista',
      image: 'https://i.pravatar.cc/150?img=20',
      rating: 5,
      text: 'Que diferença faz ter uma página profissional! Antes eu tinha um site amador que não convertia nada. Agora recebo contatos de pacientes todos os dias. A equipe é super atenciosa e fez todos os ajustes que pedi.'
    }
  ]

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title animate-on-scroll">O que nossos clientes dizem</h2>
        <p className="section-subtitle animate-on-scroll">
          Resultados reais de quem confiou.<br />
          Páginas que viraram máquinas de conversão.
        </p>

        <div className="testimonials-grid stagger-animation">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={`Foto de ${testimonial.name}, ${testimonial.role}`} 
                  className="testimonial-image"
                  loading="lazy"
                  width="150"
                  height="150"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="testimonials-summary">
          <div className="summary-item">
            <div className="summary-number">+150</div>
            <div className="summary-label">páginas desenvolvidas</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">+300%</div>
            <div className="summary-label">aumento médio de conversão</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">5 anos</div>
            <div className="summary-label">de experiência</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">98%</div>
            <div className="summary-label">satisfação dos clientes</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
