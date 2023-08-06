var shoppingCart = {
  mouse: 1,
  keyboard: 2,
  sunglass: 3,
  books: 4,
  pen: 5,
};
console.log("Object properties of shoppingCart:");
console.log(shoppingCart);

const properties = Object.keys(shoppingCart);
console.log("Property names : ");
console.log(properties);

const value = Object.values(shoppingCart);
console.log("Property values : ");
console.log(value);

//  keys = ['mouse','keyboard','sunglass', 'books''pen']
console.log("Using for loop for all property and value:");
for (var i = 0; i < properties.length; i++) {
  var propertyName = properties[i];
  var propertyValue = value[i];
  // var propertyValue = shoppingCart[propertyName]; //alternative value
  console.log(propertyName, propertyValue);
}

// alternative way of for loop
console.log("Alternative way of for loop:");
// for in loop
console.log("Using for in loop:");
for (var names in shoppingCart) {
  const val = shoppingCart[names];
  console.log(names, val);
}
