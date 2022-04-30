// car items
const carItems = [
  {
    id: 1,
    title: "Ciężarówka",
    brand: "Man",
    year: "2004",
    mileage: "340 000 km",
    engine: "100KM ",
    price: "35 000",
    img: "img/auto1.jpg",
  },

  {
    id: 2,
    title: "Audi A3",
    brand: "Audi",
    year: "2017",
    mileage: "200 000 km",
    engine: "170KM ",
    price: "18 000",
    img: "img/auto2.jpg",
  },

  {
    id: 3,
    title: "Audi A4",
    brand: "Audi",
    year: "2009",
    mileage: "140 000 km",
    engine: "210KM ",
    price: "26 000",
    img: "img/auto3.jpg",
  },

  {
    id: 4,
    title: "Audi Q5",
    brand: "Audi",
    year: "2011",
    mileage: "180 000 km",
    engine: "170KM ",
    price: "40 000",
    img: "img/auto4.jpg",
  },

  {
    id: 5,
    title: "Audi A6",
    brand: "Audi",
    year: "2020",
    mileage: "10 000 km",
    engine: "140KM ",
    price: "50 000",
    img: "img/auto5.jpg",
  },

  {
    id: 6,
    title: "Skoda combi",
    brand: "Man",
    year: "2001",
    mileage: "300 000 km",
    engine: "200KM ",
    price: "20 000",
    img: "img/auto6.jpg",
  },
];

//Populating items
const carsList = document.querySelector(".cars_list");

window.addEventListener("DOMContentLoaded", function () {
  let displayCarItems = carItems.map(function (item) {
    return `
        <li class="col-md-6 list_element">
        <div class="row">
          <div class="col-lg-6" >
            <img onclick="getInfo()" class="car_photo" src=${item.img} alt=${item.title} id=${item.id}/>
          </div>
          <div class="col-lg-6">
            <section class="flex-column">
              <h2 class="car_name">${item.title}</h2>
              <hr class="my-4" />
            </section>
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
      </li>`;
  });

  // join() zeby polaczyc wsyzstkie itemy, join("") zeby usunac miedy nimi przecinek
  displayCarItems = displayCarItems.join("");
  // wklejenie returna do carsList w htmlu
  carsList.innerHTML = displayCarItems;


  // znajduje wszystkie elementy listy
  let li = document.getElementsByTagName("li");

  // na każde kliknięcie obrazka będzie wywoływana funkcja redirect
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", redirect);
  }

  // przekierowanie do formularza
  function redirect() {
    window.location.href = "form.html";
  }
});

