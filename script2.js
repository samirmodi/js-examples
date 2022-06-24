window.onload = function () {
  const input = document.querySelector("input");
  const defaultText = document.getElementById("default");
  const debounceText = document.getElementById("debounce");
  const throttleText = document.getElementById("throttle");

  updateDebounceText = debounce((text, abc) => {
    debounceText.textContent = text + abc;
    console.log("api calling");
  });
  input.addEventListener("input", (e) => {
    defaultText.innerHTML = e.target.value;
    updateDebounceText(e.target.value, "samir");
  });

  function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
};
