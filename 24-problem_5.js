var fruits = ["Apple", "Banana", "Orange"];
console.log("Given array : ", fruits);

var bananaIndex = fruits.indexOf("Banana");
console.log("Index of Banana : ", bananaIndex);

// fruits[1] = "Mango";
fruits[bananaIndex] = "Mango";
console.log("Replacing Banana with Mango : ", fruits);

fruits.pop();
console.log("Array after removing Orange : ", fruits);

fruits.push("Watermelon");
console.log("Array after adding Watermelon : ", fruits);
