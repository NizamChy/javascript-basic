function findAddress(obj) {
  var streetProperty = obj.street || "__";
  var houseProperty = obj.house || "__";
  var societyProperty = obj.society || "__";

  return streetProperty + "," + houseProperty + "," + societyProperty;
}


// var address = {
//   street: 10,
//   house: "15A",
//   society: "Earth Perfect",
// };
// var adressValues = findAddress(address);
// console.log(adressValues);


/**
 * problem link:
 * https://drive.google.com/file/d/1omce-JAZg-W0UyfDOLpEg1GzZuIExzId/view
 */