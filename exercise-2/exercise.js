// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const button1 = document.querySelector("button");
//    - Select the second button by using an "id"
const button2 = document.getElementById("button2");

const button3 = document.getElementById("button3");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

// const removeText = document.getElementById("paragraph3");
// function remove() {
// console.dir(removeText)
// }
// button1.addEventListener("click", remove);

// function backgroundChange(event){
//     console.dir(event.target)
// }

// button2.addEventListener("click", backgroundChange)

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
const paragraph1 = document.body.children[2].children[1];
const paragraph3 = document.body.children[2].children[3];

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function remove() {
  paragraph3.textContent = "";
  //   paragraph3.remove()
}
button1.addEventListener("click", remove);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function backGroundChange() {
//   paragraph1.style.backgroundColor = "blue";
  paragraph1.classList.add("blue");
}
button2.addEventListener("click", backGroundChange);

function RESET() {
//   paragraph1.style.backgroundColor = "";
  paragraph1.classList.remove("blue");
  paragraph3.textContent =
    "For example, you can make the below button remove this text!";
}
button3.addEventListener("click", RESET);
