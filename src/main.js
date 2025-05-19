// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f5386d5abdb68c41a9946e1bbf35a438

const apiKey = "f5386d5abdb68c41a9946e1bbf35a438"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unites=metric&q=bangalore";


async function checkWeater(){
    const respose =   await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await respose.json();


    console.log(data)
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = data.main.temp + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
}
checkWeater()