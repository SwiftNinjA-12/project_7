let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clicked!");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

// addEventListener is a method telling the browser what it should do

let inputField = document.getElementById("input");

function inputLength(event) {
  // let enteredText = inputField.value; ==> this links to the variable outside the function, 
  // rather than below which does not.
   //event.target = inputField
  // The EVENT in the name of the object created by the browser like the DOM
  let enteredText = event.target.value;
  // let enteredText = event.data; ==> This is different, value is total input, data is singular input
  console.log(enteredText);
  // console.log(event)
}
inputField.addEventListener("input", inputLength);
