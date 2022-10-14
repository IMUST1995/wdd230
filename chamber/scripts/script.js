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


/* const joinContainer = document.querySelector('.joinContainer')
window.onresize = () => {
    if(window.innerWidth > 560){
        joinContainer.classList.remove('displayNone')
    }
};

if(window.innerWidth > 560){
    joinContainer.classList.remove('displayNone')
} */



const menu = document.querySelector('.smallMenu')
/*  if(window.innerWidth > 960){
    menu.classList.remove('diplayNone')
} 
window.onresize = () => {
    if (window.innerWidth > 960){ 
    menu.classList.toggle('displayNone')
    }
    else if ({
        menu.classList.toggle('displayNone')
    }
}; */
/* const largeMenu = document.querySelector('.smallMenu')

if(window.innerWidth > 960){
    largeMenu.classList.toggle('menuLarge')
}
window.onresize = () => {
    if (window.innerWidth > 960){
        largeMenu.classList.add('menuLarge')
        alert('menularge')
    }
    else{
    largeMenu.classList.add('displayNone')
    }
}; */



/* const spotlightThreeContainer = document.querySelector('.spotlightThreeContainer')
window.onresize = () => {
    if (window.innerWidth > 960){
        spotlightThreeContainer.classList.remove('displayNone')
    }
};
if(window.innerWidth > 960){
    spotlightThreeContainer.classList.remove('displayNone')
} */
