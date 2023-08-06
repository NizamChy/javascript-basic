var myPhone = {
  brand: "Realme",
  model: 6,
  color: "white",
  price: 25000,
  ram: "8 gb",
  rom: "128 gb",
  processor: "Mediatek Helio G90T",
};

console.log("Objects single property : ", myPhone.brand);
// changing the property value
myPhone.price = 20000;
console.log("Objects whole properties : ", myPhone);


// *********************************************
// array vs object
var friends = ["sultan", "sakib", "mun", "fahim"];
var friendsAge = [20, 21, 22, 23];

var friend = {
  sultan: 20,
  sakib: 21,
  mun: 22,
  fahim: 21,
};

