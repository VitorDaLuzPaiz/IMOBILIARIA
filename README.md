# 🏢 Premier Imóveis - Landing Page Premium

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Responsive](https://img.shields.io/badge/responsive-100%25-brightgreen.svg)

Landing page profissional para captação de leads imobiliários com design premium, filtros inteligentes e múltiplos CTAs para WhatsApp.

---

## 🎯 Visão Geral do Projeto

A **Premier Imóveis** é uma landing page moderna e sofisticada desenvolvida para captação de leads no mercado imobiliário de alto padrão. O site foi projetado com foco em conversão, apresentando imóveis de luxo de forma elegante e profissional.

### ✨ Características Principais

- 🎨 **Design Premium**: Paleta de cores dourado, preto e branco para transmitir luxo e exclusividade
- 📱 **100% Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🔍 **Sistema de Filtros**: Busca avançada por tipo, localização, quartos e preço
- 💬 **Múltiplos CTAs**: Botões de WhatsApp estrategicamente posicionados para maximizar conversões
- 🖼️ **Galeria Premium**: 12 imóveis de luxo com imagens de alta qualidade
- ⚡ **Performance**: Carregamento rápido com lazy loading e otimizações
- ♿ **Acessibilidade**: Seguindo boas práticas de acessibilidade web

---

## 📂 Estrutura do Projeto

```
premier-imoveis/
│
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos premium e responsivos
├── js/
│   ├── data.js            # Banco de dados dos imóveis
│   └── main.js            # JavaScript principal e interatividade
└── README.md              # Documentação completa
```

---

## 🚀 Funcionalidades Implementadas

### ✅ Seção Hero
- Vídeo de fundo em loop de imóvel de luxo
- Título impactante com call-to-action
- Estatísticas da empresa (500+ imóveis, 1200+ clientes, 15+ anos)
- Dois botões CTA: "Quero Meu Imóvel" e "Ver Imóveis"
- Indicador de scroll animado

### ✅ Seção de Benefícios
- 4 cards destacando diferenciais da empresa:
  - Segurança Total
  - Alto Padrão
  - Atendimento VIP
  - Processo Rápido
- Animações ao scroll (AOS Library)
- Ícones Font Awesome

### ✅ Galeria de Imóveis
- **12 imóveis premium** cadastrados
- **Filtros funcionais**:
  - Tipo: Apartamento, Casa, Cobertura, Penthouse
  - Localização: Jardins, Moema, Itaim Bibi, Vila Olímpia, Brooklin
  - Quartos: 2, 3, 4+
  - Preço: Até R$ 1.5M, R$ 1.5M - R$ 3M, Acima de R$ 3M
- **Cards de imóveis** com:
  - Imagem de alta qualidade
  - Badge de destaque
  - Localização
  - Área em m²
  - Número de quartos e vagas
  - Preço formatado
  - Botão WhatsApp direto
- Botão "Limpar Filtros"
- Mensagem quando não há resultados

### ✅ CTA Banner Intermediário
- Banner destacado entre os imóveis
- Convida para ver imóveis exclusivos não listados
- Botão direto para WhatsApp

### ✅ Seção Sobre
- Layout grid com imagem e conteúdo
- Badge de "15 Anos de Excelência"
- 4 características destacadas com ícones
- Botão CTA para WhatsApp

### ✅ CTA Final
- Seção dedicada para conversão final
- Título impactante
- 3 elementos de confiança:
  - 100% Seguro
  - Atendimento Imediato
  - Qualidade Garantida
- Botão grande de WhatsApp

### ✅ Footer Completo
- Logo e descrição da empresa
- Links rápidos para navegação
- Informações de contato:
  - Telefone: (11) 99999-9999
  - Email: contato@premierimoveis.com
  - Endereço: Av. Paulista, 1000 - São Paulo/SP
- Redes sociais (Instagram, Facebook, LinkedIn, WhatsApp)
- Links de política de privacidade e termos de uso

### ✅ Elementos Flutuantes
- **Botão WhatsApp fixo**: Canto inferior direito com animação pulse
- **Menu hambúrguer**: Para navegação mobile
- **Header sticky**: Fixo ao rolar a página

---

## 🎨 Design e Paleta de Cores

### Cores Premium
```css
--gold-primary: #D4AF37   /* Dourado principal */
--gold-light: #F4E4BC     /* Dourado claro */
--gold-dark: #B8941F      /* Dourado escuro */
--black: #0A0A0A          /* Preto profundo */
--dark-gray: #1A1A1A      /* Cinza escuro */
--medium-gray: #2A2A2A    /* Cinza médio */
--white: #FFFFFF          /* Branco puro */
--off-white: #F8F8F8      /* Branco suave */
```

### Tipografia
- **Headings**: Playfair Display (Serif elegante)
- **Body**: Montserrat (Sans-serif moderna)
- Fontes carregadas via Google Fonts

### Ícones
- Font Awesome 6.4.0 (via jsDelivr CDN)

---

## 💻 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos avançados com variáveis CSS, Grid, Flexbox
- **JavaScript Vanilla**: Sem dependências pesadas, código puro e otimizado

### Bibliotecas
- **AOS (Animate On Scroll)**: Animações suaves ao rolar a página
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia premium

### Imagens
- **Unsplash**: Imagens de alta qualidade de imóveis de luxo
---

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 768px (layout completo)
- **Tablet**: 768px - 480px (adaptações de layout)
- **Mobile**: < 480px (layout mobile-first)

### Características Responsivas
- Menu hambúrguer em mobile
- Grid adaptativo para imóveis
- Carrossel touch-friendly
- Botões maiores para touch
- Tipografia escalável
- Imagens otimizadas
- Vídeo hero otimizado para mobile

---

## 🔗 Integração WhatsApp

Todos os botões de CTA estão integrados com WhatsApp Business:

### Número Configurado
```
+55 11 99999-9999
```

### Mensagens Pré-configuradas
1. **Hero CTA**: "Quero conhecer os imóveis de luxo!"
2. **Botão flutuante**: "Olá! Gostaria de mais informações sobre os imóveis de luxo."
3. **Imóvel específico**: "Olá! Gostaria de mais informações sobre o imóvel: [Nome do Imóvel]"
4. **Imóveis exclusivos**: "Gostaria de ver imóveis exclusivos não listados."
6. **Sobre**: "Gostaria de conhecer mais sobre a Premier Imóveis."
7. **CTA Final**: "Quero encontrar meu imóvel dos sonhos!"

### Como Alterar o Número
Busque e substitua `5511999999999` pelo seu número no formato internacional (sem espaços ou caracteres especiais).

---

## 🛠️ Como Personalizar

### Alterar Imóveis
Edite o arquivo `js/data.js`:

```javascript
const properties = [
    {
        id: 1,
        type: 'apartamento',           // apartamento, casa, cobertura, penthouse
        location: 'jardins',           // jardins, moema, itaim, vila-olimpia, brooklin
        title: 'Seu Título',
        description: 'Descrição',
        image: 'URL da imagem',
        area: 180,                     // área em m²
        rooms: 3,                      // número de quartos
        bathrooms: 3,                  // número de banheiros
        parking: 2,                    // vagas de garagem
        price: 2800000,               // preço em reais
        badge: 'Destaque'             // badge do card
    }
];
```

### Alterar Cores
Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --gold-primary: #SUA_COR;
    --black: #SUA_COR;
    /* ... outras cores */
}
```

### Alterar Informações de Contato
1. **Telefone**: Busque `5511999999999` e substitua
2. **Email**: Busque `contato@premierimoveis.com` e substitua
3. **Endereço**: Edite no footer do `index.html`

---

## ⚡ Performance

### Otimizações Implementadas
- ✅ Lazy loading de imagens
- ✅ Vídeo hero otimizado
- ✅ CSS minificável
- ✅ JavaScript modular
- ✅ Animações com CSS transforms (aceleração de hardware)
- ✅ Debounce em eventos de scroll
- ✅ Carregamento assíncrono de bibliotecas

### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: > 90

---

## ♿ Acessibilidade

### Recursos Implementados
- ✅ Atributos ARIA adequados
- ✅ Navegação por teclado completa
- ✅ Skip to content link
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Alt text em todas as imagens
- ✅ Foco visível em elementos interativos
- ✅ Trap focus no menu mobile
- ✅ Labels descritivos

---

## 🔄 Funcionalidades Futuras (Sugestões)

### Melhorias Planejadas
- [ ] Integração com CRM para captura de leads
- [ ] Tour virtual 360° dos imóveis
- [ ] Calculadora de financiamento
- [ ] Comparador de imóveis (lado a lado)
- [ ] Filtro de busca por mapa interativo
- [ ] Chat ao vivo
- [ ] Newsletter com novos imóveis
- [ ] Área de cliente (login)
- [ ] Sistema de favoritos
- [ ] Integração com Google Analytics
- [ ] Pixels de conversão (Facebook/Google Ads)
- [ ] Multi-idioma (PT/EN/ES)

---

## 🐛 Troubleshooting

### Problemas Comuns

**1. Imóveis não aparecem na galeria**
- Verifique se o arquivo `js/data.js` está carregando corretamente
- Abra o console do navegador (F12) para ver erros

**2. Filtros não funcionam**
- Certifique-se de que o `js/main.js` está sendo carregado após o `js/data.js`

**3. Menu mobile não abre**
- Verifique se o JavaScript está habilitado no navegador
- Limpe o cache do navegador

**4. Vídeo hero não carrega**
- Verifique sua conexão de internet
- Alguns navegadores bloqueiam autoplay de vídeos - o fallback funcionará

**5. Animações não aparecem**
- Verifique se a biblioteca AOS está carregando corretamente
- Teste em um navegador moderno (Chrome, Firefox, Safari, Edge)

---

## 📊 Analytics e Tracking

### Eventos Rastreáveis
O código está preparado para integração com Google Analytics:

```javascript
// Exemplo de tracking implementado
trackInteraction('WhatsApp', 'Click', 'Button Label');
```

### Como Integrar Google Analytics
1. Adicione o script do GA no `<head>` do `index.html`
2. Descomente as linhas de tracking no `js/main.js`
3. Substitua `GA_MEASUREMENT_ID` pelo seu ID

---

## 📄 Licença e Uso

Este projeto foi desenvolvido como landing page comercial para a Premier Imóveis.

### Direitos de Uso
- ✅ Uso comercial permitido
- ✅ Modificação permitida
- ✅ Distribuição permitida
- ⚠️ Mantenha os créditos das bibliotecas utilizadas

---

## 👨‍💻 Suporte e Contato

### Suporte Técnico
- **Email**: contato@premierimoveis.com
- **Telefone**: (11) 99999-9999
- **WhatsApp**: [Clique aqui](https://wa.me/5511999999999)

### Redes Sociais
- Instagram: [@premierimoveis](#)
- Facebook: [Premier Imóveis](#)
- LinkedIn: [Premier Imóveis](#)

---

## 📝 Changelog

### v1.0.0 (2024)
- ✨ Lançamento inicial
- 🏢 12 imóveis premium cadastrados
- 🔍 Sistema de filtros completo
- 📱 Responsividade total
- ⚡ Otimizações de performance
- ♿ Melhorias de acessibilidade

---

## 🎉 Agradecimentos

### Recursos Utilizados
- **Unsplash** - Imagens de alta qualidade
- **Font Awesome** - Ícones profissionais
- **Google Fonts** - Tipografia premium
- **AOS Library** - Animações suaves
- **Coverr** - Vídeo hero de background

---

<div align="center">

**🏆 Premier Imóveis - Excelência em Imóveis de Luxo desde 2010**

*Desenvolvido com ❤️ e ☕*

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5511999999999)
[![Website](https://img.shields.io/badge/Website-D4AF37?style=for-the-badge&logo=google-chrome&logoColor=white)](#)

</div>
