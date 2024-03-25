let buttonSearch = document.querySelector(".search__link-button");
let modal = document.querySelector(".modal-container");
let buttonClose = document.querySelector(".modal-close-button");

buttonSearch.onclick = function () {
  modal.classList.remove("modal-container-hidden");
}

buttonClose.onclick = function () {
  modal.classList.add("modal-container-hidden")
}
