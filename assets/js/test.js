let API_key = "42ed2084f37c9ed9eb1c3d3983b0521e";
let latitude;
let longitude;

let cityName;

let search_input = document.querySelector("#search-input");

function search(ele) {
    if(event.key === 'Enter') {
        cityName = ele.value;
        search_input.value = "";
        console.log(cityName);        
    }
};

function getLocation (){
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

