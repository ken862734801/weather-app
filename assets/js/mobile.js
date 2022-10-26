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
let searchNav = document.getElementById("searchNav");


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
    setTimeout(() => {
        container.style.display = "none";;
      }, 150);
};

function closeSearch (){
    document.getElementById("searchNav").style.height = "0";
        container.style.display = "block";;

};

let API_key = "42ed2084f37c9ed9eb1c3d3983b0521e";
let latitude;
let longitude;
let cityName;

// function search(ele) {
//     if(event.key === 'Enter') {
//         cityName = ele.value;
//         search_input.value = ""; 
//         getLocation(cityName) ;
//     }
// };

search_input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getLocation(search_input.value)
    }
});

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

  function getLocation (city){
    let apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + API_key;

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    latitude = data[0].lat;
                    longitude = data[0].lon;
                    console.log(city)
                    console.log(latitude, longitude)
                })
            }else{
                alert("Error: " + response.statusText);
            }
        })
};
