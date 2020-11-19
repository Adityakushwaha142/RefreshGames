let randomno1 = Math.floor(Math.random() * 6) + 1;
let randomimage1 = "./images" + "/dice" + randomno1 + ".png";
let randomno2 = Math.floor(Math.random() * 6) + 1;
let randomimage2 = "./images" + "/dice" + randomno2 + ".png";

document.querySelector(".img1").setAttribute("src", randomimage1);
document.querySelector(".img2").setAttribute("src", randomimage2);

if (randomimage1 > randomimage2) {
  document.querySelector(".refresh").innerHTML = " Player1 Wins";
} else if (randomimage2 > randomimage1) {
  document.querySelector(".refresh").innerHTML = " Player2 Wins";
} else {
  document.querySelector(".refresh").innerHTML = " Draw !";
}
