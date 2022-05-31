// Creation variable today in yyyy-mm-dd format
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0
let yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("input_date").setAttribute("min", today);

// Creation variable maxday in yyyy-mm-dd format
const days = 13;
// Date.now() gives the epoch date value (in milliseconds) of current date
let maxDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

let ddMax = maxDate.getDate();
let mmMax = maxDate.getMonth() + 1;
let yyyyMax = maxDate.getFullYear();

if (ddMax < 10) {
  ddMax = "0" + ddMax;
}
if (mmMax < 10) {
  mmMax = "0" + mmMax;
}

maxDate = yyyyMax + "-" + mmMax + "-" + ddMax;
document.getElementById("input_date").setAttribute("max", maxDate);
localStorage.setItem(`PickUpDate`, maxDate.value);