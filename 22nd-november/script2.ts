let age : number = 25;
let hasVoterID : boolean = false;

/** if (age >= 18 && hasVoterID) {
    console.log("Eligible to vote"); // when both conditions are true
}
    **/

if(age >= 18){
    console.log("Above 18 years old"); // when age is above 18
    if(hasVoterID){
        console.log("Eligible to vote"); // when both conditions are true
    }
}

