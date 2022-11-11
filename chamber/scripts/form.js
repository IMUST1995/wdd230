/* __________________form section _______________ */
const formDate = document.querySelector('#formDate');
formDate.value = 'date'
const currentTime = document.querySelector('#currentTime');
currentTime.value = date.getTime()
// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day12 = hour * 24;
const year12 = day12 * 365;

// Divide Time with a year
const d = new Date();
let years = Math.round(d.getTime() / year12);
/* console.log(minute, hour, day12, year12, years) */
