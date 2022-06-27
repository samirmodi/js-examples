//only call api when time diff between two events exceeds a certail delay
const debounce = (func, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, delay);
  };
};
const betterFunction = debounce(getData, 300);

// <input type="text" onkeyup="betterFunction()" />
