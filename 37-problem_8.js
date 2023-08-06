function odd_even(num) {
  if (num % 2 == 0) {
    return " is even number!";
  } else {
    return "is odd number!";
  }
}

var number = 31;
var checkOddEven = odd_even(number);

console.log(number, checkOddEven);
