const myName = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state} `);
};

const person = {
  firstName: "Samir",
  lastName: "Modi",
};

const test = myName.bind(person, "Pune");

test("Maharasthra");
//bind returns a new function, it should invoke the calling function and pass the obj

Function.prototype.polyBind = function (...args) {
  console.log(args);
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const test1 = myName.polyBind(person, "Pune");
test1("Maharashtra");
