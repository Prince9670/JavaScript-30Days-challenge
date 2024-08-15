const apiKey = "09c8a223f6c577de4bcd0b2b68c953e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "cloudy,png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "clear-sky.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Rains.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    } 
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";     
    }
     
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
    

