let age = 35;
let userName = "tom";
let hobbies = ["sports", "cooking", "reading"];
// alert(hobbies);
// alert("1 " + hobbies[0]);
// alert("2 " + hobbies[1]);
// alert("3 " + hobbies[2]);

let job = {
  title: "dev",
  place: "CT",
  salary: 10000,
};
// alert(job.title)
let TotalAdultYears;

function calculateAdultYears(userAge){
    let result;
    result = userAge - 18;
    return result;
}

TotalAdultYears = calculateAdultYears(age);
console.log(TotalAdultYears);

age = 45
TotalAdultYears = calculateAdultYears(age);
console.log(TotalAdultYears);

let person = {
    name: "Tom",    //property
    greet() {       //method = function inside an  object
        console.log("Hello"); // console.log is a built in method
    }
}

person.greet();