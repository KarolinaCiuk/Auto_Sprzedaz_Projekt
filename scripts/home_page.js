import {carItems} from "./carsDB.js";

//Populating items
const carsList = document.querySelector(".cars_list");

// window.addEventListener("DOMContentLoaded", function () {

// });

let displayCarItems = carItems.map(function (item) {
  return `
      <li class="col-md-6 list_element">
      <div class="row carItem">
        <div class="col-lg-6" >
          <img onclick="getInfo()" class="car_photo" src=${item.img} alt=${item.title} id=car${item.id}/>
        </div>
        <div class="col-lg-6">
          <section class="flex-column">
            <h2 class="car_name">${item.title}</h2>
            <hr class="my-4" />
          </section>
          <div class="main_details">
          <section class="car_details d-flex">
            <div class="d-flex flex-fill">
              <div class="year p-2 flex-fill">${item.year}</div>
              <div class="mileage p-2 flex-fill">${item.mileage}</div>
              <div class="engine p-2 flex-fill">${item.engine}</div>
            </div>
          </section>
          <section>
            <div class="car_price flex-column">${item.price} zł</div>
          </section>
          </div>
        </div>
      </div>
    </li>`;
});

  // join() zeby polaczyc wsyzstkie itemy, join("") zeby usunac miedzy nimi przecinek
  displayCarItems = displayCarItems.join("");
  // wklejenie returna do carsList w htmlu
  carsList.innerHTML = displayCarItems;


  // znajduje wszystkie elementy listy
  let li = document.getElementsByTagName("li");
  // na każde kliknięcie obrazka będzie wywoływana funkcja redirect
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", () => {
      localStorage.setItem("selectedCarId", i);
      window.location.href = "form.html";
    });
  }



