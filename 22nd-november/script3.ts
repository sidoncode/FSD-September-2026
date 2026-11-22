let choice: number = 7;

console.log("WELCOME TO ATM:\
   hit 1 for checking balance\
   hit 2 for withdrawing cash\
   hit 3 for depositing cash\
   hit 4 for changing pin\
   hit 5 for exiting");

switch (choice) {
    case 1:
        console.log(" you have selected - Checking balance");
        break;
    case 2:
        console.log(" you have selected - Withdrawing cash");
        break;
    case 3:
        console.log(" you have selected - Depositing cash");
        break;
    case 4:
        console.log(" you have selected - Changing pin");
        break;
    case 5:
        console.log(" you have selected - Exiting");
        break;
    default:
        console.log("Invalid option");  
}