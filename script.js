// selection using query selector
const buttons = document.querySelectorAll(".card button");
const button = document.querySelectorAll(".card button");
const carticon = document.querySelector(".cart_icon");

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const itemname = this.parentElement.querySelector("h3").textContent;
    carticon.title = itemname;
   alert(itemname + " added to cart!");
  });
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".list-items");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("show");
});
