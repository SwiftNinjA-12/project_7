// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseName = "front end dev";
let coursePrice = 39;
let courseGoals = ["HTML", "CSS", "Javascript"];

// 2) Output ("alert") the three variable values

// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter

let onlineCourse = {
    name: courseName,
    price: coursePrice,
    goals: courseGoals,
};

// alert(onlineCourse.name);
// alert(onlineCourse.price);
// alert(onlineCourse.goals);

// 4) Also output the second element in your "main goals" variable

// alert(onlineCourse.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getStuff(array, number){
    let thingy = array[number]
    return thingy

}

function accessListItem(array, arrayIndex){
let arrayElement = array[arrayIndex]
return arrayElement;
}

// 6) Execute your custom command from (5) and output ("alert") the result

let firstGoal = getStuff(onlineCourse.goals, 2);
alert(firstGoal)

// let secondGoal = accessListItem(onlineCourse.goals, 1);
// alert(secondGoal)

// let thirdGoal = accessListItem(onlineCourse.goals, 2);
// alert(thirdGoal)