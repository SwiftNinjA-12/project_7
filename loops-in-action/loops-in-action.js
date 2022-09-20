// first example: sun numbers

const calculateSumButton = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUptoNumber = 0;
  for (let i = 0; i <= enteredNumber; i++) {
    sumUptoNumber = sumUptoNumber + i;
  }
  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUptoNumber;
  outputResultElement.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

//highlight links

const highlightLinksButton = document.querySelector("#highlight-links button");

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");
  for (const anchor of anchorElements) {
    anchor.classList.add("highlight");
  }
}
highlightLinksButton.addEventListener("click", highlightLinks);

//Display user data

const dummyUserData = {
  firstName: "Tom",
  lastName: "Verveckken",
  age: 35,
  job: "none",
};

const dataButton = document.querySelector("#user-data button");

function displayUserData() {
  const unorderedList = document.getElementById("output-user-data");

  unorderedList.innerHTML = "";

  for (const property in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    newUserDataListItemElement.textContent =
      property.toUpperCase() + ": " + dummyUserData[property];
    unorderedList.append(newUserDataListItemElement);
  }
}

dataButton.addEventListener("click", displayUserData);

//stats

const diceButton = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const targetNumber = document.getElementById("user-target-number");
  const enteredNumber = targetNumber.value;

  const diceRollsList = document.getElementById("dice-rolls");
  diceRollsList.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true
    // }
    numberOfRolls++;

    const newRollListElement = document.createElement("li");
    newRollListElement.textContent = "Roll " + numberOfRolls + ": " + rolledNumber;
    diceRollsList.append(newRollListElement);

    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTotalNumberElement = document.getElementById("output-target-number");

  outputTotalNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
  // console.log(rollDice())
}

diceButton.addEventListener("click", deriveNumberOfDiceRolls);
