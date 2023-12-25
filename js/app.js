import data from "./city.js";

const secondes = document.querySelector(".secondes");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const selector = document.querySelector("#cities");
// console.log(selector);
let options = [];
data.forEach((element) => {
	options.push({
		name: `[UTC${element.utc}] ${element.city} - ${element.country}`,
		id: element.id,
	});
});
// console.log(options);
// console.log(data);
for (let i = 0; i < options.length; i++) {
	const option = document.createElement("option");
	option.value = options[i].id;
	option.textContent = options[i].name;
	selector.appendChild(option);
}
let selectedOption = data[27].utc;
selector.addEventListener("change", () => {
	selectedOption = data[parseInt(selector.value)].utc;
});

setInterval(() => {
	let sec = new Date().getUTCSeconds().toString();
	let min = new Date().getUTCMinutes().toString();
	let hr = new Date().getUTCHours().toString();
	let hrs = parseInt(hr) + parseInt(selectedOption);
	if (hrs >= 24) {
		hrs = hrs - 24;
	}
	console.log("hr :>> ", hrs);
	secondes.style.transform = `rotateZ(${sec * 6}deg)`;
	minutes.style.transform = `rotateZ(${min * 6}deg)`;
	hours.style.transform = `rotateZ(${hrs * 30}deg)`;
}, 1000);
