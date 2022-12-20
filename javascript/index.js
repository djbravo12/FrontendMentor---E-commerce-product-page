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
const deleteButton = document.querySelector("#deleteButton");
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

userCart.addEventListener("click", function () {
  cartDetails.classList.toggle("display-block");
  if (itemOnCart == 0) {
    emptyCart.classList.add("display-block");
    filledCart.classList.remove("display-block");
  } else {
    filledCart.classList.add("display-block");
    emptyCart.classList.remove("display-block");
    totalPriceFunction();
  }
});

// function to empty the cart

deleteButton.addEventListener("click", function () {
  itemOnCart = 0;
  emptyCart.classList.add("display-block");
  filledCart.classList.remove("display-block");
  noOfitemOnCart.style.display = "none";
  // cartDetails.classList.remove("display-block");
  console.log("delete");
});

// function for navigation bar for mobile layout

const menuButton = document.querySelector("#menuButton");
const hideNavbar = document.querySelector("#hideNavbar");
const closeButton = document.querySelector("#closeButton");
const upperNav = document.querySelector("#upperNav");

// hideNavbar.style.display = "block";

const toggleNavbar = function () {
  hideNavbar.classList.toggle("display-block");
  upperNav.classList.toggle("display-block");
};

menuButton.addEventListener("click", toggleNavbar);
closeButton.addEventListener("click", toggleNavbar);

// CAROUSEL JS
// mobile view carousel

const carouselTrack = document.querySelector("#carouselTrack");
const slides = Array.from(carouselTrack.children);
const previousBtn = document.querySelector("#peviousImageSliderBtn");
const nextbtn = document.querySelector("#nextImageSliderBtn");
const slideWidth = slides[0].getBoundingClientRect().width;

// function to add witdh to the next image in the list
const setSlidePosition = function (slide, index) {
  slide.style.left = `${slideWidth * index}px`;
};

slides.forEach(setSlidePosition);

//function to add the class "current-slide" to the target slide
const slideToMove = function (
  paramCarouselTrack,
  paramCurrentSlide,
  targetSlide
) {
  paramCarouselTrack.style.transform = `translateX(-${targetSlide.style.left})`;
  paramCurrentSlide.classList.remove("currentSlide");
  targetSlide.classList.add("currentSlide");
};

// Event listener for next button to show the next image
nextbtn.addEventListener("click", () => {
  const currentSlide = carouselTrack.querySelector(".currentSlide");
  const nextSlide = currentSlide.nextElementSibling;
  slideToMove(carouselTrack, currentSlide, nextSlide);
});

// Event listener for previous button to show the previous image
previousBtn.addEventListener("click", () => {
  const currentSlide = carouselTrack.querySelector(".currentSlide");
  const prevSlide = currentSlide.previousElementSibling;
  slideToMove(carouselTrack, currentSlide, prevSlide, currentSlide);
});

// desktop carousel js

const desktopCarouselTrack = document.querySelector("#desktopCarouselTrack");
const desktopSlide = Array.from(desktopCarouselTrack.children);
const desktopCarouselNextBtn = document.querySelector(
  "#desktopCarouselNextBtn"
);
const desktopCarouselPreviousBtn = document.querySelector(
  "#desktopCarouselPreviousBtn"
);
const desktopSlideWidth = desktopSlide[0].getBoundingClientRect().width;

const setdesktopSlidePosition = function (slides, index) {
  slides.style.left = `${desktopSlideWidth * index}px`;
};

desktopSlide.forEach(setSlidePosition);
// console.log(check);

const desktopSlideToMove = function (
  paramCarouselTrack,
  paramCurrentSlide,
  targetSlide
) {
  paramCarouselTrack.style.transform = `translateX(-${targetSlide.style.left})`;
  paramCurrentSlide.classList.remove("currentDesktopSlide");
  targetSlide.classList.add("currentDesktopSlide");
};

desktopCarouselNextBtn.addEventListener("click", () => {
  const currentDesktopSlide = desktopCarouselTrack.querySelector(
    ".currentDesktopSlide"
  );
  const nextDesktopSlide = currentDesktopSlide.nextElementSibling;
  desktopSlideToMove(
    desktopCarouselTrack,
    currentDesktopSlide,
    nextDesktopSlide
  );
  // alert("heelo");
});

desktopCarouselPreviousBtn.addEventListener("click", () => {
  const currentDesktopSlide = desktopCarouselTrack.querySelector(
    ".currentDesktopSlide"
  );
  const prevDesktopSlide = currentDesktopSlide.previousElementSibling;
  desktopSlideToMove(
    desktopCarouselTrack,
    currentDesktopSlide,
    prevDesktopSlide
  );
  // alert("heelo");
});

const desktopCarouselCloseBtn = document.querySelector(
  "#desktopCarouselCloseBtn"
);

const lightBox = document.querySelector(".lightbox");

desktopCarouselCloseBtn.addEventListener("click", () => {
  console.log(lightBox);
  lightBox.classList.add("desktop-display-none");
});
