function sortMaker(arr) {
  var num1 = arr[0];
  var num2 = arr[1];
  var newArr = [];
  if (num1 >= 0 && num2 >= 0) {
    if (num2 > num1) {
      var temp = num1;
      num1 = num2;
      num2 = temp;
      newArr = [num1, num2];
      return newArr;
    } else if (num1 === num2) {
      return "equal";
    }
    return arr;
  }
  return "Invalid Input";
}

// let myArray = [0, 1];
// let ans = sortMaker(myArray);
// console.log(ans);


/**
 * problem link:
 * https://drive.google.com/file/d/1omce-JAZg-W0UyfDOLpEg1GzZuIExzId/view
 */
