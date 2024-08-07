// JS code for size shoes changing

document.addEventListener("DOMContentLoaded", function () {
  const minusButtons = document.querySelectorAll(".minus");
  const plusButtons = document.querySelectorAll(".plus");
  const sizeInputs = document.querySelectorAll(".size");

  minusButtons.forEach((minusButton, index) => {
    minusButton.addEventListener("click", function () {
      let sizeInput = sizeInputs[index];
      let currentValue = parseInt(sizeInput.value);
      if (currentValue > 28) {
        sizeInput.value = currentValue - 1;
      }
    });
  });

  plusButtons.forEach((plusButton, index) => {
    plusButton.addEventListener("click", function () {
      let sizeInput = sizeInputs[index];
      let currentValue = parseInt(sizeInput.value);
      if (currentValue < parseInt(sizeInput.max)) {
        sizeInput.value = currentValue + 1;
      }
    });
  });
});

// JS code for Kids-shoes size changing

document.addEventListener("DOMContentLoaded", function () {
  const minusButtons = document.querySelectorAll(".minus");
  const plusButtons = document.querySelectorAll(".plus");

  minusButtons.forEach((minusButton) => {
    minusButton.addEventListener("click", function () {
      let sizeInput = minusButton
        .closest(".size-selector")
        .querySelector(".kids");
      let currentValue = parseInt(sizeInput.value);
      if (currentValue > 24) {
        sizeInput.value = currentValue - 1;
      }
    });
  });

  plusButtons.forEach((plusButton) => {
    plusButton.addEventListener("click", function () {
      let sizeInput = plusButton
        .closest(".size-selector")
        .querySelector(".kids");
      let currentValue = parseInt(sizeInput.value);
      if (currentValue < 36) {
        sizeInput.value = currentValue + 1;
      }
    });
  });
});

// JS code to open/hide footer section, include small screens

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");

  footer.style.opacity = 0;
  footer.style.transition = "opacity 0.3s ease";

  function checkScroll() {
    const screenWidth = window.innerWidth;
    const scrollThreshold = screenWidth <= 450 ? 100 : 400;

    if (window.scrollY > scrollThreshold) {
      footer.style.opacity = 1;
    } else {
      footer.style.opacity = 0;
    }
  }

  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();
});
