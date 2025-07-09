function toggleMenu() {
  const navbar = document.querySelector(".menu");
  navbar.classList.toggle("show");
}

const menuLinks = document.querySelectorAll("ul li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove a classe 'ativo' de todos os links
    menuLinks.forEach((el) => el.classList.remove("ativo"));

    // Adiciona a classe 'ativo' apenas no clicado
    this.classList.add("ativo");
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  // Alterna o menu entre visível e escondido
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Fecha o menu ao clicar fora
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu");
  const botao = document.querySelector(".menu-sanduiche");

  // Se o clique NÃO foi dentro do menu nem no botão, fecha o menu
  if (!menu.contains(event.target) && !botao.contains(event.target)) {
    menu.style.display = "none";
  }
});
