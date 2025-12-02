import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">Prime Landing Studio</span>
        </div>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Navegação principal">
          <a onClick={() => scrollToSection('home')} className="nav-link" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('home')}>Início</a>
          <a onClick={() => scrollToSection('about')} className="nav-link" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('about')}>Sobre</a>
          <a onClick={() => scrollToSection('services')} className="nav-link" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('services')}>Serviços</a>
          <a onClick={() => scrollToSection('portfolio')} className="nav-link" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('portfolio')}>Portfólio</a>
          <a onClick={() => scrollToSection('testimonials')} className="nav-link" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('testimonials')}>Avaliações</a>
          <a onClick={() => scrollToSection('faq')} className="nav-link" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('faq')}>FAQ</a>
          <a onClick={() => scrollToSection('contact')} className="btn btn-primary nav-cta" role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('contact')} aria-label="Solicitar orçamento">Solicitar Orçamento</a>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
