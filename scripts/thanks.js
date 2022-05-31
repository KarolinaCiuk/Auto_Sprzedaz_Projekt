import { carItems } from "./carsDB.js";

const backHomePage = document.getElementById("back_hp")
const $summary = document.querySelector(`.summary`);
const totalPrice = localStorage.getItem(`totalPrice`);
let paymentMethod = localStorage.getItem(`leasing`);
 if (true) {
    paymentMethod = 'Leasing';
 } else {
    paymentMethod = 'Gotówka';
 }



 function carGenHTML(car) {
    return `
    <div class=" col-m=12 row descriptionInfo">

    <div class="col-m=6"><img class="choosenCarPhoto" src="${car.img}"/></div>

    <div class="infoSection col-m=6">
    <p>   Wybrane auto: ${car.title} ${car.brand} year ${car.year}</p>
    <p>   Do zapłaty: ${totalPrice} PLN </p>
    <p>   Sposób płatności: ${paymentMethod} </p>
    </div>

    </div>`;
  }

  $summary.innerHTML = carGenHTML(carItems[localStorage.getItem("selectedCarId")]);


backHomePage.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "home_page.html";
});