// ================= ORDER NOW BUTTON =================

let orderButtons = document.querySelectorAll(".food-items .item button");
let cart = [];

orderButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let foodName = this.parentElement.querySelector("h3").innerText;
    let qty = prompt("Enter quantity for " + foodName, 1);

    if (qty == null || qty <= 0) {
      alert("Invalid quantity");
      return;
    }

    cart.push({ name: foodName, quantity: qty });
    alert(foodName + " added to cart 🛒");
    console.log(cart);
  });
});

// ================= SEARCH FUNCTION =================

let searchBox = document.querySelector(".input_field input");

searchBox.addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  let items = document.querySelectorAll(".food-items .item");

  items.forEach(function (item) {
    let name = item.querySelector("h3").innerText.toLowerCase();
    if (name.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// ================= CATEGORY FILTER (FULL WORKING) =================

let categoryButtons = document.querySelectorAll(".Choose_Category li");
let foodItems = document.querySelectorAll(".food-items .item");

categoryButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let text = btn.innerText.toLowerCase();

    // Detect category manually
    let category = "";

    if (text.includes("pizza")) category = "pizza";
    else if (text.includes("burger")) category = "burger";
    else if (text.includes("salad")) category = "salad";
    else if (text.includes("pasta")) category = "pasta";
    else if (text.includes("rice")) category = "rice";
    else if (text.includes("drink")) category = "drink";
    else if (text.includes("dessert")) category = "dessert";
    else if (text.includes("biriyani")) category = "biriyani";

    foodItems.forEach(function (item) {
      let foodName = item.querySelector("h3").innerText.toLowerCase();

      if (foodName.includes(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
