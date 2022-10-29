let dailyForecast = document.getElementById("daily-forecast");
let clearBtn = document.getElementById("clear-history-btn");
let submitBtn = document.getElementById("submit-btn");


let API_key = "42ed2084f37c9ed9eb1c3d3983b0521e";
let latitude;
let longitude;

function getLocation (){
    let cityName = document.getElementById("search-bar").value;
    let apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + API_key;

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    latitude = data[0].lat;
                    longitude = data[0].lon;
                    console.log(cityName)
                    console.log(latitude, longitude)
                    getWeather(latitude, longitude)
                })
            }else{
                alert("Error: " + response.statusText);
            }
        })
};


function updateLocation(e){
    let cityName = e.target.textContent;

    let apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + API_key;

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    latitude = data[0].lat;
                    longitude = data[0].lon;
                    getWeather(latitude, longitude)
                })
            }else{
                alert("Error: " + response.statusText);
            }
        })

};

function getWeather (latitude, longitude){
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_key + "&cnt=40&units=imperial ";

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    renderCurrentForecast(data.city.name, data.list[0].weather[0].icon, data.list[0].main.temp, data.list[0].wind.speed, data.list[0].main.humidity);
                    for(i=0; i < data.list.length; i+=8){
                        console.log(data.list[i]);
                        renderDailyForecast(data.list[i].main.temp, data.list[i].weather[0].icon, data.list[i].wind.speed, data.list[i].main.humidity);
                    };
                        saveToHistory(data.city.name);
                        renderSearchHistory();
                })
            }else{
                alert("Error: " + response.statusText)
            }
        })

};
function renderCurrentForecast(city, icon, temp, wind, humidity){

    dailyForecast.textContent = "";
    
    document.getElementById("city").textContent = city;
    document.getElementById("icon").src = "./assets/images/" + icon + "-large.png";
    document.getElementById("temp").textContent = temp;
    document.getElementById("wind").textContent = wind;
    document.getElementById("humidity").textContent = humidity;

}

function renderDailyForecast(temp, icon, wind, humidity){

    let card = document.createElement("div");
    let cardDate = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardTemp = document.createElement("div");
    let cardWind = document.createElement("div");
    let cardHumidity = document.createElement("div");

    cardTemp.textContent = temp;
    cardImage.src = "./assets/images/" + icon + ".png";
    cardWind.textContent = wind;
    cardHumidity.textContent = humidity;

    card.append(cardDate, cardImage, cardTemp, cardWind, cardHumidity);
    dailyForecast.appendChild(card)

};

let history = [];

function saveToHistory (city){
    history.push(city);
    localStorage.setItem("cities", JSON.stringify(history));
    console.log(history); 
};

function clearHistory (){
    history.length = 0;
     searchHistory.textContent = "";
    localStorage.clear();
    console.log(history)
};

function renderSearchHistory (){
    searchHistory = document.getElementById("search-history");
    searchHistory.textContent = "";
    for(i =0; i < history.length; i++){
        let button = document.createElement("button");
        button.textContent = history[i];
        searchHistory.appendChild(button)
    }
};

submitBtn.addEventListener("click", getLocation);
clearBtn.addEventListener("click", clearHistory);





