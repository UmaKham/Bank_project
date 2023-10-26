let tBody = document.querySelector("tbody");
let users = [{
		id: 1,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 2,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 3,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 4,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 5,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 6,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 7,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 8,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 9,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
	{
		id: 10,
		card: "VISA",
		catelories: "Автомобиль",
		sum: "414.000.000",
		time: "4 дня назад",
	},
];
reload(users, tBody);

function reload(arr, place) {
	place.innerHTML = "";
	for (let item of arr) {
		let tr = document.createElement("tr");
		let id = document.createElement("td");
		let card = document.createElement("td");
		let catelory = document.createElement("td");
		let sum = document.createElement("td");
		let time = document.createElement("td");

		id.innerHTML = item.id;
		card.innerHTML = item.card;
		catelory.innerHTML = item.catelories;
		sum.innerHTML = item.sum;
		time.innerHTML = item.time;

		tBody.append(tr);
		tr.append(id, card, catelory, sum, time);
	}
}