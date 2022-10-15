function responsiveMenu(){
    const icon = document.querySelector('.icon');
    const smallHead = document.querySelector('.smallHead')
    const smallMenu = document.querySelector('.smallMenu')
    icon.addEventListener('click', () => {
        smallHead.classList.toggle('displayNone')
        smallMenu.classList.toggle('displayNone');
        /* icon.classList.toggle('open'); */
})
    /* const iconX = document.querySelector('.iconX');
    iconX.addEventListener('click', () => {
        smallHead.classList.toggle('displayNone')
        smallMenu.classList.toggle('displayNone');
        iconX.classList.toggle('open');
    }) */
}


/* function panelDate(){
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function getDay(date, dayNames){
        let number = date.getDay()
        return dayNames[number]
    }

    function getMonth(date, monthNames){
        let number = date.getMonth()
        return monthNames[number]
    }
    const date = new Date();
    const year = date.getFullYear();
    const DayNumber = date.getDate()
    const day = getDay(date, dayNames)
    const month = getMonth(date, monthNames)
    const dateHeader = document.getElementById('dateHeader');
    dateHeader.innerHTML = `${day}, ${DayNumber} ${month} ${year}`
}
 */

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();
let number = date.getDay()
const day = dayNames[number]
let numberMonth = date.getMonth()
const month = monthNames[numberMonth]
const year = date.getFullYear();
const DayNumber = date.getDate()
const dateHeader = document.getElementById('dateHeader');
dateHeader.innerHTML = `${day}, ${DayNumber} ${month} ${year}`


const personalInfo = document.querySelector('#personalInfo');
personalInfo.innerHTML = `&copy ${year} | Denver Chamber of Commerce | Zeir Braidi | WDD 230 Project`
const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = `Last updated: ${document.lastModified}`

/* panelDate() */
responsiveMenu()

/* banner */

if(number == 3){
    const spanBanner = document.querySelector('#banner')
    spanBanner.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
    banner.classList.add('banner')
}
/* 🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m. */
