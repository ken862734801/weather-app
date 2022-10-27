// Variables for the DOM elements.
let city = document.getElementById("city");
let weather = document.getElementById("weather");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temperature");
let tempMax = document.getElementById("temp-max");
let tempMin = document.getElementById("temp-min");
let feels_like = document.getElementById("feels-like");
let humidity = document.getElementById("humidity"); 
let wind = document.getElementById("wind");
let pressure = document.getElementById("pressure");
let day = document.getElementById("day");
let time = document.getElementById("time");

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
        let city_name = search_input.value.toLowerCase();
        getLocation(city_name)
        saveSearch(city_name)
        search_input.value = "";
        closeSearch();
        window.scrollTo(0, 0);
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
                    getWeather(latitude, longitude)
                    return {latitude, longitude}
                })
            }else{
                alert("Error: " + response.statusText);
            }
        })
};

function getWeather (latitude, longitude){
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_key + "&cnt=10&units=imperial ";

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    renderCurrentForecast(data)
                })
            }else{
                alert("Error: " + response.statusText)
            }
        })
};

// Method to get the day.
var objToday = new Date();
weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
dayOfWeek = weekday[objToday.getDay()];
day.textContent = dayOfWeek;

function renderCurrentForecast (data) {

    city.textContent = data.city.name;
    weather.textContent = data.list[0].weather[0].main;
    icon.src = "./assets/images/" + data.list[0].weather[0].icon + "-large.png";
    temperature.textContent = data.list[0].main.temp.toFixed();
    tempMin.innerHTML = `<span class="arrow"> &#9660; </span> ${data.list[0].main.temp_min.toFixed()} &#176;`
    tempMax.innerHTML = `<span class="arrow"> &#9650; </span> ${data.list[0].main.temp_max.toFixed()} &#176;`
    feels_like.innerHTML = `${data.list[0].main.feels_like.toFixed()}  &#176;`
    humidity.textContent = `${data.list[0].main.humidity} %`
    wind.textContent = `${data.list[0].wind.speed.toFixed()} mph`;
    pressure.textContent = `${data.list[0].main.pressure}`

    let currentTime = new Date(data.list[0].dt * 1000);
    let hour = currentTime.getHours();
    setMessage(hour);
    
};
function setMessage (hour){
    if(hour < 12){
        time.textContent = "MORNING";
    }else if (hour < 18){
        time.textContent = "AFTERNOON";
    }else{
        time.textContent = "EVENING";
    }
};

// getLocation("Miami");

let gridItems = document.querySelectorAll(".grid-item");
// gridItems[i].firstElementChild.textContent
console.log(gridItems.length)

gridItems.forEach(gridItem =>{
    gridItem.addEventListener("click", ()=>{
        console.log(gridItem.firstElementChild.textContent);
        getLocation(gridItem.firstElementChild.textContent);
        closeNav();
    })
})

const today = new Date();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = mm + '/' + dd 

document.getElementById('date').textContent = formattedToday;

let searches = [];

function saveSearch (city){
    if(searches.includes(city)) {
        return    
    }else if(searches.length === 7){
        return
    }else{
        searches.unshift(city);
        getSavedLocation(searches[0]);
        console.log(searches);
    }
}


function getSavedLocation (city){
    let apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + API_key;

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    latitude = data[0].lat;
                    longitude = data[0].lon;
                    getSavedWeather(latitude, longitude)
                })
            }else{
                alert("Error: " + response.statusText);
            }
        })
};

function getSavedWeather (latitude, longitude){
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_key + "&cnt=10&units=imperial ";

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    renderSavedCity(data);
                })
            }else{
                alert("Error: " + response.statusText)
            }
        })
};

function renderSavedCity(data){
    let gridContainer = document.getElementById("grid-container");

    let widget = document.createElement("div");
    let widgetHeader = document.createElement("h6");
    let widgetFigure = document.createElement("figure");
    let widgetImage = document.createElement("img");
    let widgetTemp = document.createElement("h6");

    widget.className = "grid-item";
    widgetHeader.className = "item-header";
    widgetFigure.className = "item-image";
    widgetImage.src = "./assets/images/" + data.list[0].weather[0].icon + "-large.png";
    widgetTemp.className = "item-temp";

    widgetFigure.appendChild(widgetImage);

    widgetHeader.textContent = data.city.name;
    widgetTemp.innerHTML = `${data.list[0].main.temp.toFixed()}  &#176;`

    gridContainer.appendChild(widget);
    widget.append(widgetHeader, widgetFigure, widgetTemp);
};

function setEmptyMessage(){
    
}