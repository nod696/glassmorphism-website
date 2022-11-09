import { getSlides, getItems } from "./catalog.js";
import { getModalItems, getOverlay } from "./modal.js";
import { getItemShop } from "./shop.js";
const dataPageAmerica = [
    {
        img: "images/eskamoles.jpg",
        name: "Эскамолес",
        price: 555,
        description: "Яйца местных гигантских черных муравьев рода лиометопум.",
        inCart: 0,
        id: "86465",
    },
    {
        img: "images/drunkenshrimp.jpg",
        name: "Пьяная креветка",
        price: 450,
        description: "Креветка, маринованная в пиве",
        inCart: 0,
        id: "643523",
    },
    {
        img: "images/oysters.jfif",
        name: "Устрицы Скалистых гор",
        price: 555,
        description: "Романтичное название, придуманное американцами для блюда из бычьих семенников.",
        inCart: 0,
        id: "95674",
    },
    {
        img: "images/koolickles.jpg",
        name: "Сладкие огурцы",
        price: 100,
        description: "Сладкие огурцы",
        inCart: 0,
        id: "663242",
    },
    {
        img: "images/uitlakoche.webp",
        name: "Уитлакоче",
        price: 400,
        description: "Зерна кукурузы, пораженные грибком вида Ustilago maydis (пузырчатая головня кукурузы). ",
        inCart: 0,
        id: "08756",
    },
    {
        img: "images/burgerdonat.jpg",
        name: "Бургер-пончик",
        price: 150,
        description: "Бургер-пончик",
        inCart: 0,
        id: "7456332",
    },
    {
        img: "images/congrio.jpg",
        name: "Бульон конгрио",
        price: 300,
        description: "Чилийский суп с рыбой",
        inCart: 0,
        id: "11884",
    },
]

const quantity = 4;
var counter = dataPageAmerica.length / quantity;
var counterSlides = Math.ceil(counter);

const swiperWrapperAmerica = document.querySelector(".swiper-wrapper-america");




getSlides(swiperWrapperAmerica, counterSlides);

const swiperSlide = document.querySelectorAll(".swiper-slide-category");



getItems(dataPageAmerica, swiperSlide, quantity);



// Модальное окно и изменение содержания
const modal = document.querySelector(".modal");
const items = document.querySelectorAll(".category__link");
const modalImage = document.querySelector(".modal__image");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalPrice = document.querySelector(".modal__price");
const overlay = document.querySelector(".main__overlay");




getModalItems(dataPageAmerica, items, modal, modalImage, modalTitle, overlay, modalText, modalPrice);



getOverlay(overlay, modal);

getItemShop(dataPageAmerica);