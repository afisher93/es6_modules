import Car from "./car.js";
export class Wishlist {
  constructor(list, nextId) {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    const car = new Car(++this.nextId, make, model, year);
    this.list.push(car);
  }
  remove(carId) {
    if (carId != id) {
      Number.splice(car);
    }
  }
  updateDOMList() {
    var listElements = document.querySelectorAll("#example li");

    for (var i = 0; (li = listElements[i]); i++) {
      //li.parentNode.removeChild(li);
      li.remove();
    }
    // iterate over wishlist
    const wishlistcontainer = document.querySelector("#wishListContainer > ul");
    for (var i = 0; i < this.list.length; i++) {
      const newListItem = document.createElement("li");
      newListItem.textContent = `${this.list[i].make}hello`;
      wishlistcontainer.append(newListItem);
      newListItem.addEventListener("click", () => showCarDetails(car));
    }
  }
  
  function1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(""));
    ul.appendChild(li);
  }
}