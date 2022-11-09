
'use strict';



const promoIcon = document.querySelector(".promo");
const errorMessage = document.querySelector(".promo__error");

promoIcon.addEventListener("click", () => {
    setTimeout(() => {
        errorMessage.style.opacity = "1";
    }, 100);
    setTimeout(() => {
        errorMessage.style.opacity = "0";
    }, 3000);
});

