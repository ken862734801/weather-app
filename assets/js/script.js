// DOM Element Variables 
// Variables for the saved page section.
let savedPage = document.getElementById("saved-page");
let closeBtn = document.getElementById("close-btn");
let widgetContainer = document.getElementById("widget-container");

// Variables for the home page section.
let homePage = document.getElementById("home-page");
let plus = document.querySelector(".plus");
let menu = document.querySelector(".menu-bars");

// Dynamic variables for the weather forecast.
let city = document.getElementById("city");
let date = document.getElementById("date");
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

// Variables for the search page section.
let searchPage = document.getElementById("search-page");
let searchInput = document.getElementById("search-input");
let clearBtn = document.getElementById("clear-btn");
let cancelBtn = document.getElementById("cancel-btn");
let results = document.getElementById("result");
let suggestions = document.querySelectorAll(".suggestion");

function openSearch (){
    searchPage.style.height = "100%";
    searchInput.focus();
    homePage.style.display = "none"
};

function closeSearch (){
    searchPage.style.height = "0";
    homePage.style.display = "block";
    searchInput.blur();
    window.scrollTo(0, 0);
};

plus.addEventListener("click", openSearch);
cancelBtn.addEventListener("click", closeSearch);

searchInput.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        clearResult();
        getLocation(searchInput.value);
        saveSearch(searchInput.value);
        setTimeout(() => {
            searchInput.value = "";
        }, 50);
        searchInput.blur();
        closeSearch();
    }
});
// Function to clear the autocomplete suggestions.
function clearResult(){
    results.textContent = "";
};

// Function to reveal X, and clear search bar on click.
$(".search-box").each(function(){

    const $input = $(this).find("input:text"),
        $clear = $(this).find(".clear-btn");

        $input.on("input", function(){
            $clear.toggle(!!this.value);
        })

        $clear.on("touchstart click", function(e){
            e.preventDefault();
            clearResult();
            $input.val("").trigger("input");
        })
});
// Elements related to the autocomplete functionality.

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b1c514fd5msh008f6b5969378c2p1fc1b8jsnc954fe15b8f8',
		'X-RapidAPI-Host': 'spott.p.rapidapi.com'
	}
};

// fetch('https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q=Sea&type=CITY', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

// Functions to log the user input and then show the results in a list. 
//Temporary array of cities, will be using the SPOTT API to fetch json information of cites.
city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

function autocompleteMatch(input) {
    if (input == '') {
        return [];
}
    var reg = new RegExp(input)
    return city_names.filter(function(term) {
        if (term.match(reg)) {
            return term;
        }
    });
};

// function showResults(val) {
//     res = document.getElementById("result");
//     res.innerHTML = '';
    // let terms = autocompleteMatch(val);
    //     for (i=0; i<terms.length; i++) {
    //         renderResults(terms)
    //     }
// };

// Function to render the data from the API.
function renderResultsAPI(data){
    if(searchInput.value === ""){
        return
    }else{
        let li = document.createElement("li");
        li.textContent = data.name;

        li.className = "suggestion";
        results.appendChild(li);
    }
};
// Function to render the data from the hardcoded array as a back up.
function renderResults(data){
    if(searchInput.value === ""){
        return
    }else{
        let li = document.createElement("li");
        li.textContent = data[i];

        li.className = "suggestion";
        results.appendChild(li);
    }
};

  function showResults(val) {
    res = document.getElementById("result");
    res.innerHTML = '';
    if (val == '') {
      return;
    }
    fetch("https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q="+ val + "&type=CITY", options)
    .then(function (response) {
       return response.json();
     }).then(function (data) {
        console.log(data);
       for (i=0; i<data.length; i++) {
         renderResultsAPI(data[i])
       };
       return true;
     }).catch(function (err) {
       console.warn('Something went wrong.', err);
       let terms = autocompleteMatch(val);
       for (i=0; i<terms.length; i++) {
           renderResults(terms)
       }
       return false;
     });
  };


// Function to allow the user to click a suggestion and record the input. 
results.addEventListener("click", (e)=> {
    if(e.target.className === "suggestion"){
        searchInput.value = e.target.textContent;
        getLocation(searchInput.value);
        saveSearch(searchInput.value);
        console.log(searchInput.value);
        setTimeout(()=> {
            searchInput.value = "";
        }, 50);
        results.textContent = "";
        closeSearch();
        searchInput.blur();
    }
});

// Functions to open and close the saved page.

function openSaved() {
    savedPage.style.width = "100%";
    setTimeout(()=> {
        homePage.style.display = "none";
    }, 300);
};
function closeSaved() {
    savedPage.style.width = "0";
    homePage.style.display = "block";
};

menu.addEventListener("click", openSaved);
closeBtn.addEventListener("click", closeSaved);


//Functions related to weather data.
let API_key = "42ed2084f37c9ed9eb1c3d3983b0521e";
let latitude;
let longitude;
let cityName;

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

var objToday = new Date();
weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
dayOfWeek = weekday[objToday.getDay()];
day.textContent = dayOfWeek;

const today = new Date();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = mm + '/' + dd 
date.textContent = formattedToday;

function renderCurrentForecast (data) {

    city.textContent = data.city.name;
    weather.textContent = data.list[0].weather[0].description;
    icon.src = "./assets/images/" + data.list[0].weather[0].icon + "-large.png";
    temperature.textContent = data.list[0].main.temp.toFixed();
    tempMin.innerHTML = `<span class="arrow"> &#9660; </span> ${data.list[0].main.temp_min.toFixed()} &#176;`
    tempMax.innerHTML = `<span class="arrow"> &#9650; </span> ${data.list[0].main.temp_max.toFixed()} &#176;`
    feels_like.innerHTML = `${data.list[0].main.feels_like.toFixed()}  &#176;`
    humidity.textContent = `${data.list[0].main.humidity} %`
    wind.textContent = `${data.list[0].wind.speed.toFixed()} mph`;
    pressure.textContent = `${data.list[0].main.pressure}`
 
    getLocalTime(data.city.timezone);
    setMessage();
    
};
getLocation("Miami");

let newTime;
function getLocalTime (timezone){
    let time = new Date ();
    let localTime = time.getTime();
    let localOffset = time.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let city = utc + (1000 * + timezone)
    newTime = parseInt(new Date(city).getHours());
    console.log(newTime);
    return newTime
};

function setMessage (){
    if(newTime < 12){
        time.textContent = "MORNING";
    }else if (newTime < 18){
        time.textContent = "AFTERNOON";
    }else{
        time.textContent = "EVENING";
    }
};

let searches = [];

function saveSearch (city){
    if(searches.includes(city)) {
        return    
    }else if(searches.length === 6){
        searches.splice(0,1);
        searches.push(city);
        localStorage.setItem("cities", JSON.stringify(searches))
        widgetContainer.textContent = "";
        for(i =0; i < searches.length; i++){
            getSavedLocation(searches[i]);
            console.log(searches)
        }
    }else{
        searches.push(city);
        widgetContainer.textContent = "";
        for(i =0; i < searches.length; i++){
            getSavedLocation(searches[i]);
            console.log(searches)
        }
        localStorage.setItem("cities", JSON.stringify(searches))
    }
};


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

    let widget = document.createElement("div");
    let widgetHeader = document.createElement("h6");
    let widgetFigure = document.createElement("figure");
    let widgetImage = document.createElement("img");
    let widgetTemp = document.createElement("h6");

    widget.className = "widget";
    widgetHeader.className = "widget-header";
    widgetFigure.className = "widget-image";
    widgetImage.src = "./assets/images/" + data.list[0].weather[0].icon + "-large.png";
    widgetTemp.className = "widget-temp";

    widgetFigure.appendChild(widgetImage);

    widgetHeader.textContent = data.city.name;
    widgetTemp.innerHTML = `${data.list[0].main.temp.toFixed()}  &#176;`

    widgetContainer.appendChild(widget);
    widget.append(widgetHeader, widgetFigure, widgetTemp);

    widget.addEventListener("click", function(){
        getLocation(widgetHeader.textContent);
        for(i=0; i < searches.length; i++){
            widgetContainer.textContent = "";
            getSavedLocation(searches[i]);
        }
        closeSaved();
    })
};



function renderStoredSearches (){
    let storedSearches = JSON.parse(localStorage.getItem("cities"));
    if(storedSearches !== null){
        for(i=0; i< storedSearches.length; i++){
            getSavedLocation(storedSearches[i])
        }
    }else{
        return
    }
}
renderStoredSearches();

// d = new Date()
// localTime = d.getTime()
// localOffset = d.getTimezoneOffset() * 60000
// utc = localTime + localOffset
// var atlanta = utc + (1000 * -25200)
// nd = new Date(atlanta)
// console.log(nd);

// function getLocalTime (timezone){
//     let time = new Date ();
//     let localTime = time.getTime();
//     let localOffset = time.getTimezoneOffset() * 60000;
//     let utc = localTime + localOffset;
//     let city = utc + (1000 * + timezone)
//     let newTime = new Date(city).getHours();
//     console.log(newTime.getHours());
//     return newTime
// };
