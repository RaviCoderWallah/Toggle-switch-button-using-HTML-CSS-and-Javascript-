const switchContainer = document.querySelector(".switch-bar-container");
const switchBar = document.querySelector(".inner-switch-circle");

switchBar.addEventListener("click", () => {
     switchContainer.classList.toggle("active");
});

