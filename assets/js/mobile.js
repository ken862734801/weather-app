// Variables for the DOM elements.
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let feels_like = document.getElementById("feels-like");
let humidity = document.getElementById("humidity"); 
let wind = document.getElementById("wind");
let visibility = document.getElementById("visibility");

let menuBars = document.querySelector(".menu-bars");
let closeBtn = document.getElementById("close-btn");

let searchBar = document.getElementById("searchbar");

let search_label = document.querySelector(".search-label");
let search_input = document.querySelector("#search-input");

let container = document.getElementById("container");
let plus = document.querySelector(".plus");

let closeSearchBtn = document.getElementById("close-search");
// search_label.addEventListener("click", function (){
//     searchBar.classList.toggle("collapsed");
// })

// search_input.addEventListener("keydown", function(e){
//     if(e.key === "enter"){
//        console.log("Click!")
//     }
// })
function openSearch (){
    document.getElementById("searchNav").style.height = "100%";
};

function closeSearch (){
    document.getElementById("searchNav").style.height = "0";
};

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  menuBars.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);

  plus.addEventListener("click", openSearch);
  closeSearchBtn.addEventListener("click", closeSearch)

