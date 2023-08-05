function bringTea(money) {
  console.log("** Function **");
  console.log("MAMA nen", money, "taka.");
  var teaPrice = 10;
  var takeTea = money / teaPrice;
  console.log("MAMA cha nen", takeTea, "cup!");
}

bringTea(50);

// *******************************************************

// multiple parameters
function add(a, b, c, d, e) {
  console.log("** Function with multiple parameters **");
  console.log("Going to add : ", a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}

add(5, 5, 5, 5, 4);

// *******************************************************

// use of return keyword

// function functionName (parameters){
//   function body
//   return
// }
// var returnedValue = functionName(parameters value)

function sub(number1, number2) {
  console.log("** Function with return keyword **");
  console.log(number1, number2);
  var ans = number2 - number1;
  return ans;
  // console.log("The difference is : ", ans);
}
// console.log(sub(40, 100)); // can be define as
var num1 = 50;
var num2 = 200;
var diff = sub(num1, num2);

console.log("The difference is : ", diff);

// *******************************************************
// function can be called multiple times
function add2(x, y) {

  console.log("Passing parameters value :", x, y);
  var sum2 = x + y;
  return sum2;
}
console.log("***************");
var call1 = add2(5, 5);
var call2 = add2(10, 10);
var call3 = add2(500, 500);
console.log("Multiple times calls results : ", call1, call2, call3);
