var numbers = [10, 50, 60, 30, 40, 70, 20, 80];

for (var i = 0; i < numbers.length; i++) {
  number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}
