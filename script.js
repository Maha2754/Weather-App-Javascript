const apiKey = "3c9dd3ce2f6aa8c3764f38bd629eccc9";
// const city = "chennai";

const searchbox = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);

if(response.status == 404){
    document.querySelector('.error').style.display='block';
    document.querySelector('.weather').style.display='none';

}
else{
       var data = await response.json();

    // console.log(data)

    document.querySelector(".city").innerHTML = data.name;   //name outside la iruthuchu so direct ta carry pannitom
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";  //but temp main kula iruku so first main kuputu than temp pa kudpuda mudium
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hours";


    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./assets/clouds.png";   //image upadate pannurom

    }
    else if(data.weather[0].main === "Clear")
    {
        weatherIcon.src = "./assets/clear.png";

    }
     else if(data.weather[0].main === "Rain")
    {
        weatherIcon.src = "./assets/rain.png";

    }
     else if(data.weather[0].main === "Drizzle")
    {
        weatherIcon.src = "./assets/drizzle.png";

    }
     else if(data.weather[0].main === "Mist")
    {
        weatherIcon.src = "./assets/mist.png";

    }

searchbox.value= "";
document.querySelector(".weather").style.display='block';
document.querySelector(".error").style.display='none';

}
}

 
searchbtn.addEventListener('click', () => {
    checkWeather(searchbox.value)

})





