var scores = [85, 66, 95, 56, 40];

for (var i = 0; i < scores.length; i++) {
  var score = scores[i];
  if (score >= 80) {
    console.log(score, " = A");
  } else if (score >= 60) {
    console.log(score, " = B");
  } else if (score >= 50) {
    console.log(score, " = C");
  } else if (score >= 40) {
    console.log(score, " = D");
  } else {
    console.log(score, " = A");
  }
}
