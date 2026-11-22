const welcome = () => {
    console.log("Hello, from arrow function call!");
}

welcome(); // arrow function call

const welcome2 = (name: string) => {
    console.log("Hello, " + name);
}

welcome2("Alice"); // arrow function call with argument