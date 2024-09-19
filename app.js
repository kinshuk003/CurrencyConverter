const API_URL =
	"https://v6.exchangerate-api.com/v6/c0247a9393fd7a1ed7d11ef8/latest";

const dropdowns = document.querySelectorAll(".dropdown");
const exchange = document.querySelector("#icon");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const amt = document.querySelector("#amt");
const btn = document.querySelector("button");
let msg = document.querySelector("#msg");

for (let select of dropdowns) {
	for (currency of currencies) {
		let newOption = document.createElement("option");
		newOption.value = currency.code;
		newOption.innerText = ` ${currency.code} (${currency.name})`;

		if (select.name == "from" && currency.code == "USD") {
			newOption.selected = true;
		}
		if (select.name == "to" && currency.code == "INR") {
			newOption.selected = true;
		}
		select.append(newOption);
	}
	select.addEventListener("change", (evt) => {
		updateFlag(evt.target);
	});
}

const updateFlag = (element) => {
	let currCode = element.value;
	let countryCode = currencies.find(
		(currency) => currency.code == currCode
	)?.countryCode;
	let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
	let img = element.parentElement.querySelector("img");
	img.src = newSrc;
};

const convert = async () => {
	const URL = `${API_URL}/${from.value}`;
	let response = await fetch(URL);
	let data = await response.json();
	let rate = data.conversion_rates[to.value];
	let result = amt.value * rate;
	msg.innerHTML = `${amt.value} ${from.value} = &nbsp <span style="color:#f0f2ef"> ${result} </span> &nbsp ${to.value}`;
};

exchange.addEventListener("click", () => {
	let val = from.value;
	from.value = to.value;
	to.value = val;
	updateFlag(from);
	updateFlag(to);
});

btn.addEventListener("click", (evt) => {
	evt.preventDefault();
	if (amt.value < 0 || amt.value === "") {
		amt.value = 1;
	}
	convert();
});

document.addEventListener("keydown", () => {
	btn.clicked();
});
