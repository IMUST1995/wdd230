const q = 'Fairbanks'
const APIkey = 'ddb620661d0aaf562c78335649c76072'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${APIkey}&units=imperial`
const footer = document.querySelector('footer')
footer.innerHTML = `<p class="textFooter">Zeir Braidi | 🏛 BYU-Idaho | WDD 230</p>`


function website(q){
  const main = document.querySelector('main');
  main.innerHTML = ''
  const card = document.createElement('div')
  const header = document.querySelector('header')
  header.innerHTML = `<h1>OpenWeatherMap.org API Test</h1>`
  card.classList.add('card')
  main.appendChild(card)
  card.innerHTML = `
    <p>The current temperature in ${q} is <span id="current-temp"></span> &deg;F</p>
    <h3>Current Condition Icon</h3>
    <figure>
    <img src="" alt="" id="weather-icon" />
    <figcaption></figcaption>
    </figure>`
  const form = document.createElement('form')
  const input = document.createElement('input')
  const button = document.createElement('button')
  const buttonImg = document.createElement('img')
  const label = document.createElement('label')
  label.htmlFor = 'city'
  input.name = 'city'
  input.id = 'city'
  buttonImg.setAttribute('src', 'images/icon-search.svg')
  buttonImg.setAttribute('alt', 'search button')
  button.appendChild(buttonImg)
  button.id = 'search'
  button.addEventListener('click', () => {
    search(input.value, input)
  })
  input.setAttribute('type', 'text')
  input.placeholder = 'Search'
  label.appendChild(input)
  form.appendChild(label)
  form.appendChild(button)
  header.appendChild(form)

}


async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data)
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      alert('Try again, something got wrong!');
  }
}

function displayResults(weatherData, q){
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  let desc = weatherData.weather[0].description;
  words = desc.split(' ')
  let newDesc = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', newDesc);
  captionDesc.textContent = newDesc;
}

function search(value, input){
 input.value = ''
 const q = value
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${APIkey}&units=imperial`
 apiFetch(url)
 website(q)
}

website(q)
apiFetch(url)
