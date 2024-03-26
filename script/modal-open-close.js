let buttonSearch = document.querySelector(".search__link-button");
let buttonClose = document.querySelector(".modal-close-button");

buttonSearch.onclick = function () {
  let modal = document.querySelector(".modal-container");
  modal.classList.remove("modal-container-hidden");
}

buttonClose.onclick = function () {
  let modal = document.querySelector(".modal-container");
  modal.classList.add("modal-container-hidden")
}
