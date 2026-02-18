/* ================================
   PREMIER IMÓVEIS - DADOS
   ================================ */

// Database de Imóveis Premium
const properties = [
    {
        id: 1,
        type: 'apartamento',
        location: 'jardins',
        title: 'Apartamento de Luxo',
        description: 'Apartamento sofisticado com acabamento de alto padrão',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1470',
        area: 180,
        rooms: 3,
        bathrooms: 3,
        parking: 2,
        price: 2800000,
        badge: 'Destaque'
    },
    {
        id: 2,
        type: 'cobertura',
        location: 'itaim',
        title: 'Cobertura Duplex',
        description: 'Vista panorâmica com terraço gourmet exclusivo',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470',
        area: 320,
        rooms: 4,
        bathrooms: 5,
        parking: 4,
        price: 5500000,
        badge: 'Premium'
    },
    {
        id: 3,
        type: 'casa',
        location: 'moema',
        title: 'Casa Moderna',
        description: 'Arquitetura contemporânea com piscina e área gourmet',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475',
        area: 450,
        rooms: 4,
        bathrooms: 5,
        parking: 4,
        price: 4200000,
        badge: 'Exclusivo'
    },
    {
        id: 4,
        type: 'penthouse',
        location: 'vila-olimpia',
        title: 'Penthouse',
        description: 'Últimos 2 andares com vista privilegiada',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453',
        area: 280,
        rooms: 3,
        bathrooms: 4,
        parking: 3,
        price: 4800000,
        badge: 'Novo'
    },
    {
        id: 5,
        type: 'apartamento',
        location: 'brooklin',
        title: 'Apartamento Alto Padrão',
        description: 'Condomínio com estrutura completa de lazer',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470',
        area: 150,
        rooms: 3,
        bathrooms: 2,
        parking: 2,
        price: 1800000,
        badge: 'Oportunidade'
    },
    {
        id: 6,
        type: 'cobertura',
        location: 'jardins',
        title: 'Cobertura Premium',
        description: 'Ampla cobertura com jardim privativo',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470',
        area: 380,
        rooms: 4,
        bathrooms: 5,
        parking: 5,
        price: 6800000,
        badge: 'Luxo'
    },
    {
        id: 7,
        type: 'apartamento',
        location: 'moema',
        title: 'Loft Contemporâneo',
        description: 'Design moderno com pé direito duplo',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470',
        area: 120,
        rooms: 2,
        bathrooms: 2,
        parking: 1,
        price: 1400000,
        badge: 'Moderno'
    },
    {
        id: 8,
        type: 'casa',
        location: 'jardins',
        title: 'Mansão Clássica',
        description: 'Casa de época totalmente restaurada',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470',
        area: 600,
        rooms: 5,
        bathrooms: 6,
        parking: 6,
        price: 8500000,
        badge: 'Exclusivo'
    },
    {
        id: 9,
        type: 'apartamento',
        location: 'itaim',
        title: 'Apartamento',
        description: 'Localização privilegiada próximo a tudo',
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1470',
        area: 165,
        rooms: 3,
        bathrooms: 3,
        parking: 2,
        price: 2200000,
        badge: 'Destaque'
    },
    {
        id: 10,
        type: 'penthouse',
        location: 'moema',
        title: 'Penthouse Premium',
        description: 'Acabamento impecável com automação completa',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470',
        area: 300,
        rooms: 4,
        bathrooms: 5,
        parking: 4,
        price: 5200000,
        badge: 'Premium'
    },
    {
        id: 11,
        type: 'apartamento',
        location: 'vila-olimpia',
        title: 'Apartamento',
        description: 'Pronto para morar com varanda gourmet',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1470',
        area: 140,
        rooms: 2,
        bathrooms: 2,
        parking: 2,
        price: 1650000,
        badge: 'Novo'
    },
    {
        id: 12,
        type: 'casa',
        location: 'brooklin',
        title: 'Condomínio Fechado',
        description: 'Segurança e tranquilidade em condomínio de alto padrão',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1470',
        area: 380,
        rooms: 4,
        bathrooms: 4,
        parking: 4,
        price: 3800000,
        badge: 'Destaque'
    }
];

// Função para formatar preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0
    }).format(price);
}

// Função para criar card de imóvel
function createPropertyCard(property) {
    return `
        <div class="property-card" data-type="${property.type}" data-location="${property.location}" data-rooms="${property.rooms}" data-price="${property.price}">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}" loading="lazy">
                <span class="property-badge">${property.badge}</span>
            </div>
            <div class="property-content">
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${getLocationName(property.location)}</span>
                </div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-features">
                    <div class="feature-item">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.area}m²</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-bed"></i>
                        <span>${property.rooms} Quartos</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-car"></i>
                        <span>${property.parking} Vagas</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Função para obter nome da localização
function getLocationName(location) {
    const locations = {
        'jardins': 'Jardins',
        'moema': 'Moema',
        'itaim': 'Itaim Bibi',
        'vila-olimpia': 'Vila Olímpia',
        'brooklin': 'Brooklin'
    };
    return locations[location] || location;
}

// Função para renderizar imóveis
function renderProperties(filteredProperties = properties) {
    const grid = document.getElementById('propertiesGrid');
    
    if (filteredProperties.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--gold-primary); margin-bottom: 1rem;"></i>
                <h3 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem;">Nenhum imóvel encontrado</h3>
                <p style="color: var(--off-white); font-size: 1.125rem; margin-bottom: 2rem;">Tente ajustar os filtros ou entre em contato conosco</p>
                <a href="https://wa.me/5511999999999?text=Gostaria%20de%20ajuda%20para%20encontrar%20um%20imóvel." 
                   class="btn btn-primary" 
                   target="_blank">
                    <i class="fab fa-whatsapp"></i> Falar com Consultor
                </a>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredProperties.map(property => createPropertyCard(property)).join('');
}

// Função para filtrar imóveis
function filterProperties() {
    const typeFilter = document.getElementById('filterType').value;
    const locationFilter = document.getElementById('filterLocation').value;
    const roomsFilter = document.getElementById('filterRooms').value;
    const priceFilter = document.getElementById('filterPrice').value;
    
    let filtered = properties;
    
    // Filtro de tipo
    if (typeFilter !== 'all') {
        filtered = filtered.filter(p => p.type === typeFilter);
    }
    
    // Filtro de localização
    if (locationFilter !== 'all') {
        filtered = filtered.filter(p => p.location === locationFilter);
    }
    
    // Filtro de quartos
    if (roomsFilter !== 'all') {
        const rooms = parseInt(roomsFilter);
        if (rooms === 4) {
            filtered = filtered.filter(p => p.rooms >= 4);
        } else {
            filtered = filtered.filter(p => p.rooms === rooms);
        }
    }
    
    // Filtro de preço
    if (priceFilter !== 'all') {
        const priceRange = parseInt(priceFilter);
        if (priceRange === 1) {
            filtered = filtered.filter(p => p.price <= 1500000);
        } else if (priceRange === 2) {
            filtered = filtered.filter(p => p.price > 1500000 && p.price <= 3000000);
        } else if (priceRange === 3) {
            filtered = filtered.filter(p => p.price > 3000000);
        }
    }
    
    renderProperties(filtered);
}

// Exportar para uso global
window.properties = properties;
window.renderProperties = renderProperties;
window.filterProperties = filterProperties;