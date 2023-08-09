"use-strict";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

let step = 0;

let allEle = document.querySelectorAll(".step");

let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");

let messageEl = document.querySelector(".message");

(function () {
  allEle[step].classList.add("active");
  messageEl.textContent = messages[step];
})();

btnNext.addEventListener("click", function () {
  if (step < allEle.length - 1) {
    step = step + 1;
    allEle[step].classList.add("active");
    messageEl.textContent = messages[step];
  }
});

btnPrev.addEventListener("click", function () {
  if (step > 0) {
    allEle[step].classList.remove("active");
    step = step - 1;
    messageEl.textContent = messages[step];
  }
});
