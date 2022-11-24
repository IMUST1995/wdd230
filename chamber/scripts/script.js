function responsiveMenu(){
    const icon = document.querySelector('.icon');
    const smallHead = document.querySelector('.smallHead')
    const smallMenu = document.querySelector('.smallMenu')
    icon.addEventListener('click', () => {
        smallHead.classList.toggle('displayNone')
        smallMenu.classList.toggle('displayNone');
    })
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();
let numberDay = date.getDay()
const day = dayNames[numberDay]
let numberMonth = date.getDay()
const month = monthNames[numberMonth]
const year = date.getFullYear();
const DayNumber = date.getDate()
const dateHeader = document.getElementById('dateHeader');
dateHeader.innerHTML = `${day}, ${DayNumber} ${month} ${year}`


const personalInfo = document.querySelector('#personalInfo');
personalInfo.innerHTML = `&copy ${year} | Denver Chamber of Commerce | Zeir Braidi | WDD 230 Project`
const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = `Last updated: ${document.lastModified}`


responsiveMenu()

/* banner */

if(numberDay == 3){
    const spanBanner = document.querySelector('#banner')
    spanBanner.style.margin = "1rem 1rem 0 1rem"
    spanBanner.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
    banner.classList.add('banner')
}

/* ---------localstorage display
counter since last visit    ------ */
function differenceDaysBetweenVisits(date){
    /* a date to be storage => */
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const firstVisitDay = `${month}/${day}/${year}`
    const storedValue = localStorage.getItem('visitDate')
    /* select element to display info */
    const daysSinceLastVisitContainer = document.querySelector("#daysSinceLastVisit") 
    /* if there is not a value that we need inthe local storage we will set it, it means that is the first visit, otherwise we can get that value and sotage as the date1 then we can set a value with the current day. */
    if (!storedValue){
        localStorage.setItem('visitDate', firstVisitDay)
    } else{
        const date1 = new Date(storedValue)
        const day2 = date.getDate()
        const month2 = date.getMonth()
        const year2 = date.getFullYear()
        const date2 = new Date(`${month2}/${day2}/${year2}`)
        const difference = Math.abs(date2 - date1);
        const result =  difference / (1000 * 60 * 60 * 24);
        if(result > 0){
            daysSinceLastVisitContainer.innerHTML = `Days since last Visit ${result}`
            /* I added this las line to update the visit's date */
            localStorage.setItem('visitDate', firstVisitDay)
        }
    }

}
differenceDaysBetweenVisits(date)

/* --------------display commerces in the home page--------- */
const URL = 'json/commerce.json'
getData(URL)
async function getData(url){
    const res = await fetch(url)
    const data = await res.json()
    const commerces = data.commerces
    displayCommerces(commerces)
}

function displayCommerces(data){
    /* select containers to change */
    const spotlightContainer = document.querySelector('div.spotlightsHolder')
    const firstContainer = spotlightContainer.firstElementChild
    const secondContainer = firstContainer.nextElementSibling
    const thirdContainer = secondContainer.nextElementSibling

    let containersList = [firstContainer, secondContainer, thirdContainer]

    for(let i = 0;i < spotlightContainer.childElementCount; i++){
        const container = containersList[i]
        const img = container.childNodes[3].firstElementChild
        img.setAttribute('src', data[i].imageurl)
        const title = container.firstElementChild
        title.textContent = data[i].name
        const slogan = container.lastElementChild.firstElementChild
        slogan.textContent = data[i].slogan
        const address = container.lastElementChild.firstElementChild.nextElementSibling
        address.textContent = data[i].address
        const phone = container.lastElementChild.lastElementChild
        console.log(phone)
        phone.innerHTML = `
                ${data[i].phone}| <a href='${data[i].websiteurl}'>Website</a>
        `
    }
}

function cleanContainer(element){
    element.innerHTML = ''
}

/* function createCard(data, number){
    const commerce = data[number];
    const card = document.createElement('div')
    card.classList.add('spotlightCard')
    card.classList.add('smallSpot')
    card.classList.add('mediumSpotLight')
    console.log(card)
} */
