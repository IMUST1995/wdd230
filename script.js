const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
const lastDateModified = new Date(document.lastModified);
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];


const pfooter = document.getElementById('pfooter');
pfooter.innerHTML = `<p id='pfooter'>&copy ${year} .:|:. Zeir E. Braidi .:|:. Colorado</p>`;

const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = `<p id="currentDate">Last updated: ${lastDateModified}</p>`


