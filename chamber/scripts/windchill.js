const windSpeedHolder =  document.querySelector('.windSpeedHolder')
const windChillHolder = document.querySelector('.windChillHolder')

function windChillFahrenheit(temperature, windSpeed){
  windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16
  windChill = windChill.toFixed(2)
  return windChill
};

const temperature = 50.0
const windSpeed = 3.0

windSpeedHolder.innerHTML = windSpeed
if(temperature <= 50.0 && windSpeed >= 3.0){
    const currentWindChillFahrenheit = windChillFahrenheit(temperature, windSpeed)
    windChillHolder.innerHTML = currentWindChillFahrenheit
    windChillHolder.innerHTML += ' mi/h'
}
else{
    windChillHolder.innerHTML = 'N/A'
}