// Elementos DOM
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('.nav-link');
const productsContainer = document.getElementById('products-container');
const productsTitle = document.getElementById('products-title');
const verMaisContainer = document.getElementById('ver-mais-container');
const verMaisBtn = document.getElementById('ver-mais-btn');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Variáveis globais
let currentCategory = 'all';
let showingInitialProducts = true;

// Menu mobile
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Fechar menu ao clicar em um link (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Função para criar cards de produtos
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-category', product.category);
    
    let badgeHTML = '';
    if (product.badge) {
        badgeHTML = `<div class="product-badge">${product.badge}</div>`;
    }
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/300x400/ffffff/666666?text=Imagem+Indisponível'"
                 loading="lazy">
            ${badgeHTML}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <div class="product-actions">
                <button class="buy-btn" data-product="${product.name}">Comprar</button>
            </div>
        </div>
    `;
    
    // Adicionar evento de clique para ampliar imagem
    const productImage = productCard.querySelector('.product-image img');
    productImage.addEventListener('click', function() {
        // Só abre o modal se a imagem carregou corretamente
        if (!this.src.includes('placeholder')) {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        }
    });
    
    // Adicionar evento ao botão comprar
    const buyBtn = productCard.querySelector('.buy-btn');
    buyBtn.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const message = `Olá! Gostaria de comprar o produto: ${productName}`;
        const whatsappURL = `https://wa.me/5521989519259?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
    
    return productCard;
}

// Função para mostrar 4 produtos de cada categoria no início
function showInitialProducts() {
    productsContainer.innerHTML = '';
    currentCategory = 'all';
    showingInitialProducts = true;
    
    // Agrupar produtos por categoria
    const productsByCategory = {};
    products.forEach(product => {
        if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
        }
        productsByCategory[product.category].push(product);
    });
    
    // Mostrar 4 produtos de cada categoria
    Object.keys(productsByCategory).forEach(category => {
        const categoryProducts = productsByCategory[category].slice(0, 4);
        
        categoryProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
        });
    });

    // Mostrar botão "Ver Mais"
    verMaisContainer.style.display = 'block';
    
    // Atualizar título
    productsTitle.textContent = 'Produtos em Destaque';
}

// Função para mostrar TODOS os produtos de uma categoria específica
function showAllProducts(category) {
    productsContainer.innerHTML = '';
    currentCategory = category;
    showingInitialProducts = false;
    
    const filteredProducts = products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });

    // Esconder botão "Ver Mais" quando estiver vendo uma categoria específica
    verMaisContainer.style.display = 'none';

    // Atualizar título
    const categoryNames = {
        'cordao': 'Cordões',
        'brinco': 'Brincos',
        'pulseira': 'Pulseiras',
        'anel': 'Anéis'
    };

    productsTitle.textContent = categoryNames[category] || 'Nossos Produtos';
}

// Função para o botão "Ver Mais"
function handleVerMais() {
    if (showingInitialProducts) {
        // Se estiver na página inicial, vai para a primeira categoria (Cordões)
        showAllProducts('cordao');
    }
}

// Adicionar eventos de clique para navegação
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        
        if (category === 'all') {
            // Quando clicar em "Início", mostra 4 produtos de cada categoria
            showInitialProducts();
        } else {
            // Quando clicar em uma categoria, mostra TODOS os produtos da categoria
            showAllProducts(category);
        }
    });
});

// Evento para o botão "Ver Mais"
verMaisBtn.addEventListener('click', handleVerMais);

// Fechar modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fechar modal clicando fora da imagem
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicializar - MOSTRAR PRODUTOS EM DESTAQUE (4 de cada categoria)
showInitialProducts();