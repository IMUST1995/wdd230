const joinContainer = document.querySelector('.joinContainer')
window.onresize = () => {
    if(window.innerWidth > 560){
        joinContainer.classList.remove('displayNone')
    }
    else{
        joinContainer.classList.add('displayNone')
    }
};

if(window.innerWidth > 560){
    joinContainer.classList.remove('displayNone')
}


const largeMenu = document.querySelector('.menuLarge')
window.onresize = () => {
    if (window.innerWidth > 960){
        largeMenu.classList.remove('displayNone')
    }
    else{
    largeMenu.classList.add('displayNone')
    }
};
if(window.innerWidth > 960){
    largeMenu.classList.remove('displayNone')
}


const spotlightThreeContainer = document.querySelector('.spotlightThreeContainer')
window.onresize = () => {
    if (window.innerWidth > 960){
        spotlightThreeContainer.classList.remove('displayNone')
    }
    else{
        spotlightThreeContainer.classList.add('displayNone')
    }
};
if(window.innerWidth > 960){
    spotlightThreeContainer.classList.remove('displayNone')
}
