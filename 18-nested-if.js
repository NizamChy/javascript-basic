var science = true;
var math = true;
var chemistry = false;
var physics = true;
var biology = true;

if (science == true) {
  if (math == true) {
    if (physics == true) {
      console.log("You should become an Engineer!");
    } else {
      console.log("You shouldn't become an Engineer.");
    }
  }
}
if (science == true) {
  if (biology == true) {
    if (chemistry == true) {
      console.log("You should become a Doctor!");
    } else {
      console.log("You shouldn't become a Doctor.");
    }
  }
} else {
  console.log("You should try other profession!");
}
