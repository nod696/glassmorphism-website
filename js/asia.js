import {getSlides, getItems} from "./catalog.js";
import { getModalItems, getOverlay } from "./modal.js";
import { getItemShop } from "./shop.js";
const dataPageAsia = [
    {
        img: "./glassmorphism-website/images/birdnestsoup.jpg",
        name: "Суп из птичьего гнезда",
        price: 788,
        description: "Гнёзда некоторых видов саланган, обитающих в странах Юго-Восточной Азии.",
        inCart: 0,
        id: "42131",
    },
    {
        img: "./glassmorphism-website/images/sannakchi.jpg",
        name: "Саннакчи",
        price: 700,
        description: "Представляет собой приправленного кунжутным маслом и посыпанного кунжутом живого осьминога. Осьминога режут на мелкие кусочки и немедленно подают, так что кусочки ещё шевелятся. ",
        inCart: 0,
        id: "8565",
    },
    {
        img: "./glassmorphism-website/images/copiluvak.jpg",
        name: "Копи-лувак",
        price: 566,
        description: "Процесс производства зёрен кофе копи-лювак состоит в том, что мусанги поедают спелые плоды кофейного дерева (кофейные вишни), переваривают окружающую кофейные зёрна мякоть и испражняют зёрнышки кофе, которые затем собираются людьми, моются и сушатся на солнце.",
        inCart: 0,
        id: "552",
    },
    {
        img: "./glassmorphism-website/images/driedlizard.jpg",
        name: "Сушеные ящерицы",
        price: 150,
        description: "Комментарии излишни",
        inCart: 0,
        id: "89654",
    },
    {
        img: "./glassmorphism-website/images/hush.jpg",
        name: "Хаш",
        price: 800,
        description: "Жидкое горячее блюдо с рубцами.",
        inCart: 0,
        id: "73211",
    },
    {
        img: "./glassmorphism-website/images/aping.jfif",
        name: "А-пинг",
        price: 555,
        description: "Жареные пауки",
        inCart: 0,
        id: "4346",
    },
    {
        img: "./glassmorphism-website/images/fugu.jfif",
        name: "Фугу",
        price: 700,
        description: "Известная своей токсичностью рыба",
        inCart: 0,
        id: "42121",
    },
    {
        img: "./glassmorphism-website/images/ikizikuri.jpg",
        name: "Икизикури",
        price: 550,
        description: "Выпотрошенная живая рыба",
        inCart: 0,
        id: "9341",
    },
    {
        img: "./glassmorphism-website/images/balut.jpg",
        name: "Балют",
        price: 400,
        description: "Популярное блюдо восточной кухни, представляющее собой варёное утиное яйцо, в котором уже сформировался плод с оперением, хрящами и клювом.",
        inCart: 0,
        id: "97655649",
    },
    {
        img: "./glassmorphism-website/images/eggs.webp",
        name: "Столетние яйца",
        price: 150,
        description: "Популярная закуска китайской кухни; представляет собой яйцо, выдержанное несколько месяцев в специальной смеси без доступа воздуха. ",
        inCart: 0,
        id: "1111845",
    },
]
const quantity = 4;
var counter = dataPageAsia.length / quantity;
var counterSlides = Math.ceil(counter);


const swiperWrapperAsia = document.querySelector(".swiper-wrapper-asia");



getSlides(swiperWrapperAsia, counterSlides);

const swiperSlides = document.querySelectorAll(".swiper-slide-category");



getItems(dataPageAsia, swiperSlides, quantity);

// Модальное окно и изменение содержания
const modal = document.querySelector(".modal");
const items = document.querySelectorAll(".category__link");
const modalImage = document.querySelector(".modal__image");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalPrice = document.querySelector(".modal__price");
const overlay = document.querySelector(".main__overlay");







getModalItems(dataPageAsia, items, modal, modalImage, modalTitle, overlay, modalText, modalPrice);



getOverlay(overlay, modal);


getItemShop(dataPageAsia);