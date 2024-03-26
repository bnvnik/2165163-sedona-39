for (let numberInputButton of numberInputsButton = document.querySelectorAll(".number-input-button")) {
  let buttonMinus = numberInputButton.querySelector(".number-button-minus");
  let buttonPlus = numberInputButton.querySelector(".number-button-plus");

  buttonPlus.onclick = function () {
    let numberPeople = numberInputButton.querySelector(".number-people");
    numberPeople.value++;
}

  buttonMinus.onclick = function () {
    let numberPeople = numberInputButton.querySelector(".number-people");
    numberPeople.value--;
    if (numberPeople.value < 0) {
      numberPeople.value = 0;
  }
}
}
