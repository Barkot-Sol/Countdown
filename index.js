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
const blocksEl = document.querySelectorAll(".blocks");
const items = document.querySelectorAll(".blocks h2");

let futureDate = new Date(2026, 1, 15, 18, 30, 0);
const year = futureDate.getFullYear();


const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveawayEL.textContent = `Giveaway ends on ${year} ${hours}:${minutes}`
