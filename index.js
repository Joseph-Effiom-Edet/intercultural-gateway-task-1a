var i = 0;
var images = [];
var time = 3000;

images[0] = "./assets/pexels-cottonbro-studio-3171837.jpg";
images[1] = "./assets/pexels-emma-bauso-2253870.jpg";
images[2] = "./assets/pexels-min-an-758898.jpg";
images[3] = "./assets/pexels-vishnu-r-nair-1105666.jpg";

function changeImg() {
  document.getElementById("slide").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

var eventInput = document.getElementById("eventInput");
eventInput.addEventListener("change", change);
function change() {
  var heroButton = document.getElementById("heroButton");
  heroButton.innerText = "View " + eventInput.value + " Events";
  console.log(eventInput.value);
}
