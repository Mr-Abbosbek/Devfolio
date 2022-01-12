window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar-sticky");
  let bg = document.querySelector(".background");
  this.setTimeout(function () {
    if (window.scrollY > 1) {
      navbar.classList.add("q");
    } else {
      navbar.classList.remove("q");
      navbar.style.transition = "all 0.5s ease-in-out";
    }
  });
  if (window.scrollY > 600) {
    bg.classList.add("bg");
  } else {
    bg.classList.remove("bg");
  }
});

// ==========================================================================================================================================

document.querySelector("#icon").addEventListener("click", function () {
  let show = document.querySelector(".menu");
  show.classList.toggle("show");
});

// ===========================================================================================================================================

const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Web Developer", "Frontend Developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
});

// =================================================================================================================



let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
