// Objects properties
var shoppingCart = {
  mouse: 1,
  keyboard: 2,
  sunglass: 3,
  books: 4,
  pen: 5,
};

console.log(shoppingCart);

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
console.log("Pen value by dot notation:", penCount);

// alternative system as like array
var penCount2 = shoppingCart["pen"];
console.log("Pen value by shoppingCart['pen']:", penCount2);

// find the object properties or keys like an array
var properties = Object.keys(shoppingCart);
console.log("Object properties or keys like an array:");
console.log(properties);

// find the property values or key values
var propertyValues = Object.values(shoppingCart);
console.log("Property or key values are:");
console.log(propertyValues);

// alternative way to find single property with value
var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// set property values way 1
console.log(shoppingCart);
shoppingCart.mouse = 10;
console.log("Set property values 1st way:");
console.log(shoppingCart);

// set property values alternative way 3
shoppingCart["mouse"] = 20;
console.log("Set values 2nd way:");
console.log(shoppingCart);

// set property values alternative way 3
var propertKey = "mouse";
shoppingCart[propertKey] = 30;
console.log("Set values 3rd way:");
console.log(shoppingCart);
