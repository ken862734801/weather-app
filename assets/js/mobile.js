// Variables for the DOM elements.
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let feels_like = document.getElementById("feels-like");
let humidity = document.getElementById("humidity"); 
let wind = document.getElementById("wind");
let visibility = document.getElementById("visibility");

let menuBars = document.querySelector(".menu-bars");
let searchBar = document.querySelector("search-bar");

let nav = document.querySelector(".nav");

function openNav(){
    nav.style.width = "250px";
};

function closeNav (){
    nav.style.width = "0px";
};

menuBars.addEventListener("click", openNav);
