const secondes = document.querySelector(".secondes");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
function Func() {
	fetch("../city.json")
		.then((res) => {
			return res.json();
		})
		.then((data) => console.log(data));
}
Func();
setInterval(timeDisplay(4), 1000);
function timeDisplay(timezone) {
	let sec = new Date().getUTCSeconds().toString();
	let min = new Date().getUTCMinutes().toString();
	let hr = new Date().getUTCHours().toString();
	secondes.style.transform = `rotateZ(${sec * 6}deg)`;
	minutes.style.transform = `rotateZ(${min * 6}deg)`;
	hours.style.transform = `rotateZ(${(parseInt(hr) + 1) * 30}deg)`;
}
