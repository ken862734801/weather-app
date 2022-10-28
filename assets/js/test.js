// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6b19242e27mshaaddac799972dfep1bbe51jsnba083ea5c7fd',
// 		'X-RapidAPI-Host': 'spott.p.rapidapi.com'
// 	}
// };

// fetch('https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q=miami&type=CITY', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

  // let url = "https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q=" + input + "&type=CITY";

var search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];

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
}

// function showResults(val) {
//   res = document.getElementById("result");
//   res.innerHTML = '';
//   let list = '';
//   let apiUrl = "https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q="+ val + "&type=CITY";
//   fetch(apiUrl)
//     .then(function(response){
//         if(response.ok){
//                 response.json().then(function(data){
//                     console.log(data);
//                     for(i=0; i < data.length; i++){
//                         list += `<li> + ${data[i].name} + </li>`
//                     }
//                     res.innerHTML = `<ul> + ${list} + </ul>`
//                 })
//         }else{
//             console.log("Error: " + response.statusText)
//         }
//     })
// //   let terms = autocompleteMatch(val);
// //   for (i=0; i<terms.length; i++) {
// //     list += '<li>' + terms[i] + '</li>';
// //   }
// //   res.innerHTML = '<ul>' + list + '</ul>';
// };


// function showResults(val) {
//     res = document.getElementById("result");
//     res.innerHTML = '';
//     if (val == '') {
//       return;
//     }
//     let list = '';
//     fetch('/suggest?q=' + val).then(
//      function (response) {
//        return response.json();
//      }).then(function (data) {
//        for (i=0; i<data.length; i++) {
//          list += '<li>' + data[i] + '</li>';
//        }
//        res.innerHTML = '<ul>' + list + '</ul>';
//        return true;
//      }).catch(function (err) {
//        console.warn('Something went wrong.', err);
//        return false;
//      });
//   };

city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
  
  // function autocompleteMatch(input) {
  //   if (input == '') {
  //     return [];
  //   }
  //   var reg = new RegExp(input)
  //   return city_names.filter(function(term) {
  //     if (term.match(reg)) {
  //       return term;
  //     }
  //   });
  // }
  
  function showResults(val) {
    res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (i=0; i<terms.length; i++) {
      list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
  }

//   function showResults(val) {
//     res = document.getElementById("result");
//     res.innerHTML = '';
//     if (val == '') {
//       return;
//     }
//     // let list = '';
//     fetch("https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q="+ val + "&type=CITY", options)
//     .then(function (response) {
//        return response.json();
//      }).then(function (data) {
//        for (i=0; i<data.length; i++) {
//          renderResults(data)
//        };
//        return true;
//      }).catch(function (err) {
//        console.warn('Something went wrong.', err);
//        return false;
//      });
//   };

// function renderResults (data){
//  if(input.value === ""){
//   return
//  }else{
//   let results = document.getElementById("result");
//   let li = document.createElement("li");

//   li.className = "suggestion";
//   li.textContent = data[i].name;

//   results.appendChild(li);

//  }

// };

// let suggestions = document.querySelectorAll(".suggestion");
// let input = document.getElementById("input");

// suggestions.forEach(suggestion => {
//   suggestion.addEventListener("click", (e) =>{
//     if(e.target.className === "suggestion"){
//       console.log("Clicking a suggestion!");
//     }
//   })
// });

// let results = document.getElementById("result");

// results.addEventListener("click", (e)=>{
//   if(e.target.className === "suggestion"){
//     let input = document.getElementById("input");
//     input.value = e.target.textContent;
//     console.log(input.value);
//     console.log("Clicking a suggestion!")
//     setTimeout(() => {
//       input.value = "";
//     }, 50);
//     results.innerHTML = "";
//   }
// });

// input.addEventListener("keyup", function(event) {
//   if (event.key === "Enter") {
//     results.textContent = "";
//     let input = document.getElementById("input");
//     console.log(input.value);
//     setTimeout(() => {
//       input.value = "";
//     }, 50);
//   }
// });

// if(input.value === ""){
//   results.textContent = "";
// }