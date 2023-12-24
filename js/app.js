const secondes = document.querySelector(".secondes");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
setInterval(timeDisplay, 1000);
function timeDisplay(timezone) {
	let sec = new Date().getSeconds().toString();
  let min = new Date().getMinutes().toString();
  let hr = new Date().getHours().toString();
	secondes.style.transform = `rotateZ(${sec * 6}deg)`;
	minutes.style.transform = `rotateZ(${min * 6}deg)`;
  hours.style.transform = `rotateZ(${(parseInt(hr) +0)* 30}deg)`;
}
