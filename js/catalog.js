

export function getSlides(wrapper, count){
    wrapper.innerHTML = "";
    let countSlides = count;

        for (let i=0; i < countSlides; i++){
                    wrapper.innerHTML += `
                    <div class="swiper-slide swiper-slide-category">
                   
                     </div>
                    `        
                   
};
};




export function getItems(dataPage, swiperSlides, quantity){
 
    
        for(let i=0; i<dataPage.length; i++){
            if(i<quantity){
                swiperSlides[0].innerHTML += `
                <div class="category__item">
                <a href="#" class="category__link">
                    <img src="${dataPage[i].img}" alt="" class="category__image">
                    <h3 class="category__name">${dataPage[i].name}</h3>
                </a>
                <button class="shop__button-item">Заказать</button>
                 </div>
            `
            }
            if(i>=quantity && i<quantity*2){
            swiperSlides[1].innerHTML += `
            <div class="category__item">
            <a href="#" class="category__link">
                <img src="${dataPage[i].img}" alt="" class="category__image">
                <h3 class="category__name">${dataPage[i].name}</h3>
            </a>
            <button class="shop__button-item">Заказать</button>
             </div>
        `
            }
        
        if(i>=quantity*2){
            swiperSlides[2].innerHTML += `
            <div class="category__item">
            <a href="#" class="category__link">
                <img src="${dataPage[i].img}" alt="" class="category__image">
                <h3 class="category__name">${dataPage[i].name}</h3>
            </a>
            <button class="shop__button-item">Заказать</button>
             </div>
        `
            } 
        } 

    
  
  
} 
    
       


    
       
 
   
 
            
       
        
    