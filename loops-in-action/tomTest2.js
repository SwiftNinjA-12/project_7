//1

const calcButton = document.querySelector("#calculator button");

function button() {
  const inputValue = document.getElementById("user-number").value;

  var sumNumber = 0;
  for (var i = 0; i <= inputValue; i++) {
    sumNumber = sumNumber + i;
  }
  const outputValue = document.getElementById("calculated-sum");
  outputValue.textContent = sumNumber;
  outputValue.style.display = "block";
}

calcButton.addEventListener("click", button);

//2

const linkButton = document.querySelector("#highlight-links button");

function linkHighLight() {
  const linksArray = document.querySelectorAll("#highlight-links a");
  for (const linkselements of linksArray) {
    linkselements.classList.add("highlight");
  }
}
linkButton.addEventListener("click", linkHighLight);

//3
const dummyUserData = {
  firstName: "Tom",
  lastName: "Verveckken",
  age: 35,
  job: "none",
};

const dataButton = document.querySelector("#user-data button");

function userdata() {
  const unorderedList = document.getElementById("output-user-data");
  unorderedList.innerHTML = "";
  for (const key in dummyUserData) {
    const newLiElement = document.createElement("li");
    newLiElement.textContent = key.toUpperCase() + ": " + dummyUserData[key];
    unorderedList.append(newLiElement);
  }
}
dataButton.addEventListener("click", userdata);

//4

const statButton = document.querySelector("#statistics button");

function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function noOfRolls() {
  randomNo = randomDice();
  const userTargetNumber = document.getElementById("user-target-number");
  const userTargetNumbervalue = userTargetNumber.value;

  const diceRollsUL = document.getElementById("dice-rolls");
  diceRollsUL.innerHTML = "";

  let numberOfRolls = 0;
  let hasRolledTargetNumber = false;

  while (!hasRolledTargetNumber) {
    const rolledNumber = randomDice();
    numberOfRolls++;

    const newListItem = document.createElement("li");
    newListItem.textContent = "Roll " + numberOfRolls + ": " + rolledNumber;
    diceRollsUL.append(newListItem);

    hasRolledTargetNumber = rolledNumber == userTargetNumbervalue;
  }

  const outpuTotalRolls = document.getElementById("output-total-rolls");
  outpuTotalRolls.textContent = numberOfRolls;
  const outputTargetNumber = document.getElementById("output-target-number");
  outputTargetNumber.textContent = userTargetNumbervalue;
}

statButton.addEventListener("click", noOfRolls);
