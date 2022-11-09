const API_URL = '../json/commerce.json'

const main = document.getElementById('mainDirectory')

getMovier(API_URL)
async function getMovier(url){
    const res = await fetch(url)
    const data = await res.json()
    const commerces = data.commerces
    showCommerces(commerces)
}

function showCommerces(commerces){
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

        infoCommerceContainer.appendChild(addressHolder);
        infoCommerceContainer.appendChild(phoneHolder);
        infoCommerceContainer.appendChild(websiteHolder);
    
        commerceElement.appendChild(commerceImgContainer);
        commerceElement.appendChild(infoCommerceContainer);
        main.appendChild(commerceElement);
    });
}