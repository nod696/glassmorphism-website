

import {getSlides} from "./catalog.js";
import { getModalItems, getOverlay } from "./modal.js";
import { getItemShop } from "./shop.js";

const swiperWrapperEurope = document.querySelector(".swiper-wrapper-europe");
let ID = function () {
  
    return '_' + Math.random().toString(36).substr(2, 9);
};

const dataPageEurope = [
    {
        img: "./glassmorphism-website/images/haukarl.jpg",
        name: "Хаукарль",
        price: 700,
        description: "Исландское национальное блюдо, представляющее собой частично разложившееся, а затем завяленное мясо гренландской полярной акулы либо гигантской акулы.",
        inCart: 0,
        id: "34654342",
    },
    {
        img: "./glassmorphism-website/images/surströmming.jpg",
        name: "Сюрстремминг",
        price: 200,
        description: "Шведский национальный продукт, представляющий собой консервированную квашеную сельдь.",
        inCart: 0,
        id: "5342242",
    },
    {
        img: "./glassmorphism-website/images/lutefisk.jpg",
        name: "Лютефиск",
        price: 300,
        description: "Рыба в щелочи",
        inCart: 0,
        id: "5322142",
    },
    {
        img: "./glassmorphism-website/images/kasumarzu.jpg",
        name: "Казу-марцу",
        price: 600,
        description: "Вид производимого на Сардинии сыра, известного содержанием в нём живых личинок сырной мухи.",
        inCart: 0,
        id: "53ft242",
    },
    {
        img: "./glassmorphism-website/images/haggis.jpg",
        name: "Хаггис",
        price: 250,
        description: "Национальное шотландское блюдо из бараньих потрохов (сердца, печени и лёгких), порубленных с луком, толокном, салом, приправами и солью и сваренных в бараньем желудке.",
        inCart: 0,
        id: "5324285",
    },
    {
        img: "./glassmorphism-website/images/kiwiak.jpg",
        name: "Кивиак",
        price: 200,
        description: "Кивиак — праздничное блюдо: в шкуру тюленя помещают около 400 чистиков, выпускают из шкуры воздух, запечатывают её салом и помещают в землю под пресс (камень) на 3—18 месяцев.",
        inCart: 0,
        id: "5324299",
    },
]
const quantity = 4;
var counter = dataPageEurope.length / quantity;
var counterSlides = Math.ceil(counter);
getSlides(swiperWrapperEurope, counterSlides);
var currentArr = [];
const swiperSlides = document.querySelectorAll(".swiper-slide-category");

function getItems(data, currentPage){
    const pageSize = 4;
    const begin = (currentPage - 1) * pageSize;
    const end = (currentPage) * pageSize;

    let currentArray = data.slice(begin, end);
 
    currentArr = currentArray;
    return currentArr;
}
getItems(dataPageEurope, 1);

console.log(currentArr);


swiperSlides.forEach((swiperSlide,i) => {
    getItems(dataPageEurope, i+1);

    for(let x=0;x<currentArr.length; x++){
        swiperSlide.innerHTML += `
        <div class="category__item">
        <a href="#" class="category__link">
            <img src="${currentArr[x].img}" alt="" class="category__image">
            <h3 class="category__name">${currentArr[x].name}</h3>
        </a>
        <button class="shop__button-item">Заказать</button>
         </div>
    `
}
})






// Модальное окно и изменение содержания
const modal = document.querySelector(".modal");
const items = document.querySelectorAll(".category__link");
const modalImage = document.querySelector(".modal__image");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalPrice = document.querySelector(".modal__price");
const overlay = document.querySelector(".main__overlay");




getItemShop(dataPageEurope);


getModalItems(dataPageEurope, items, modal, modalImage, modalTitle, overlay, modalText, modalPrice);



getOverlay(overlay, modal);

