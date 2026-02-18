/* ================================
   PREMIER IMÓVEIS - JAVASCRIPT
   ================================ */

// Inicialização AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Inicializar componentes
    initNavigation();
    initProperties();
    initTestimonials();
    initScrollEffects();
});

/* ===========================
   NAVIGATION
   =========================== */
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===========================
   PROPERTIES
   =========================== */
function initProperties() {
    // Renderizar imóveis inicialmente
    renderProperties();

    // Event listeners para filtros
    const filterType = document.getElementById('filterType');
    const filterLocation = document.getElementById('filterLocation');
    const filterRooms = document.getElementById('filterRooms');
    const filterPrice = document.getElementById('filterPrice');
    const resetBtn = document.getElementById('resetFilters');

    filterType.addEventListener('change', filterProperties);
    filterLocation.addEventListener('change', filterProperties);
    filterRooms.addEventListener('change', filterProperties);
    filterPrice.addEventListener('change', filterProperties);

    // Reset filters
    resetBtn.addEventListener('click', () => {
        filterType.value = 'all';
        filterLocation.value = 'all';
        filterRooms.value = 'all';
        filterPrice.value = 'all';
        renderProperties();
        
        // Scroll suave até a grid de propriedades
        const propertiesGrid = document.getElementById('propertiesGrid');
        propertiesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

/* ===========================
   TESTIMONIALS SLIDER
   =========================== */
function initTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (!track || !btnPrev || !btnNext || !dotsContainer) return;

    const cards = track.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    const totalCards = cards.length;

    // Criar dots
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateSlider();
    }

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);

    // Auto-slide every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

/* ===========================
   SCROLL EFFECTS
   =========================== */
function initScrollEffects() {
    // Parallax effect for hero video
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero').offsetHeight;
            if (scrolled < heroHeight) {
                heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

/* ===========================
   UTILITY FUNCTIONS
   =========================== */

// Scroll to top button (opcional)
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.classList.add('scroll-to-top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--gold-primary), var(--gold-dark));
        color: var(--black);
        border: none;
        border-radius: 50%;
        font-size: 1.25rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
    `;

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    document.body.appendChild(scrollBtn);
}

// Lazy loading de imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser suporta lazy loading nativo
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback para browsers antigos
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Prevenção de FOUC (Flash of Unstyled Content)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance: Debounce para eventos de scroll e resize
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Analytics de interação (opcional - pode ser conectado ao Google Analytics)
function trackInteraction(category, action, label) {
    // Exemplo de tracking
    console.log(`[Analytics] ${category} - ${action} - ${label}`);
    
    // Se você usar Google Analytics, adicione aqui:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Adicionar tracking aos CTAs do WhatsApp
document.addEventListener('DOMContentLoaded', () => {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', () => {
            trackInteraction('WhatsApp', 'Click', link.textContent.trim());
        });
    });
});

/* ===========================
   ERROR HANDLING
   =========================== */
window.addEventListener('error', (e) => {
    console.error('Erro capturado:', e.error);
    // Aqui você pode enviar erros para um serviço de monitoramento
});

// Handle offline/online status
window.addEventListener('online', () => {
    console.log('Conexão restaurada');
});

window.addEventListener('offline', () => {
    console.log('Sem conexão com a internet');
});

/* ===========================
   ACCESSIBILITY IMPROVEMENTS
   =========================== */

// Adicionar skip to content link
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#imoveis';
    skipLink.textContent = 'Pular para conteúdo principal';
    skipLink.classList.add('skip-link');
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--gold-primary);
        color: var(--black);
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        font-weight: bold;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Trap focus in mobile menu when open
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }

        if (e.key === 'Escape') {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                hamburger.focus();
            }
        }
    });
}

// Inicializar melhorias de acessibilidade
document.addEventListener('DOMContentLoaded', () => {
    addSkipLink();
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        trapFocus(navMenu);
    }
});

/* ===========================
   CONSOLE WELCOME MESSAGE
   =========================== */
console.log('%c🏢 Premier Imóveis ', 'background: #D4AF37; color: #0A0A0A; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cBem-vindo ao código da Premier Imóveis!', 'font-size: 14px; color: #D4AF37;');
console.log('%cSe você está aqui, provavelmente é um desenvolvedor. Entre em contato conosco!', 'font-size: 12px; color: #F8F8F8;');