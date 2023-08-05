for (var i = 0; i <= 10; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

var items = ["pen", "book", "phone", "laptop"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if (item == "phone") {
    break;
  }
  console.log(item);
}

var numbers = [10, 20, 30, 40, 50];
for (var i = 0; i < items.length; i++) {
  var number = numbers[i];
  if (number > 40) {
    break;
  }
  console.log(number);
}
