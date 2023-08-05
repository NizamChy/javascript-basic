// string conversion
var num1 = "30";
console.log("Number 1 is = ",num1);
var num2 = "20";
console.log("Number 2 is = ",num2);
var total = num1+num2;
console.log("Before string conversion = ",total);

var convertedNumber1 = parseInt(num1);
var convertedNumber2 = parseInt(num2);
console.log("After string conversion = ",convertedNumber1);
console.log("After string conversion = ",convertedNumber2);

console.log("The sum = ",convertedNumber1+convertedNumber2);

var gpa = 3.33;
console.log("Your gpa is = ", gpa);
console.log("After convering in Integer = ",parseInt(gpa));
console.log("After convering in float = ",parseFloat(gpa));

//upper and lower case 
var names = "nIzaM ChoWdhUry";
console.log("The text is : ",names);
var upper = names.toUpperCase();
console.log("Upper case : ",upper);
var lower = names.toLowerCase();
console.log("Lower case : ",lower);