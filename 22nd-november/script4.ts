// js and ts -> truthy and falsy values

/**
 * false -> boolean
 * 0
 * ""
 * null
 * undefined
 */

let username: string = "";

if(username){
    console.log("Welcome to the system");
} else {
    console.log("Please enter your username");
}