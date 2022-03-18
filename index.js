document.querySelectorAll(".accordion__question").forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("open");
    element.nextElementSibling.classList.toggle("open");
  });
});
