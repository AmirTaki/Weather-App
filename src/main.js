// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f5386d5abdb68c41a9946e1bbf35a438

const apiKey = "f5386d5abdb68c41a9946e1bbf35a438"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unites=imperial&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon =  document.querySelector('.weather-icon');

async function checkWeater(city){
    const respose =   await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await respose.json();

    console.log(data)
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round (data.main.temp) + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == 'Clouds'){
        weatherIcon.src  = 'src/image/clouds.png'
    }
    else if (data.weather[0].main == 'Rain'){
        weatherIcon.src  = 'src/image/rain.png'
    }
    else if (data.weather[0].main == 'Clear'){
        weatherIcon.src  = 'src/image/clear.png'
    }
    else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src  = 'src/image/drizzle.png'
    }
    else if (data.weather[0].main == 'Mist'){
        weatherIcon.src  = 'src/image/mist.png'
    }



}

searchBtn.addEventListener('click', (e)=>{ {
    checkWeater(searchBox.value);
}})
