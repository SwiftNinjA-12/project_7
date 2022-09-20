//1

const calcButton = document.querySelector("#calculator button");

function addItUp() {
  const inputValue = document.getElementById("user-number").value;
  // const inputValue = inputNumber.value

  var sumNumber = 0;
  for (var i = 0; i <= inputValue; i++) {
    sumNumber = sumNumber + i;
  }
  const calculatedSum = document.getElementById("calculated-sum");
  calculatedSum.textContent = sumNumber;
  calculatedSum.style.display = "block";
}

calcButton.addEventListener("click", addItUp);

//2

const highLightButton = document.querySelector("#highlight-links button");

function highlightAnchors() {
  const anchorArray = document.querySelectorAll("#highlight-links a");
  for (const anchor of anchorArray) {
    anchor.classList.add("highlight");
  }
}

highLightButton.addEventListener("click", highlightAnchors);
