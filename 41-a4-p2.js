function matchFinder(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    if (string1.includes(string2)) {
      return true;
    }
    return false;
  }
  return "Please enter two strings.";
}

// const str1 = "John Doe";
// const str2 = "ohn";
// const subString = matchFinder(str1, str2);
// console.log(subString);


/**
 * problem link:
 * https://drive.google.com/file/d/1omce-JAZg-W0UyfDOLpEg1GzZuIExzId/view
 */