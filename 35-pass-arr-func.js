function myArray(takeArray) {
  console.log(takeArray);
}

const givenArray = ["array", "to", "function"];
myArray(givenArray);

function passArrAvg(a, b, c) {
  console.log("Array elements getting by function parameter.");
  console.log(a);
  console.log(b);
  console.log(c);
}

const marks = [60, 53, 60];

// old way to pass array elements to function
// passArrAvg.apply(null, marks);

// ES6 way (best way)
passArrAvg(...marks);
