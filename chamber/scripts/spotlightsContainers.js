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
        phone.innerHTML = `
                ${data[i].phone}| <a href='${data[i].websiteurl}'>Website</a>
        `
    }
}

function cleanContainer(element){
    element.innerHTML = ''
}
