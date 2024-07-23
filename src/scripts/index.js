const btnSystems = document.querySelector(".btn-systems");
const systemsList = document.querySelector(".btn-systems__list");

btnSystems.addEventListener("click", () => {
  systemsList.classList.toggle("btn-systems__list--active");
});
