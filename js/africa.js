import { getSlides, getItems } from "./catalog.js";
import { getModalItems, getOverlay } from "./modal.js";
import { getItemShop } from "./shop.js";
const dataPageAfrica = [
    {
        img: "./glassmorphism-website/images/mopane.jpg",
        name: "Гусеницы Мопане",
        price: 100,
        description: "Деликатес из жареных гусениц",
        inCart: 0,
        id: "9657",
    },
    {
        img: "./glassmorphism-website/images/eforiro.jpg",
        name: "Эфо-риро",
        price: 666,
        description: "Овощной суп с орехами",
        inCart: 0,
        id: "632",
    },
]



const swiperWrapperAfrica = document.querySelector(".swiper-wrapper-africa");

function getSlidesAfrica(){
    swiperWrapperAfrica.innerHTML = "";
    let countSlides = 1;
        for (let i=0; i < countSlides; i++){
                swiperWrapperAfrica.innerHTML += `
                <div class="swiper-slide swiper-slide-category">
                
                 </div>
                `   
                     
           
};

};


getSlides(swiperWrapperAfrica, 1);

const swiperSlides = document.querySelectorAll(".swiper-slide-category");



getItems(dataPageAfrica, swiperSlides, 2);


// Модальное окно и изменение содержания
const modal = document.querySelector(".modal");
const items = document.querySelectorAll(".category__link");
const modalImage = document.querySelector(".modal__image");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalPrice = document.querySelector(".modal__price");
const overlay = document.querySelector(".main__overlay");


getModalItems(dataPageAfrica, items, modal, modalImage, modalTitle, overlay, modalText, modalPrice);



getOverlay(overlay, modal);


getItemShop(dataPageAfrica);