const inputField = document.getElementById("product-name");
const remainingChars = document.getElementById("remaining-chars");

function updateRemainingChars(event) {
  const enteredTextLength = event.target.value.length;
  remainingChars.textContent = inputField.maxLength - enteredTextLength;
  if (remainingChars.textContent < 11) {
    remainingChars.classList.add("warning");
    inputField.classList.add("warning");
  } else {
    remainingChars.classList.remove("warning");
    inputField.classList.remove("warning");
  }
}

inputField.addEventListener("input", updateRemainingChars);
