const polaroides = Array.from(document.querySelectorAll(".polaroide"));

// Atribuir z-index inicial
function atualizarZIndex() {
  polaroides.forEach((img, i) => {
    img.style.zIndex = polaroides.length - i; // zIndex decrescente, o primeiro é o topo
  });
}

// Aplica posições aleatórias fixas (opcional, estilo polaroide)
function aplicarTransformacoes() {
  polaroides.forEach((img) => {
    const angle = Math.random() * 20 - 10;
    const x = Math.random() * 60 - 30;
    const y = Math.random() * 60 - 30;
    img.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle}deg)`;
  });
}

// Inicialização
atualizarZIndex();
aplicarTransformacoes();

// Adiciona clique para mover imagem para o fim
polaroides.forEach((img) => {
  img.addEventListener("click", () => {
    // Remove a imagem clicada da lista e empurra para o final
    const index = polaroides.indexOf(img);
    if (index > -1) {
      polaroides.splice(index, 1);
      polaroides.push(img);
      atualizarZIndex();
    }
  });
});
