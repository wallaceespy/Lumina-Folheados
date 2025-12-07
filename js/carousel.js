// Carrossel
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const indicadores = document.querySelectorAll('.indicador');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Atualizar indicadores
    indicadores.forEach((indicador, index) => {
        indicador.classList.toggle('ativo', index === currentSlide);
    });
}

btnProximo.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
});

btnAnterior.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
});

// Adicionar clique nos indicadores
indicadores.forEach((indicador, index) => {
    indicador.addEventListener('click', () => {
        currentSlide = index;
        updateSlide();
    });
});