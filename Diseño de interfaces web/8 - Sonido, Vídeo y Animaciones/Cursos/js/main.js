const toggleMenu = (btn) => {
  const menu = btn.closest("aside");
  const toggleIcon = btn.firstChild;

  if (menu.className.includes("--expanded")) {
    menu.classList.remove("content__menu--expanded");
    menu.classList.add("content__menu--contracted");
  } else if (menu.className.includes("--contracted")) {
    menu.classList.remove("content__menu--contracted");
    menu.classList.add("content__menu--expanded");
  }

  if (toggleIcon.className.includes("fa-arrow-alt-circle-left")) {
    toggleIcon.classList.remove("fa-arrow-alt-circle-left");
    toggleIcon.classList.add("fa-arrow-alt-circle-right");
  } else if (toggleIcon.className.includes("fa-arrow-alt-circle-right")) {
    toggleIcon.classList.remove("fa-arrow-alt-circle-right");
    toggleIcon.classList.add("fa-arrow-alt-circle-left");
  }
};

const content = document.querySelector(".content__main");
/* Supongo que esto es un fallo del intérprete de JavaScript en los navegadores */
content.style.width = `0vw`;

const toggleHamburger = () => {
  const hamburger = document.getElementsByClassName("content__side-menu")[0];

  if (hamburger.className.includes("--expanded")) {
    hamburger.classList.remove("content__side-menu--expanded");
    hamburger.classList.add("content__side-menu--contracted");
  } else if (hamburger.className.includes("--contracted")) {
    hamburger.classList.remove("content__side-menu--contracted");
    hamburger.classList.add("content__side-menu--expanded");
  }
};