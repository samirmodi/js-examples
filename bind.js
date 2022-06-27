const myMethod = function (param = "district") {
  console.log(`${this.location} ${param}`);
};
let place1 = {
  location: "Istanbul",
};
let place2 = {
  location: "Izmir",
};

// create a new function
let yourMethod = myMethod.bind(place1);

yourMethod(); // Istanbul district
yourMethod("Bayrampasa"); // Istanbul Bayrampasa

let theirMethod = myMethod.bind(place2, "Gaziemir");
theirMethod(); // Izmir Gaziemir
theirMethod("Buca"); // Izmir Gaziemir
theirMethod.call(place1); // Izmir Gaziemir
// ! note that once the corresponding values are bound,
// Remaining arguments are ignored.
