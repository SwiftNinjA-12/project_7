const inputField = document.getElementById("product-name");
const remainingChars = document.getElementById("remaining-chars");

function updateRemainingChars(event) {
  const enteredTextLength = event.target.value.length;
  remainingChars.textContent = inputField.maxLength - enteredTextLength;
  if (remainingChars.textContent == 0) {
    remainingChars.classList.add("error");
    inputField.classList.add("error");
  } else if (remainingChars.textContent <= 10) {
    remainingChars.classList.add("warning");
    inputField.classList.add("warning");
    remainingChars.classList.remove("error");
    inputField.classList.remove("error");
  } else {
    remainingChars.classList.remove("warning");
    inputField.classList.remove("warning");
  }
}

inputField.addEventListener("input", updateRemainingChars);
