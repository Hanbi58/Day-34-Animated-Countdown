const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector(".replay");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimation() {
  const last = nums.length - 1;
  nums.forEach((num, idx) => {
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== last) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && idx !== last) {
        num.nextElementSibling.classList.add("in");
      } else {
        num.classList.add("out");
        setTimeout(() => {
          counter.classList.add("hide");
          finalMessage.classList.add("show");
        }, 499);
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
