const API_URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'
/* const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=c4fc425f2bdf0be4e46d3bf001bef301&query="' */

const main = document.getElementById('main')

getMovier(API_URL)
async function getMovier(url){
    const res = await fetch(url)
    const data = await res.json()
    const prophets = data.prophets
    showProphets(prophets)
    console.log(prophets)
}

function showProphets(prophets){
    main.innerHTML = ''
    prophets.forEach(prophet => {
        const {name, lastname, birthdate, imageurl, birthplace, order} = prophet
        const prophetElement = document.createElement('section')
        prophetElement.classList.add('card')

        const fullNameContainer = document.createElement('div')
        fullNameContainer.classList.add('headerCard')
        const fullName = document.createElement('h2')
        fullName.innerHTML = `${name} ${lastname}`
        fullNameContainer.appendChild(fullName)

        const prophetImg = document.createElement('img')
        prophetImg.setAttribute('src', imageurl);
        prophetImg.setAttribute('alt', `"Portait of ' ${name} ${lastname} - ${order}th Latter-day President"`)
        prophetImg.setAttribute('loading', 'lazy')

        switch(order) {
            case 1:
                prophetImg.alt = `"Portait of ' ${name} ${lastname} - ${order}st Latter-day President"`
              break;
            case 2:
                prophetImg.alt = `"Portait of ' ${name} ${lastname} - ${order}nd Latter-day President"`
              break;
            case 3:
            prophetImg.alt = `"Portait of ' ${name} ${lastname} - ${order}rd Latter-day President"`
            break;
          }
          console.log(prophetImg.alt)

        const birthContainer = document.createElement('div')
        birthContainer.classList.add('datesContainer')
        const dateBirth = document.createElement('h3')
        dateBirth.innerHTML = `Date of birth: ${birthdate}`
        const place = document.createElement('h3')
        place.innerHTML = `Place of birth: ${birthplace}`
        birthContainer.appendChild(dateBirth)
        birthContainer.appendChild(place)

        prophetElement.appendChild(fullNameContainer)
        prophetElement.appendChild(prophetImg)
        prophetElement.appendChild(birthContainer)
        main.appendChild(prophetElement)
    });
}