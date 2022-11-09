// Функция отображения товаров в корзине, сначала берем товары из хранилища
let cartItems = localStorage.getItem("Products in cart");
cartItems = JSON.parse(cartItems);
function displayCart() {
  //Получаем общую стоимость
  let cartCost = localStorage.getItem("totalCost");

  let container = document.querySelector(".shop__product");
  let sum = document.querySelector(".shop__sum");
  // Создаем наполнение
  if (cartItems && container) {
    container.innerHTML = "";
    Object.values(cartItems).map((item) => {
      container.innerHTML += `
                <div class="product">
                <img width ="100px" height="100px" src="${item.img}">
                <span>${item.name}</span>
                <div class="price">${item.price}&#8381</div>
                <div class="quantity">${item.inCart}</div>
                <button class="delete"><img src="../images/delete.png"></button>
                </div>
                `;
    });
    sum.innerHTML += `<div class = "total">
                <h4 class = "totalTitle">ИТОГО</h4>
                <div class="totalCost">${cartCost}&#8381</div>
            </div>`;
  }
}

// Запуск отображения товаров
displayCart();

const deleteButtons = document.querySelectorAll(".delete");
const products = document.querySelectorAll(".product");
const totalCost = document.querySelector(".totalCost");
const prices = document.querySelectorAll(".price");
deleteButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    products[i].style.display = "none";
    totalCost.textContent =
      parseInt(totalCost.textContent) -
      parseInt(prices[i].textContent) +
      " рублей";
    if (parseInt(totalCost.textContent) == 0) {
      totalCost.textContent = "Корзина пуста";
    }
  });
});
