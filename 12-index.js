// => array position starts from 0 index 

var numbers = [10, 11, 12, 13, 14];
console.log("Array elements are : ",numbers);

// 1. Get element by Index
console.log("Get element by Index 0 is : ",numbers[0]);

// 2. Set element value by index
numbers[0] = 5;
console.log("Set element value by index : ", numbers);

// 2. find index of an element 
var position = numbers.indexOf(14);
console.log("The position or index of 14 : ",position);
// if index is -1 that means searched element is not in the array