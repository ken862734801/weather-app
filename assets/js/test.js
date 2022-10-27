const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b19242e27mshaaddac799972dfep1bbe51jsnba083ea5c7fd',
		'X-RapidAPI-Host': 'spott.p.rapidapi.com'
	}
};

// fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=300000&namePrefix=miami', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

var search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = '';
  let list = '';
  let apiUrl = "https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&country=US%2CCA&q="+ val + "&type=CITY";
  fetch(apiUrl)
    .then(function(response){
        if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    for(i=0; i < data.length; i++){
                        list += `<li> + ${terms[i]} + </li>`
                    }
                    res.innerHTML = `<ul> + ${list} + </ul>`
                })
        }else{
            console.log("Error: " + response.statusText)
        }
    })
//   let terms = autocompleteMatch(val);
//   for (i=0; i<terms.length; i++) {
//     list += '<li>' + terms[i] + '</li>';
//   }
//   res.innerHTML = '<ul>' + list + '</ul>';
};


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
//   }