// Solve the problem of scrolling to header sections that are hidden by the main menu

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") {
      return;
    }

    e.preventDefault();

    const targetID = this.getAttribute("href");
    const targetElement = document.querySelector(targetID);
    const headerOffset = document.querySelector("header").offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//   hamburger menu button

const hamburgerButton = document.getElementById("hamburger-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const menuLinks = document.querySelectorAll(".dropdown-menu a");

hamburgerButton.addEventListener("click", function () {
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 470) {
      dropdownMenu.style.display = "none";
    }
  });
});
