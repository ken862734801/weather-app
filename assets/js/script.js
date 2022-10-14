let searchbar = document.getElementById("search-bar");
let submitBtn = document.getElementById("submit-btn");

let latitude;
let longitude;

let API_key = "42ed2084f37c9ed9eb1c3d3983b0521e";

"http://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=5&appid=42ed2084f37c9ed9eb1c3d3983b0521e"

let history = [];
let searchHistory = document.getElementById("search-history");

function saveToHistory (city){
    history.push(city);
    console.log(history)
}
function clearHistory (){
    history.length = 0;
    searchHistory.textContent = "";
    console.log(history)
}
function renderSearchHistory (){
    searchHistory = document.getElementById("search-history");
    searchHistory.textContent = "";
    for(i =0; i < history.length; i++){
        let button = document.createElement("button");
        button.textContent = history[i];
        searchHistory.appendChild(button)
    }
}
let clearHistoryBtn = document.getElementById("clear-history-btn");
clearHistoryBtn.addEventListener("click", clearHistory);

function getLocation (){
    let cityName = document.getElementById("search-bar").value;
    
    let apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + API_key;
    console.log(apiUrl);
    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){

                    let latitude = data[0].lat;
                    let longitude = data[0].lon;
                    getWeather(latitude, longitude);

                    console.log(latitude);
                    console.log(longitude);
                })
            }else{
                alert("Error: " + response.statusText);
            }
        });
};


function getWeather (latitude, longitude) {
    let apiUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_key + "&cnt=40&units=imperial ";

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    console.log(data.city.name);
                    renderTodaysForecast(data.city.name, data.list[0].main.temp, data.list[0].wind.speed, data.list[0].main.humidity);
                    // Create for loop to get every 8th item in the array. 
                    // This is due to the forecast being every 3 hours. 3 x 8 to get the forecast for each day.
                    for(i=0; i < data.list.length; i+= 8){
                        console.log(data.list[i]);
                        renderWeeklyForecast(data.list[i].main.temp, data.list[i].wind.speed, data.list[i].main.humidity)
                    };
                    saveToHistory(data.city.name);
                    renderSearchHistory()
                })
            }else{
                alert("Error: " + response.statusText)
            }
        })

    console.log(apiUrl);
};
function renderTodaysForecast(city, temp, wind, humidity){
    weeklyForecast.textContent = "";

    document.getElementById("city").textContent = city;
    document.getElementById("temp").textContent = temp;
    document.getElementById("wind").textContent = wind;
    document.getElementById("humidity").textContent = humidity;
}
function renderWeeklyForecast(temp, wind, humidity){
    let card = document.createElement("div");
    let cardDate = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardTemp = document.createElement("div");
    let cardWind = document.createElement("div");
    let cardHumidity = document.createElement("div");

    cardTemp.textContent = temp;
    cardWind.textContent = wind;
    cardHumidity.textContent = humidity;

    card.append(cardDate, cardImage, cardTemp, cardWind, cardHumidity);
    weeklyForecast.appendChild(card)
}

let weeklyForecast = document.getElementById("weekly-forecast");

submitBtn.addEventListener("click", getLocation);


"https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_key;


