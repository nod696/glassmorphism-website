
'use strict';

const navButton = document.querySelector(".nav__button");
const navigationMenu = document.querySelector(".header__navigation");

navButton.addEventListener("click", () => {
        navigationMenu.classList.toggle("header__navigation-active");
        navButton.classList.toggle("nav__button-active");

});

