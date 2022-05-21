let apiKey = "e36de33dcd9ce052838d0366b135d6f3";
let searchCity = "Hanoi";
let unit = "metric"

let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=${unit}`;

let now = new Date();

let weekdays = [
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    ];

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

let currentDay = weekdays[now.getDay()];
let currentDate = now.getDate();
let currentMonth = months[now.getMonth()];
let currentYear = now.getFullYear();

let today = document.querySelector("h2");
today.innerHTML = `${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`;

let city = document.querySelector("#city-name");
let chosenLocation = document.querySelector("h3#chosen-location");
let searchForCity = document.querySelector("#select-city");
let currentCity = document.getElementById('currentCity');

function showTemp(response) {
    console.log(response);
    let temperature = document.querySelector("#temperature-details");
    let humidity = document.querySelector("#humidity-value");
    let wind = document.querySelector("#wind-speed");
    let currentTemp = Math.round(response.data.main.temp);
    chosenLocation.innerHTML = response.data.name;
    temperature.innerHTML = `${currentTemp}`;
    // console.log(response.data.main.temp);
    // console.log(response.data.main.humidity);
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = response.data.wind.speed;
  }

  function showLocation(response) {
    let lon = response.coords.longitude;
    let lat = response.coords.latitude;
    axios.get(`${url}&lon=${lon}&lat=${lat}`).then(showTemp);
  }
  
function showCurrentLocation() {
    navigator.geolocation.getCurrentPosition(showLocation);
  }


function updateCity(event) {
    event.preventDefault();
    if (city.value) {
    // chosenLocation.innerHTML = city.value;
    axios.get(`${url}&q=${city.value}`).then(showTemp);
    console.log(city.value);
    } else {
    alert (`Please choose a city`);
    }
    
};

searchForCity.addEventListener("submit", updateCity);
currentCity.addEventListener("click", showCurrentLocation);

// let chooseDegree = document.querySelector("#degree");
// let celsiusButton = document.querySelector("#celsius");
// let temperatureDetails = document.querySelector("#temperature-details");

// function updateDegree() {
// if (celsiusButton.checked) {
// temperatureDetails.innerHTML = "13";
// } else { 
//     temperatureDetails.innerHTML = "36";
// }
// };




// chooseDegree.addEventListener("change", updateDegree);



  
  


