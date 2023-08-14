function cubeNumber(number) {
  if (typeof number === "number") {
    const result = number * number * number;
    return result;
  }
  return "Please enter a number.";
}



function matchFinder(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    if (string1.includes(string2)) {
      return true;
    }
    return false;
  }
  return "Please enter two strings.";
}



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



function findAddress(obj) {
  var streetProperty = obj.street || "__";
  var houseProperty = obj.house || "__";
  var societyProperty = obj.society || "__";

  return streetProperty + "," + houseProperty + "," + societyProperty;
}


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