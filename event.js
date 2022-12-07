var weddingEvent = document.getElementById("wedding-event");
var luncheonEvent = document.getElementById("luncheon-event");
var partyEvent = document.getElementById("party-event");
var getTogetherEvent = document.getElementById("get-together-event");

weddingEvent.addEventListener("click", selectWeddingEvent);
luncheonEvent.addEventListener("click", selectLuncheonEvent);
partyEvent.addEventListener("click", selectPartyEvent);
getTogetherEvent.addEventListener("click", selectGetTogetherEvent);

function selectWeddingEvent() {
  luncheonEvent.classList.remove("selected");
  partyEvent.classList.remove("selected");
  getTogetherEvent.classList.remove("selected");
  weddingEvent.classList.add("selected");
}
function selectLuncheonEvent() {
  partyEvent.classList.remove("selected");
  getTogetherEvent.classList.remove("selected");
  weddingEvent.classList.remove("selected");
  luncheonEvent.classList.add("selected");
}
function selectPartyEvent() {
  getTogetherEvent.classList.remove("selected");
  weddingEvent.classList.remove("selected");
  luncheonEvent.classList.remove("selected");
  partyEvent.classList.add("selected");
}
function selectGetTogetherEvent() {
  weddingEvent.classList.remove("selected");
  luncheonEvent.classList.remove("selected");
  partyEvent.classList.remove("selected");
  getTogetherEvent.classList.add("selected");
}
