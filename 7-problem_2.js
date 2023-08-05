var math = 75.25;
var biology = 65;
var chem = 80;
var phy = 35.45;
var bangla = 99.50;

var totalSub = 5;

var totalMarks = math+biology+chem+phy+bangla;

var avg = totalMarks / totalSub;
var avgFixed = avg.toFixed(2);

console.log("The average number is = ", avgFixed);