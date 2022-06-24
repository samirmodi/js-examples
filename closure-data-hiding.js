//closure data hiding
function outer() {
  var counter = 0;
  function increment() {
    counter++;
    console.log(counter);
  }
  return increment;
}

var a = outer();
a();
