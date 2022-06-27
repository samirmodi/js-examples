//Prototype is an object attached to every object, functions
function evaluate(operation) {
  return function (num1) {
    return function (num2) {
      switch (operation) {
        case "subtract":
          return num1 - num2;
        case "multiply":
          return num1 * num2;
        case "divide":
          return num1 / num2;
        case "sum":
          return num1 + num2;
        default:
          console.log("Invalid operation");
      }
    };
  };
}

console.log(evaluate("test")(4)(2));

//infinite currying

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

sum(2)(3)(4)();
