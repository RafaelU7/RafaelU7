# 🎨 GUIA DE PERSONALIZAÇÃO - PRIME LANDING STUDIO

Este guia ajudará você a personalizar o site conforme suas necessidades.

---

## 📝 INFORMAÇÕES DE CONTATO

### 1. Alterar WhatsApp

**Arquivo**: `src/components/Contact.jsx`

Linha 24:
```javascript
const whatsappNumber = '5511999999999' // Substitua pelo seu número com DDI
```

**Arquivo**: `src/components/Footer.jsx`

Linha 76:
```javascript
<a href="https://wa.me/5511999999999">(11) 99999-9999</a>
```

### 2. Alterar Email

**Arquivo**: `src/components/Footer.jsx`

Linha 71:
```javascript
<a href="mailto:contato@primelandingstudio.com">contato@primelandingstudio.com</a>
```

---

## 🎨 CORES E IDENTIDADE VISUAL

### Alterar Paleta de Cores

**Arquivo**: `src/index.css`

Linhas 9-19:
```css
:root {
  --primary: #2563eb;        /* Azul principal */
  --primary-dark: #1e40af;   /* Azul escuro */
  --secondary: #7c3aed;       /* Roxo */
  --accent: #06b6d4;          /* Cyan */
  /* ... */
}
```

---

## 🖼️ IMAGENS DO PORTFÓLIO

### Substituir Imagens

**Arquivo**: `src/components/Portfolio.jsx`

Linhas 6-61 (array `projects`):

```javascript
{
  title: 'Nome do Projeto',
  niche: 'Nicho',
  description: 'Descrição...',
  image: 'https://sua-imagem-aqui.com/imagem.jpg', // ← Altere aqui
  color: '#06b6d4'
}
```

**Dica**: Use imagens de alta qualidade (800x600px mínimo)

---

## 💬 DEPOIMENTOS

### Alterar Avaliações

**Arquivo**: `src/components/Testimonials.jsx`

Linhas 8-54 (array `testimonials`):

```javascript
{
  name: 'Nome do Cliente',
  role: 'Profissão',
  image: 'https://i.pravatar.cc/150?img=5', // Avatar
  rating: 5,
  text: 'Texto do depoimento...'
}
```

---

## 📋 PERGUNTAS FREQUENTES

### Editar FAQ

**Arquivo**: `src/components/FAQ.jsx`

Linhas 8-49 (array `faqs`):

```javascript
{
  question: 'Sua pergunta aqui?',
  answer: 'Sua resposta aqui...'
}
```

---

## 🎯 SERVIÇOS OFERECIDOS

### Modificar Lista de Serviços

**Arquivo**: `src/components/Services.jsx`

Linhas 6-50 (array `services`):

```javascript
{
  title: 'Nome do Serviço',
  description: 'Descrição do serviço...',
  features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
}
```

---

## 🏢 NOME DA EMPRESA

### Alterar Nome no Site

**Arquivos a modificar**:

1. `src/components/Header.jsx` - Linha 25
2. `src/components/Footer.jsx` - Linha 11
3. `index.html` - Linha 7 (título da página)

```javascript
<span className="logo-text">Seu Nome Aqui</span>
```

---

## 📊 ESTATÍSTICAS DO HERO

### Alterar Números de Impacto

**Arquivo**: `src/components/Hero.jsx`

Linhas 34-46:

```javascript
<div className="hero-stats">
  <div className="stat">
    <div className="stat-number">+150</div>  {/* ← Altere aqui */}
    <div className="stat-label">Projetos Entregues</div>
  </div>
  {/* ... */}
</div>
```

---

## 🌐 REDES SOCIAIS

### Alterar Links das Redes

**Arquivo**: `src/components/Footer.jsx`

Linhas 22-50:

```javascript
<a href="https://instagram.com/seuperfil" /* ... */>
<a href="https://facebook.com/seuperfil" /* ... */>
<a href="https://linkedin.com/seuperfil" /* ... */>
```

---

## 🎭 CRÉDITOS NO FOOTER

### Alterar "Desenvolvido por"

**Arquivo**: `src/components/Footer.jsx`

Linha 93:

```javascript
<p>Desenvolvido por <a href="#" className="credit-link">SEU NOME</a></p>
```

---

## 🚀 TEXTOS E COPYWRITING

### Hero (Título Principal)

**Arquivo**: `src/components/Hero.jsx`

Linhas 23-25:

```javascript
<h1 className="hero-title">
  Seu Título Aqui<br />
  <span className="gradient-text">Texto com Gradiente</span>
</h1>
```

### Sobre a Empresa

**Arquivo**: `src/components/About.jsx`

Linhas 8-10 e 16-57 (conteúdo dos cards)

---

## 🔧 APÓS AS ALTERAÇÕES

### 1. Testar Localmente

```bash
npm run dev
```

Acesse: http://localhost:5173

### 2. Build para Produção

```bash
npm run build
```

### 3. Deploy no Vercel

```bash
vercel --prod
```

---

## 💡 DICAS IMPORTANTES

### ✅ Boas Práticas

1. **Imagens**: Use formatos WebP ou JPEG otimizados
2. **Textos**: Mantenha copywriting direto e persuasivo
3. **Cores**: Mantenha contraste adequado (WCAG)
4. **Mobile**: Sempre teste em dispositivos móveis
5. **Performance**: Mantenha imagens < 500KB

### ⚠️ Cuidados

1. Não altere estrutura dos componentes sem conhecimento React
2. Mantenha backup antes de modificações grandes
3. Teste todas as alterações antes do deploy
4. Preserve a responsividade mobile

---

## 📞 SUPORTE

Caso tenha dúvidas durante a personalização:

- Consulte a `DOCUMENTACAO.md`
- Revise o `README.md`
- Teste localmente antes de fazer deploy

---

## 🎯 CHECKLIST DE PERSONALIZAÇÃO

Antes de colocar no ar, certifique-se de:

- [ ] Alterar número do WhatsApp
- [ ] Alterar email de contato
- [ ] Atualizar nome da empresa
- [ ] Modificar redes sociais
- [ ] Ajustar estatísticas
- [ ] Revisar todos os textos
- [ ] Testar formulário de contato
- [ ] Verificar responsividade
- [ ] Testar performance
- [ ] Fazer deploy final

---

**Desenvolvido por DELTA STUDIO**  
**© 2025 Prime Landing Studio**
