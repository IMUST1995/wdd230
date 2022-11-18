const cityName = 'denver'
const APIkey = 'ddb620661d0aaf562c78335649c76072'
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=imperial`
const windSpeedHolder =  document.querySelector('.windSpeedHolder')

getData(API_URL)
async function getData(url){
    const res = await fetch(url)
    const data = await(res.json())
    diplayWeatherData(data)
}

function diplayWeatherData(data){
    const imgWeather = document.querySelector('.imgWeather');
    imgWeather.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    const descHolder = document.getElementById('desc')
    const desc = data.weather[0].description;
        words = desc.split(' ')
    let newDesc = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    descHolder.innerHTML = newDesc
    const gradesFahrenheit = document.querySelector('#gradesFahrenheit')
    const windChillHolder = document.querySelector('.windChillHolder')
    const temperature = data.main.temp
    const windSpeed = data.wind.speed
    gradesFahrenheit.innerHTML = temperature.toFixed()
    windSpeedHolder.innerHTML = windSpeed 

    if(temperature <= 50.0 && windSpeed >= 3.0){
        const currentWindChillFahrenheit = windChillFahrenheit(temperature, windSpeed)
        windChillHolder.innerHTML = currentWindChillFahrenheit
        windChillHolder.innerHTML += ' mi/h'
    }
    else{
        windChillHolder.innerHTML = 'N/A'
    }
}

function windChillFahrenheit(temperature, windSpeed){
    windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16
    windChill = windChill.toFixed(2)
    return windChill
}