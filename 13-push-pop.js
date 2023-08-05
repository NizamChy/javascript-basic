var num = [20, 30, 40];
console.log("Initial array : ", num);

num.push(50);
console.log("Push 50 : ", num);

//push adds element from last
//pop remove element from last

var element = num.pop();
console.log("Pop from last : ", num);
console.log("Number removed : ", element);

//how to add(unshift) element from the beginning of an array
//remove(shift) element from first (shift)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Initial array : ", fruits);
fruits.unshift("Lemon", "Pineapple");

console.log("Adding from first(unshift) : ", fruits);

fruits.shift();

console.log("Removing from first(shift) : ", fruits);

var sliceMe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before Slice", sliceMe);
var cut = sliceMe.slice(2, 6);
console.log("After slice (2,6) = ", cut);

var names = "Nizam Noyon Julie Naima";
var checkMe = names.includes('Nizam');
console.log("Check words : ", checkMe)
