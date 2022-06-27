//first time we need to make a call in throttle, so use a flag

//in debounce, we need to clear the timeout, in order to avoid subsequent calls within the delay, so use timer
let counter = 0;
const getData = () => {
  console.log("yes " + counter++);
};
const throttle = (func, delay) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
const betterFunction = throttle(getData, 2000);
