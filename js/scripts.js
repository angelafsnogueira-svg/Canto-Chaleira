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

