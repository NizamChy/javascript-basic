// Problem solving with function

function make_avg(ass1, ass2, ass3) {
  sum = ass1 + ass2 + ass3;
  var avg = sum / 3;
  return avg;
}

var assignment1 = 60;
var assignment2 = 53;
var assignment3 = 60;

var avgMarks = make_avg(assignment1, assignment2, assignment3);
console.log(avgMarks);
