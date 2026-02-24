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
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveawayEL = document.getElementById("giveaway");
const blocksEl = document.querySelector(".blocks");
const items = document.querySelectorAll(".blocks h2");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2026, 1, 23, 17, 30, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
// const month = futureDate.getMonth();
const month = months[futureDate.getMonth()];
// console.log(months[month]);
const day = days[futureDate.getDay()];
const dayNum = futureDate.getDate(); 
// console.log(dayNum);

giveawayEL.textContent = `Giveaway ends on ${day}, ${dayNum} ${month} ${year} ${hours}:${minutes}`

const countdownTime = futureDate.getTime();
function countdownRemainingTime(){
    const now = new Date().getTime();
    let sub = countdownTime - now;
    const dayBlock = Math.floor(sub / (1000*60*60*24));
    const hourBlock = Math.floor((sub % (1000*60*60*24)) / (1000*60*60));
    const minuteBlock = Math.floor((sub % (1000*60*60)) / (1000*60));
    const secondBlock = Math.floor((sub % (1000*60)) / 1000); 
    // console.log(dayBlock, hourBlock, minuteBlock, secondBlock); 
    let values = [dayBlock, hourBlock, minuteBlock, secondBlock];
    function format(item){
        if(item<10){
            return item = `0${item}`;
        }
        return item;
    }
    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if (sub<0){
        clearInterval(countdown);
        blocksEl.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
    }
}

let countdown = setInterval(countdownRemainingTime, 1000);
countdownRemainingTime();