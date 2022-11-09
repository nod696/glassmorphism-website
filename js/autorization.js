const autoNav = document.querySelector(".autorization");
const formAuto = document.querySelector(".autorization__wrapper");
const autoBtn = document.querySelector(".autorization__button");
const autoForm = document.querySelector(".autorization__form");
const closeBtn = document.querySelector(".close__btn");
let dataAuto = [];
autoNav.addEventListener("click", () => {
    formAuto.style.display = "block";

});


    closeBtn.addEventListener("click", () => {
        
            formAuto.style.display = "none";
  });



function autoSend(){

    autoForm.addEventListener("submit", (event) => {
        let email = document.querySelector(".email").value;
        let password = document.querySelector(".password").value;
        event.preventDefault();
        if(!password || !email){
            alert("Вы не ввели все данные");
        }else {

            dataAuto.email = email;
            dataAuto.password = password;
            console.log(dataAuto);
        }

    });
 
};

autoSend();

