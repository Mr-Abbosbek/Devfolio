window.addEventListener("scroll", function () {
  let allSection = document.querySelector(".all-section");
  let navbar = document.querySelector(".navbar-sticky");
  let bg = document.querySelector(".background");
  let bg2 = document.querySelector(".background-2");
  this.setTimeout(function () {
    if (window.scrollY > 1) {
      navbar.classList.add("q");
    } else {
      navbar.classList.remove("q");
      navbar.style.transition = "all 0.5s ease-in-out";
    }
  });

  if (allSection.scrollWidth < 1300) {
    if (window.scrollY > 3000) {
      bg2.classList.add("bg2");
    } else {
      bg2.classList.remove("bg2");
    }
  
    if (window.scrollY > 900) {
      bg.classList.add("bg");
    } else {
      bg.classList.remove("bg");
    }
  } 
  else {
    if (window.scrollY > 3100) {
      bg2.classList.add("bg2");
    } else {
      bg2.classList.remove("bg2");
    }
  
    if (window.scrollY > 2000) {
      bg.classList.add("bg");
    } else {
      bg.classList.remove("bg");
    }
  }





  
  if (allSection.scrollWidth <= 1100) {
    if (window.scrollY > 3100) {
      bg2.classList.add("bg2");
    } else {
      bg2.classList.remove("bg2");
    }
  }
  // else {
  //   if (window.scrollY > 3500) {
  //     bg2.classList.add("bg2");
  //   } else {
  //     bg2.classList.remove("bg2");
  //   }
  
  //   if (window.scrollY > 900) {
  //     bg.classList.add("bg");
  //   } else {
  //     bg.classList.remove("bg");
  //   }
  // }




  if (allSection.scrollWidth < 957) {
    if (window.scrollY > 3200) {
      bg2.classList.add("bg2");
    } else {
      bg2.classList.remove("bg2");
    }
  }
  // else {
  //   if (window.scrollY > 3500) {
  //     bg2.classList.add("bg2");
  //   } else {
  //     bg2.classList.remove("bg2");
  //   }
  
  //   if (window.scrollY > 900) {
  //     bg.classList.add("bg");
  //   } else {
  //     bg.classList.remove("bg");
  //   }
  // }



  if (allSection.scrollWidth <= 798) {
    if (window.scrollY > 3500) {
      bg2.classList.add("bg2");
    } else {
      bg2.classList.remove("bg2");
    }
  }
//  else {
//     if (window.scrollY > 3500) {
//       bg2.classList.add("bg2");
//     } else {
//       bg2.classList.remove("bg2");
//     }
  
//     if (window.scrollY > 900) {
//       bg.classList.add("bg");
//     } else {
//       bg.classList.remove("bg");
//     }
//   }




  if (allSection.scrollWidth <= 768) {
    if (window.scrollY > 5000) {
      bg2.classList.add("bg2");
    } else {
      bg2.classList.remove("bg2");
    }
  } 
  // else {
  //   if (window.scrollY > 3500) {
  //     bg2.classList.add("bg2");
  //   } else {
  //     bg2.classList.remove("bg2");
  //   }
  
  //   if (window.scrollY > 900) {
  //     bg.classList.add("bg");
  //   } else {
  //     bg.classList.remove("bg");
  //   }
  // }

  
  if (allSection.scrollWidth <= 550) {
    if (window.scrollY > 7000) {
      bg2.classList.add("bg2");
    } else {
      bg2.classList.remove("bg2");
    }
  
    if (window.scrollY > 900) {
      bg.classList.add("bg");
    } else {
      bg.classList.remove("bg");
    }
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




// ===============================================================================================================================

new Glide(".images",{
  type: 'carousel',
  perView: 1,
  focusAt: 'center',
  gap: 40,
  // breakpoints: {
  //   1300:{
  //     perView: 2
  //   }
  // }
}).mount();