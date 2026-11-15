let studentName : string = "John Doe";
let marks : number = 85;


function calculateMarks(marks: number): number {
    return marks + 5;
}

console.log("Student Name: " + studentName);
console.log("Calculated Marks: " + calculateMarks(marks));