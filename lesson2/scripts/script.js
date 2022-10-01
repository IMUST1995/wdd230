const date = new Date();
const year = date.getFullYear();

const textfooter = document.getElementById('text');
textfooter.innerHTML = `&copy ${year} .:|:. Zeir E. Braidi .:|:. Colorado`;

const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = `Last updated: ${document.lastModified}`