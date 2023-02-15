import Car from "./car.js";
import { Wishlist } from "./wishlist.js";
document.getElementById("makeInput");
document.getElementById("modelInput");
document.getElementById("yearInput");
document.getElementById("car-make");
document.getElementById("car-model");
document.getElementById("car-year");
document.getElementsByClassName("btn btn-warning removeBtn");
document.getElementsByTagName("ul");
const car = new Car();

function showCarDetails(car) {
  car.make = undefined;
  car.model = undefined;
  car.year = undefined;
  const btn = document.getElementByClass("btn btn-warning removeBtn");
  btn.disabled = false;
  btn.setAttribute("data-carId", car.id);
}
