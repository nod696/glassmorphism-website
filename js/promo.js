


// Акции
const promoTitles = document.querySelectorAll(".promo__item");
const promoItems = document.querySelectorAll(".promo__inner-item");
function deactivateTitles() {
    promoTitles.forEach(item => item.classList.remove('active'))
};
promoTitles.forEach(item => {
    item.addEventListener("click", () => {
        deactivateTitles();
        item.classList.add("active");
        let link = item.dataset.attribute;
        switch(link) {
            case "all":
            filterElem("promo__inner-item");
            break;
            case "bonuses":
            filterElem(link);
            break;
            case "promotions":
            filterElem(link);
            break;
            case "promocodes":
            filterElem(link);
            break;
            case "discounts":
            filterElem(link);
            break;
        };
    });
});
function filterElem(className) {
    promoItems.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = "block";
        } else{
            item.style.display = "none";
        };
    });
};
