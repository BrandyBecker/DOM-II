// Your code goes here

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#1 - Changes Logo Color to Purple on Hover
const logoHead = document.querySelector(".logo-heading");

logoHead.addEventListener("mouseover", function() {
  logoHead.style.color = "purple";
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#2 - Changes Logo Color back to Black after Hover
logoHead.addEventListener("mouseout", function() {
  logoHead.style.color = "black";
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#3 - Clicking the Intro Img will result in a .gif
const img = document.querySelector(".intro img");

img.addEventListener("click", function() {
  img.src = "img/funbusgif.gif";
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#4 - Double clicking the .gif will result back to the header img
img.addEventListener("dblclick", function() {
  img.src = "img/fun-bus.jpg";
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#5 - Right clicking the nav will give you a pop up

window.addEventListener("contextmenu", function(x) {
  alert("Nothing to Right-Click Here...");
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

// #6 - pressing a key on your keyboard makes the Nav stay w/ you when you scroll
const body = document.querySelector("body");
const nav = document.querySelector(".main-navigation");
body.addEventListener("keydown", function() {
  nav.style.position = "absolute";
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#7 - pressing another key on your keyboard makes the Nav scroll with you when you scroll
body.addEventListener("keypress", function() {
  nav.style.position = "fixed";
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#8 - When you right click > copy , a notification pops up
body.addEventListener("copy", function(x) {
  alert(`Sorry bud, nothing to Copy here either!`);
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#9 - Pop up when screen loads

window.addEventListener("load", function() {
  window.prompt("Hey there! What's your name?");
});

//---------------------------------------------------------------------------------------------------------------------------------------------------

//#10 - when you scroll on the web page, it will randomly decide on a color for the Logo and font to be. each time you refresh and re-scroll, it'll be
//  a different color

const lastOne = document.querySelector("body");

x = ["green", "purple", "crimson", "aqua", "red", "yellow"];
let random = x[Math.floor(Math.random() * x.length)];

window.addEventListener("scroll", function() {
  lastOne.style.color = random;
});

//preventdefault and stoprop
const preventA = document.querySelectorAll("a");

preventA.forEach(function(a) {
  a.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
});

const navTwo = document.querySelector(".main-navigation");

navTwo.addEventListener("click", function(event) {
  alert("main-nav");
});
