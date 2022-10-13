let cityName = document.getElementById("search-bar").value;
let submitBtn = document.getElementById("submit-btn");

let latitude;
let longitude;

let API_key = "42ed2084f37c9ed9eb1c3d3983b0521e";

"http://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=5&appid=42ed2084f37c9ed9eb1c3d3983b0521e"

function getLocation (){
    let cityName = document.getElementById("search-bar").value;
    
    let apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + API_key;

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
        })
};


function getWeather (latitude, longitude) {
    let apiUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_key + "&cnt=40&units=imperial ";

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    console.log(data.city.name);
                    // Create for loop to get every 8th item in the array. 
                    // This is due to the forecast being every 3 hours. 3 x 8 to get the forecast for each day.
                    for(i=0; i < data.list.length; i+= 8){
                        console.log(data.list[i])
                    }
                })
            }else{
                alert("Error: " + response.statusText)
            }
        })

    console.log(apiUrl);
}

submitBtn.addEventListener("click", getLocation);


"https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_key;


