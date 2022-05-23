import "./style.scss";
import "./node_modules/scrollreveal/dist/scrollreveal.js";
import "./node_modules/waypoints/lib/noframework.waypoints.min.js";
import "./node_modules/jquery/dist/jquery.min.js";
import "./node_modules/owl.carousel/dist/owl.carousel.min.js";

("use strict");

// toggle nav open, close
const btnMobile = document.querySelector(".btn-mobile");
btnMobile.addEventListener("click", function () {
  console.log(this.classList.toggle("open"));
  this.closest(".myNav").classList.toggle("nav-open");
});

// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 30,
    autoplay: true,
    loop: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
});

//way point nav sticky
const navBar = document.querySelector(".myNav");
const infoSec = document.querySelector("#about");
const navBarHeight = navBar.getBoundingClientRect().height;

new Waypoint({
  element: infoSec,
  handler: function (direction) {
    if (direction === "down") {
      infoSec.style.marginTop = navBarHeight + "px";
      navBar.classList.toggle("mySticky");
    }
    if (direction === "up") {
      infoSec.style.marginTop = 0 + "px";
      navBar.classList.toggle("mySticky");
    }
  },
});

// animation scroll reveal
const slideLeft = {
  distance: "70px",
  origin: "left",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideLeft", slideLeft);

const slideRight = {
  distance: "70px",
  origin: "right",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideRight", slideRight);

const slideLeftNum = {
  distance: "30px",
  origin: "left",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 400,
};
ScrollReveal().reveal(".slideLeftNum", slideLeftNum);

const slideBot = {
  distance: "70px",
  origin: "bottom",
  duration: 1000,
  interval: 250,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideBot", slideBot);

const slideTop = {
  distance: "70px",
  origin: "top",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideTop", slideTop);

// footer
const slideLeftAtOnce = {
  distance: "100px",
  origin: "left",
  interval: 10,
  duration: 1000,
  cleanup: true,
  delay: 300,
};
ScrollReveal().reveal(".slideLeftAll", slideLeftAtOnce);

const slideTopAtOnce = {
  distance: "50px",
  origin: "top",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideTopAll", slideTopAtOnce);

const slideBotAtOnce = {
  distance: "50px",
  origin: "bottom",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideBotAll", slideBotAtOnce);
