# weather-app

https://ken862734801.github.io/weather-app/

## Preview

<img src="assets/images/weather-app-1.png" width="420" height="896">
<img src="assets/images/weather-app-2.png" width="420" height="896">
<img src="assets/images/weather-app-3.png" width="420" height="896">

## Summary
The goal of this assignment was to create a weather dashboard using data fetched from the Open Weather API. Instead of a dashboard, I opted to develop a "mobile app" based on a design I encountered on behance. This was my first time designing something completely with mobile in mind, and I definitely plan on revisiting this project when I learn a framework more suited for mobile developement. With regard to implementation of the API, the process of fetching data from the API was relatively simple.

## Features
- Dynamic icons depending on weather conditions and time of day. 
- Dynamic date and message depending on the time of day.
- Autocomplete matching user input in the searchbar.  
- The most recent searches are stored in local storage and are rendered as widgets.
- Widgets can be clicked on to re-render the main forecast on the home page.

## Future Development
- Open Weather API currently provides a 5 day forecast; however, currently this only displays the current weather at the searched location. In the future I would like to include a   carousel at the day location, in which, the user can swipe and be given the forecast for the following day. 

- The autocomplete function currently is hard coded and is using an array of popular US cities. The user is still able to search for locations outside of the US; however, they will not be seen as suggested under the search input. I originally wanted to use the Google Places Autocomplete API, to accomplish this; however, it is not readily availabe. The goal here is to find another automplete API to generate a larger list of cities to be suggested during the user search. 

- The Spott API, found on Rapid API,  looks like a promising alternative, but I will still have to go through the documentation.

     https://rapidapi.com/Spott/api/spott

- The inclusion of a placeholder image or a loading animation while the data is being fetch.
- The inclusion of visual feedback when a bad request has been made. Currently an error message is logged and the search is returned; however, that is not enough of an indication to the user.

## Resources
- This would not have been possible without the Open Weather API:

    https://openweathermap.org/api

- Linked below is the design I based this application on. I loved the minimalistic design, and I would encourage you to checkout their other works:

    https://www.behance.net/gallery/22645245/Weather-apptracking_source=search_projects%7Cweather+app&

- Linked below is where I found the weather icons:

    https://brunch.co.kr/@design-melon/69#comment

- This blog post was a major aid in the development of the autocomplete feature:

    https://www.algolia.com/blog/engineering/how-to-implement-autocomplete-with-javascript-on-your-website/