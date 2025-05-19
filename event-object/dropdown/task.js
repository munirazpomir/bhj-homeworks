const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropValue = dropdown.querySelector(".dropdown__value");
  const dropList = dropdown.querySelector(".dropdown__list");
  const dropLinks = dropdown.querySelectorAll('.dropdown__link');

  dropValue.addEventListener("click", () => {
    dropList.classList.toggle("dropdown__list_active");
  });

  dropLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      dropValue.textContent = link.textContent;
      dropList.classList.remove("dropdown__list_active");
    });
  });
});