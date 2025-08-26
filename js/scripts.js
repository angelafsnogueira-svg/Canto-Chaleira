document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("click", () => {
    alert("Você clicou no botão!");
  });
});

const imgs = document.querySelectorAll('.lightbox-img');
const overlay = document.getElementById('lightbox-overlay');
const overlayImg = document.getElementById('lightbox-img');

imgs.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

// Fecha ao clicar em qualquer lugar do overlay
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// carroussel

const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');

let index = 0;
const totalCards = document.querySelectorAll('.profile-card').length;
const visibleCards = 3; // quantos aparecem ao mesmo tempo
const step = 1; // quantos avançam por vez

// Criar indicadores dinamicamente
const totalSlides = Math.ceil(totalCards / visibleCards);
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    index = i * visibleCards;
    updateCarousel();
  });
  indicatorsContainer.appendChild(dot);
}

function updateCarousel() {
  const cardWidth = document.querySelector('.profile-card').offsetWidth + 32;
  carousel.style.transform = `translateX(${-index * cardWidth}px)`;

  // atualizar bolinhas
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === Math.floor(index / visibleCards)) {
      dot.classList.add('active');
    }
  });
}

next.addEventListener('click', () => {
  if (index < totalCards - visibleCards) {
    index += step;
  } else {
    index = 0; 
  }
  updateCarousel();
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index -= step;
  } else {
    index = totalCards - visibleCards;
  }
  updateCarousel();
});

// Auto-slide a cada 3 segundos
setInterval(() => {
  if (index < totalCards - visibleCards) {
    index += step;
  } else {
    index = 0;
  }
  updateCarousel();
}, 3000);

