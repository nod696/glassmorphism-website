
// Корзина товаров
export function getItemShop(dataPage){
    let productBtn = document.querySelectorAll(".shop__button-item");
    productBtn.forEach(item => {
        item.addEventListener("click", () => {
            console.log(item);
        })
    })
    // Цикл по кнопкам. Вызывается функция с аргументом - КОНКРЕТНЫМ ОБЪЕКТОМ В МАССИВЕ. 
    // Таким образом мы понимаем, к какому именно объекту обращаемся и выводим его
    for (let i = 0; i < productBtn.length; i++){
        productBtn[i].addEventListener("click", () => {
            cartNumbers(dataPage[i]);
            totalCost(dataPage[i]);
        });
    };
    // Функция для того, чтобы СВЯЗАТЬ счетчик иконки с количеством товаров в хранилище ПРИ ОБНОВЛЕНИИ СТРАНИЦЫ
    function onLoadProductNumbers () {
        let productNumbers = localStorage.getItem("cartNumbers");
        if(productNumbers){
            document.querySelector('.shop__link span').textContent = productNumbers;
        }
    }
    // Функция для подсчета количества товаров в хранилище. Сначала записываю в хранилище с помощью set, потом беру оттуда с помощью get. 
    // Также преобразую строку из хранилища в число
    // Также привязывается счетчик иконки к количеству товаров в хранилище
    function cartNumbers(product) {
    
        //Беру КОЛИЧЕСТВО из хранилища
        let productNumbers = localStorage.getItem("cartNumbers");
        productNumbers = parseInt(productNumbers);
        //Записываю КОЛИЧЕСТВО в хранилище, если раньше запись была
        if (productNumbers) {
            localStorage.setItem("cartNumbers", productNumbers + 1);
            document.querySelector('.shop__link span').textContent = productNumbers + 1;
        }else{
        //Записываю КОЛИЧЕСТВО в хранилище В ПЕРВЫЙ РАЗ
            localStorage.setItem("cartNumbers", 1);
            document.querySelector('.shop__link span').textContent =  1;
        }
        setItems(product);
    };
    // ЗАПИСЫВАЮ САМ ТОВАР (ОБЪЕКТ) В ХРАНИЛИЩЕ
    // Для этого нужно преобразовать объект с помощью JSON
    // СТРИНГИФАЙ ПРИВЕДЕТ ОБЪЕКТ К СТРОКЕ, НО НАМ НАДО ЕГО ОБРАТНО В ОБЪЕКТ СДЕЛАТЬ
    // Для этого мы используем другой метод JSON - parse
    function setItems(product) {
        let cartItems = localStorage.getItem('Products in cart');
        cartItems = JSON.parse(cartItems);
        //УВЕЛИЧИВАЮ СВОЙСТВО INCART В ОБЪЕКТЕ, ЕСЛИ КОЛИЧЕСТВО БОЛЬШЕ 0
        if(cartItems != null) {
        //Если кликаю на другой объект (помимо первого, который уже определен), то он тоже добавляется в корзину
            if(cartItems[product.id] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.id]: product,
                }
            }
            cartItems[product.id].inCart += 1; 
        }else{
            product.inCart = 1;
            cartItems = {
                [product.id]: product,
            }
        }
        localStorage.setItem('Products in cart', JSON.stringify(cartItems));
    }
    // Расчет общей стоимости товаров
    function totalCost(product) {
       
        let cartCost = localStorage.getItem('totalCost');
     
        if(cartCost != null){
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        }else {
            localStorage.setItem("totalCost", product.price);
        }
      
    }
    // Запуск функции связки счетчика с хранилищем
    onLoadProductNumbers();
    
    }