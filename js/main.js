/* ================================
   PREMIER IMÓVEIS - JAVASCRIPT
   Versão 2.0
   ================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({ duration: 800, once: true, offset: 80 });

    initNavigation();
    initProperties();
    initTestimonials();
    initScrollEffects();
    createScrollToTop();
    initWhatsAppTracking();
    addSkipLink();

    const navMenu = document.getElementById('navMenu');
    if (navMenu) trapFocus(navMenu);

    document.body.classList.add('js-loaded');
});

/* ===========================
   NAVIGATION
   =========================== */
function initNavigation() {
    const hamburger  = document.getElementById('hamburger');
    const navMenu    = document.getElementById('navMenu');
    const navLinks   = document.querySelectorAll('.nav-link');
    const header     = document.querySelector('.header');
    const overlay    = document.getElementById('navOverlay');

    if (!hamburger || !navMenu || !header) return;

    // Abrir / fechar menu mobile
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('active');
        toggleMenu(!isOpen);
    });

    function toggleMenu(open) {
        hamburger.classList.toggle('active', open);
        navMenu.classList.toggle('active', open);
        if (overlay) overlay.classList.toggle('active', open);
        // Bloquear scroll do body sem causar layout shift
        document.body.style.overflow = open ? 'hidden' : '';
    }

    // Fechar ao clicar em link
    navLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Fechar ao clicar no overlay
    if (overlay) {
        overlay.addEventListener('click', () => toggleMenu(false));
    }

    // Fechar ao clicar fora
    document.addEventListener('click', e => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // Sticky header
    const scrollHandler = () => {
        header.classList.toggle('scrolled', window.scrollY > 80);
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    // Smooth scroll em âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = header.offsetHeight + 8;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - offset,
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
    renderProperties();

    const selects = ['filterType','filterLocation','filterRooms','filterPrice'];
    selects.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', filterProperties);
    });

    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            selects.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = 'all';
            });
            renderProperties();

            const grid = document.getElementById('propertiesGrid');
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

/* ===========================
   TESTIMONIALS SLIDER
   =========================== */
function initTestimonials() {
    const track        = document.getElementById('testimonialsTrack');
    const btnPrev      = document.getElementById('btnPrev');
    const btnNext      = document.getElementById('btnNext');
    const dotsContainer = document.getElementById('sliderDots');

    if (!track || !btnPrev || !btnNext || !dotsContainer) return;

    const cards      = track.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    let current      = 0;
    let autoSlide    = null;

    // Criar dots
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        dot.setAttribute('aria-label', `Depoimento ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    function update() {
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goTo(index) {
        current = (index + totalCards) % totalCards;
        update();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    btnNext.addEventListener('click', next);
    btnPrev.addEventListener('click', prev);

    // Auto-slide
    function startAuto() { autoSlide = setInterval(next, 5500); }
    function stopAuto()  { clearInterval(autoSlide); }

    startAuto();

    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', startAuto);

    // Touch / swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    }, { passive: true });

    // Teclado (somente quando slider está visível)
    document.addEventListener('keydown', e => {
        const section = document.querySelector('.testimonials');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (e.key === 'ArrowLeft')  prev();
            if (e.key === 'ArrowRight') next();
        }
    });
}

/* ===========================
   SCROLL EFFECTS
   =========================== */
function initScrollEffects() {
    // Parallax leve no hero (apenas desktop)
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled   = window.pageYOffset;
            const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;
            if (scrolled < heroHeight) {
                heroVideo.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        }, { passive: true });
    }

    // Observer AOS manual (fallback)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('aos-animate');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

/* ===========================
   SCROLL TO TOP
   =========================== */
function createScrollToTop() {
    const btn = document.createElement('button');
    btn.innerHTML   = '<i class="fas fa-arrow-up"></i>';
    btn.className   = 'scroll-to-top';
    btn.setAttribute('aria-label', 'Voltar ao topo');

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 500 ? 'flex' : 'none';
    }, { passive: true });

    document.body.appendChild(btn);
}

/* ===========================
   WHATSAPP TRACKING
   =========================== */
function initWhatsAppTracking() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            trackInteraction('WhatsApp', 'Click', link.textContent.trim());
        });
    });
}

/* ===========================
   ACESSIBILIDADE
   =========================== */
function addSkipLink() {
    const skip = document.createElement('a');
    skip.href      = '#imoveis';
    skip.textContent = 'Pular para o conteúdo principal';
    skip.className = 'skip-link';
    Object.assign(skip.style, {
        position:   'absolute',
        top:        '-50px',
        left:       '0',
        background: 'var(--blue-vivid)',
        color:      '#fff',
        padding:    '10px 16px',
        textDecoration: 'none',
        zIndex:     '10000',
        fontWeight: '700',
        borderRadius: '0 0 8px 0',
        transition: 'top 0.2s'
    });
    skip.addEventListener('focus', () => { skip.style.top = '0'; });
    skip.addEventListener('blur',  () => { skip.style.top = '-50px'; });
    document.body.insertBefore(skip, document.body.firstChild);
}

function trapFocus(element) {
    element.addEventListener('keydown', e => {
        const focusable = [...element.querySelectorAll(
            'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )];
        if (!focusable.length) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) {
                last.focus(); e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === last) {
                first.focus(); e.preventDefault();
            }
        }

        if (e.key === 'Escape') {
            const hamburger = document.getElementById('hamburger');
            const navMenu   = document.getElementById('navMenu');
            const overlay   = document.getElementById('navOverlay');
            if (navMenu?.classList.contains('active')) {
                hamburger?.classList.remove('active');
                navMenu.classList.remove('active');
                overlay?.classList.remove('active');
                document.body.style.overflow = '';
                hamburger?.focus();
            }
        }
    });
}

/* ===========================
   ANALYTICS (stub)
   =========================== */
function trackInteraction(category, action, label) {
    console.log(`[Analytics] ${category} › ${action} › ${label}`);
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, { event_category: category, event_label: label });
    // }
}

/* ===========================
   ERROS & CONEXÃO
   =========================== */
window.addEventListener('error', e => console.error('Erro capturado:', e.error));
window.addEventListener('online',  () => console.info('Conexão restaurada'));
window.addEventListener('offline', () => console.warn('Sem conexão com a internet'));
window.addEventListener('load',    () => document.body.classList.add('loaded'));

/* ===========================
   CONSOLE WELCOME
   =========================== */
console.log('%c🏢 Premier Imóveis ', 'background:#1E5FD8;color:#fff;font-size:18px;font-weight:bold;padding:10px 16px;border-radius:6px;');
console.log('%cBem-vindo ao código da Premier Imóveis! v2.0', 'font-size:13px;color:#F0A500;');
