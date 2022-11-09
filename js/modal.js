


export function getModalItems(dataPage, items, modal, modalImage, modalTitle, overlay, modalText, modalPrice){

items.forEach((item, i) => {
 
    item.addEventListener("click", () => {
       
        modal.classList.toggle("active");
        modalImage.src = dataPage[i].img;
        modalTitle.textContent = dataPage[i].name;
        modalPrice.innerHTML = `Цена: ${dataPage[i].price} рублей`;
        modalText.textContent = dataPage[i].description;
        overlay.classList.add("main__overlay-active");
        
    });
});

}

export function getOverlay(overlay, modal){

    overlay.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("main__overlay-active");
    });

}


