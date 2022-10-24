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

// search_label.addEventListener("click", function (){
//     searchBar.classList.toggle("collapsed");
// })

// search_input.addEventListener("keydown", function(e){
//     if(e.key === "enter"){
//        console.log("Click!")
//     }
// })

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