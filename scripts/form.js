import {carItems} from "./carsDB.js";

const $name = document.getElementById(`name_input`);
const $backButton = document.getElementById(`back_btn`);
const $buyButton = document.getElementById(`buy_btn`);
const $totalPrice = localStorage.getItem(`totalPrice`);
const $choosenCar = document.querySelector(`#choosenCar`);
const $selectedCarPrice = document.querySelector(`#selected_car_price`);
const $fullNameInput = document.querySelector("#fullNameInput");
const $fullNameValid = document.querySelector(`.fullNameValid`);
const $phoneNumberInput = document.querySelector(`#phoneNumberInput`);
const $phoneNumberValid = document.querySelector(`.phoneNumberValid`);
const $mailInput = document.querySelector(`#mailInput`);
const $mailValid = document.querySelector(`.mailValid`);
const $formLeasing = document.querySelector(`#formLeasing`);
const $formCash = document.querySelector(`#formCash`);



// Dodoawanie informacji i zdjęcia klikniętego auto do HTML formularza 
function carGenHTML(car) {
  return `<section>
  <h3 class="mainTitle">${car.title} ${car.brand} ${car.engine} rok ${car.year}</h3>
  <div class="row descriptionInfo">
  <img class="choosenCarPhoto col-md-" src="${car.img}"/>
  <p class="col-md-  description">${car.description}</p>
  </div>
  </section>`;
}

// Dodanie ceny do lokal storage
function displayPrice() {
  let totalPrice = carItems[localStorage.getItem("selectedCarId")].price;
  localStorage.setItem(`totalPrice`, totalPrice);
}
displayPrice();

//Wyswietlenie informacji o wybranym aucie w formularzu
$choosenCar.innerHTML = carGenHTML(carItems[localStorage.getItem("selectedCarId")]);
$selectedCarPrice.innerHTML = $totalPrice

// WERYFIKACJA IMIENIA I NAZWISKA
$fullNameInput.addEventListener("change", () => {
  let re = /^[A-Z][a-z]*\s[A-Z][a-z]*$/m;
  if (re.test($fullNameInput.value)) {
    $fullNameValid.innerHTML = "";
    $fullNameInput.classList.remove(`incorrect`);
    $fullNameInput.classList.add(`correct`);
    localStorage.setItem(`fullName`, $fullNameInput.value);
  } else {
    $fullNameValid.innerHTML = "Podaj imię i nazwisko (Przykład: Jan Kowalski) ";
    $fullNameInput.classList.remove(`correct`);
    $fullNameInput.classList.add(`incorrect`);
    localStorage.removeItem(`fullName`);
  }
});
$fullNameInput.value = localStorage.getItem(`fullName`);

//WERYFIKACJA NUMERU TELEFONU
$phoneNumberInput.addEventListener("change", () => {
  let re = /^(\d{9})|(\d{3}\s\d{3}\s\d{3})$/m;
  if (re.test($phoneNumberInput.value)) {
    $phoneNumberValid.innerHTML = "";
    $phoneNumberInput.classList.remove(`incorrect`);
    $phoneNumberInput.classList.add(`correct`);
    localStorage.setItem(`phoneNumber`, $phoneNumberInput.value);
  } else {
    $phoneNumberValid.innerHTML = "Wpisz numer telefonu (Przykład: 111 222 333)";
    $phoneNumberInput.classList.remove(`correct`);
    $phoneNumberInput.classList.add(`incorrect`);
    localStorage.removeItem(`phoneNumber`);
  }
});

// WERYFIKACJA MAILA
$mailInput.addEventListener("change", () => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test($mailInput.value)) {
    $mailValid.innerHTML = "";
    $mailInput.classList.remove(`incorrect`);
    $mailInput.classList.add(`correct`);
    localStorage.setItem(`fullName`, $mailInput.value);
  } else {
    $mailValid.innerHTML = "Podaj adres mailowy (Przykład: abc@mail.com) ";
    $mailInput.classList.remove(`correct`);
    $mailInput.classList.add(`incorrect`);
    localStorage.removeItem(`fullName`);
  }
});

//METODA PŁATNOŚCI
$formLeasing.addEventListener("change", () => {
  localStorage.setItem(`leasing`, true);
});

$formCash.addEventListener("change", () => {
  localStorage.setItem(`leasing`, false);
});

if (!localStorage.getItem(`leasing`)) {
  localStorage.setItem(`leasing`, true);
}

$formCash.checked = localStorage.getItem(`leasing`) != `true`;
$formLeasing.checked = localStorage.getItem(`leasing`) == `true`;


//GUZIKI NAWIGACJI NA DOLE
$backButton.addEventListener("click", () => {
  window.location.href = "home_page.html";
});

$buyButton.addEventListener("click", () => {
  if (
    localStorage.getItem(`fullName`) != null &&
    localStorage.getItem(`phoneNumber`) != null &&
    localStorage.getItem(`leasing`) != null
  ) {
    window.location.href = "thanks.html";
  } else {
    alert(`Uzupełnij brakujące dane`);
  }
});
