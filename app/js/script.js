// Variables

let yourBudget = prompt('Ваш бюджет?');
let nameShop = prompt('Название вашего магазина?');

// Objects

mainList = {
	yourBudget: yourBudget,
	nameShop: nameShop,
	shopGoods: [],
	employers: {},
	propertyOpen: open()
};

for(let i = 1; i <= 3; i++) {
	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?');
}

var dayBudget = Math.round(mainList.yourBudget / 30);

var el = document.getElementById('dayBudget');
el.innerHTML = dayBudget;