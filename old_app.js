console.dir(document)
// document.body.children[1].children[0].href = "https://google.com"

// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

// document.querySelector("a") // <= use the CSS selector to target the element. only selects the 1st link in your code
// anchorElement.href = "https://youtube.com";


//ADD AN ELEMENT
//1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "Https://google.com";
newAnchorElement.textContent = "This leads to Google!"

//2. Get access to the parent element that should hold the new element

let firstParagraph = document.getElementById("P1");

//3. insert the new element into the parent element content.

// firstParagraph.textContent = "THIS IS NOT NEW NOW! "
firstParagraph.append(newAnchorElement)
// firstParagraph.append(" some more")

//REMOVE ELEMENTS
//1. Select the element that should be removed.

let firstH1Element = document.querySelector('h1')

//2. Remove it.

firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element) ==> for older browsers

//MOVE ELEMENTS
// switch order of 2 paragraphs
// select parent: parent element
// add firstParagraph to end elemet(body)
// browser will automatically delete original firstParagraph hence move

firstParagraph.parentElement.append(firstParagraph)

// let thirdParagraph = document.getElementById("P3")
// firstParagraph.parentElement.insertBefore(firstParagraph, thirdParagraph)

// inner HTML 

firstParagraph.innerHTML = "Hi, This is <strong>VERY</strong> important."
