(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;  // to receive numbers & operation
    });
  });

  equal.addEventListener("click", () => {
    if (screen.value === "") {
      screen.value = "Please Enter a Value";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", () => {
    screen.value = "";
  });
})();
