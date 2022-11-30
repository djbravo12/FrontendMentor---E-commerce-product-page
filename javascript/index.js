"use strict";

const productCountMinus = document.querySelector("#productCountMinus");
const productCountPlus = document.querySelector("#productCountPlus");
const productCountDisplay = document.querySelector("#productCountDisplay");
const addToCart = document.querySelector("#addToCart");
const noOfitemOnCart = document.querySelector("#noOfitemOnCart");
const userCart = document.querySelector("#userCart");
const cartDetails = document.querySelector("#cartDetails");
const emptyCart = document.querySelector("#emptyCart");
const filledCart = document.querySelector("#filledCart");
const totalCostDisplay = document.querySelector("#totalCostDisplay");
const totalItemDisplay = document.querySelector("#totalItemDisplay");
const productPrice = 125;

let countOfItem = 0;
let itemOnCart = 0;
let totalCost;

//intital values
const intialValue = function () {
  productCountDisplay.innerHTML = 0;
  addToCart.disabled = true;
  productCountMinus.disabled = true;
  countOfItem = 0;
  itemOnCart = 0;
};

// function for decreasing the count of cart item
productCountMinus.addEventListener("click", function () {
  countOfItem--;
  productCountDisplay.innerHTML = countOfItem;
  if (countOfItem == 0) {
    productCountMinus.disabled = true;
    addToCart.disabled = true;
  } else {
    productCountMinus.disabled = false;
    addToCart.disabled = false;
  }
});

// function for increasing the count of cart item
productCountPlus.addEventListener("click", function () {
  countOfItem++;
  productCountDisplay.innerHTML = countOfItem;
  productCountMinus.disabled = false;
  addToCart.disabled = false;
});

// calling the intial values
intialValue();

// function for add to cart
addToCart.addEventListener("click", function () {
  noOfitemOnCart.style.display = "block";
  noOfitemOnCart.innerHTML = countOfItem;
  itemOnCart = countOfItem;
});

const totalPriceFunction = function () {
  totalCost = productPrice * itemOnCart;
  totalCostDisplay.innerHTML = `$${totalCost}.00`;
  totalItemDisplay.innerHTML = itemOnCart;
};

const tsry = function () {
  cartDetails.classList.toggle("display-block");
};

userCart.addEventListener("click", function () {
  //   cartDetails.classList.toggle("display-block");
  tsry();
  if (itemOnCart == 0) {
    emptyCart.classList.add("display-block");
    filledCart.classList.remove("display-block");
  } else {
    filledCart.classList.add("display-block");
    emptyCart.classList.remove("display-block");
    totalPriceFunction();
  }
});

window.addEventListener("click", function () {
  if (!cartDetails.classList.contains("display-block")) {
    // cartDetails.classList.remove("display-block");
    tsry();
    console.log("5");
  }
});
