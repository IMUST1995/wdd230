const API_URL = 'json/commerce.json'

const main = document.querySelector('main')

getData(API_URL, main)
async function getData(url){
    const res = await fetch(url)
    const data = await res.json()
    const commerces = data.commerces
    showCommerces(commerces, main)
}

function showCommerces(commerces, main){
    main.innerHTML = ''
    commerces.forEach(commerce => {
        const {name, phone, imageurl, address, id, websiteurl} = commerce;
        const commerceElement = document.createElement('div');
        commerceElement.classList.add('cardDirectory');

        const commerceImgContainer = document.createElement('div');
        commerceImgContainer.classList.add('imgContainer');

        const commerceImg = document.createElement('img');
        commerceImg.setAttribute('src', imageurl);
        commerceImg.setAttribute('alt', `${name}`);
        commerceImg.setAttribute('loading', 'lazy');

        const infoCommerceContainer = document.createElement('div');
        infoCommerceContainer.classList.add('infoCommerceContainer');

        const addressHolder = document.createElement('p');
        addressHolder.innerHTML = `${address}`;
        addressHolder.classList.add('commerceAddress');

        const phoneHolder = document.createElement('p');
        phoneHolder.innerHTML = `${phone}`;
        phoneHolder.classList.add('commercePhone');

        const websiteHolder = document.createElement('a');
        websiteHolder.innerHTML =  `${name}`;
        websiteHolder.setAttribute('href', websiteurl);
        websiteHolder.classList.add('commerceWebsite');

        commerceImgContainer.appendChild(commerceImg);

        infoCommerceContainer.appendChild(websiteHolder);
        infoCommerceContainer.appendChild(addressHolder);
        infoCommerceContainer.appendChild(phoneHolder);
        
        commerceElement.appendChild(commerceImgContainer);
        commerceElement.appendChild(infoCommerceContainer);
        main.appendChild(commerceElement);
        main.classList.add('mainDirectory')
    });
}
/* =============MENUS BUTTONS========== */
const gridButton = document.getElementById('gridButton')
gridButton.addEventListener('click', () => getData(API_URL))

const listButton = document.getElementById('listButton')
listButton.addEventListener('click', () => diplayListDirectory(main))


function diplayListDirectory(main){
    main.classList.remove('mainDirectory')
    const cardsCollection = document.getElementsByClassName('cardDirectory')
    const cards = [...cardsCollection]
    cards.forEach(card => {
        card.classList.add('cardList')
        card.classList.remove('cardDirectory')
    });
    const ImgCollection = document.getElementsByClassName('imgContainer')
    const imgs = [...ImgCollection]
    imgs.forEach(img => {
        img.remove()
    })
}