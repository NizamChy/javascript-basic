// Problem solving with function

function arrAvg(asg1, asg2, asg3, size) {
  console.log("Assignments marks:", asg1, asg2, asg3);
  var sum = asg1 + asg2 + asg3;
  console.log("Total marks:", sum);
  var avg = sum / size;
  return avg;
}

const marks = [60, 53, 60];
var arrSize = marks.length;
// console.log(arrSize);

var avgMarks = arrAvg(...marks, arrSize);
console.log("Average Marks:", avgMarks);
