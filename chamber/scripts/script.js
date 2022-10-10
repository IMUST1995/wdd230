function responsiveMenu(){
    const icon = document.querySelector('.icon');
    const smallHead = document.querySelector('.smallHead')
    const smallMenu = document.querySelector('.smallMenu')
    icon.addEventListener('click', () => {
        smallHead.classList.toggle('displayNone')
        smallMenu.classList.toggle('displayNone');
})
}


function panelDate(){
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
const date = new Date();
const year = date.getFullYear();
const personalInfo = document.querySelector('#personalInfo');
personalInfo.innerHTML = `&copy ${year} | Denver Chamber of Commerce | Zeir Braidi | WDD 230 Project`
const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = `Last updated: ${document.lastModified}`

panelDate()
responsiveMenu()