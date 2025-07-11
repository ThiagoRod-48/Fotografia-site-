function toggleMenu() {
  const menu = document.querySelector(".menu"); // Alterna o menu entre visível e escondido

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
