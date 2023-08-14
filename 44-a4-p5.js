function canPay(changeArray, totalDue) {
  if (changeArray.length != 0) {
    var sum = 0;
    for (var i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
    if (sum >= totalDue) {
      return true;
    }
    return false;
  }
  return "Your money bag is empty!";
}

// var money = [1, 5, 5];
// var chipsPrice = 10;

// console.log(canPay(money, chipsPrice));

/**
 * problem link:
 * https://drive.google.com/file/d/1omce-JAZg-W0UyfDOLpEg1GzZuIExzId/view
 */