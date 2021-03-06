//Real example

function updateElementText(id, abc) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeaderText = updateElementText("heading");
updateHeaderText("Lol is the main heading");

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
