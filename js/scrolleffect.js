document.addEventListener("DOMContentLoaded", function() {
  // Get the preloader element
  const preloader = document.querySelector(".preloader");

  // Add the loader-hidden class to the preloader element
  // setTimeout(() => {
  //   preloader.classList.add("preloader-hidden");
  // }, 3000);
  preloader.classList.add("preloader-hidden");

  // preloader.addEventListener("transitionend", () => {
  //   preloader.removeChild("preloader");
  // })
});