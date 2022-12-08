var all = document.getElementById("all");
var forYou = document.getElementById("forYou");
var online = document.getElementById("online");
var today = document.getElementById("today");
var thisWeekend = document.getElementById("thisWeekend");
var free = document.getElementById("free");
var music = document.getElementById("music");
var foodAndDrink = document.getElementById("food&Drinks");
var charityAndCauses = document.getElementById("charity&Causes");

all.addEventListener("click", selectAll);
forYou.addEventListener("click", selectForYou);
online.addEventListener("click", selectOnline);
today.addEventListener("click", selectToday);
thisWeekend.addEventListener("click", selectThisWeekend);
free.addEventListener("click", selectFree);
music.addEventListener("click", selectMusic);
foodAndDrink.addEventListener("click", selectFoodAndDrinks);
charityAndCauses.addEventListener("click", selectCharityAndCauses);

function selectAll() {
  forYou.classList.remove("selected");
  online.classList.remove("selected");
  today.classList.remove("selected");
  thisWeekend.classList.remove("selected");
  free.classList.remove("selected");
  music.classList.remove("selected");
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.remove("selected");
  all.classList.add("selected");
}
function selectForYou() {
  online.classList.remove("selected");
  today.classList.remove("selected");
  thisWeekend.classList.remove("selected");
  free.classList.remove("selected");
  music.classList.remove("selected");
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.remove("selected");
  all.classList.remove("selected");
  forYou.classList.add("selected");
}
function selectOnline() {
  today.classList.remove("selected");
  thisWeekend.classList.remove("selected");
  free.classList.remove("selected");
  music.classList.remove("selected");
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.remove("selected");
  all.classList.remove("selected");
  forYou.classList.remove("selected");
  online.classList.add("selected");
}
function selectToday() {
  thisWeekend.classList.remove("selected");
  free.classList.remove("selected");
  music.classList.remove("selected");
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.remove("selected");
  all.classList.remove("selected");
  forYou.classList.remove("selected");
  online.classList.remove("selected");
  today.classList.add("selected");
}
function selectThisWeekend() {
  free.classList.remove("selected");
  music.classList.remove("selected");
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.remove("selected");
  all.classList.remove("selected");
  forYou.classList.remove("selected");
  online.classList.remove("selected");
  today.classList.remove("selected");
  thisWeekend.classList.add("selected");
}
function selectFree() {
  music.classList.remove("selected");
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.remove("selected");
  all.classList.remove("selected");
  forYou.classList.remove("selected");
  online.classList.remove("selected");
  today.classList.remove("selected");
  thisWeekend.classList.remove("selected");
  free.classList.add("selected");
}
function selectMusic() {
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.remove("selected");
  all.classList.remove("selected");
  forYou.classList.remove("selected");
  online.classList.remove("selected");
  today.classList.remove("selected");
  thisWeekend.classList.remove("selected");
  free.classList.remove("selected");
  music.classList.add("selected");
}
function selectFoodAndDrinks() {
  charityAndCauses.classList.remove("selected");
  all.classList.remove("selected");
  forYou.classList.remove("selected");
  online.classList.remove("selected");
  today.classList.remove("selected");
  thisWeekend.classList.remove("selected");
  free.classList.remove("selected");
  music.classList.remove("selected");
  foodAndDrink.classList.add("selected");
}
function selectCharityAndCauses() {
  all.classList.remove("selected");
  forYou.classList.remove("selected");
  online.classList.remove("selected");
  today.classList.remove("selected");
  thisWeekend.classList.remove("selected");
  free.classList.remove("selected");
  music.classList.remove("selected");
  foodAndDrink.classList.remove("selected");
  charityAndCauses.classList.add("selected");
}
