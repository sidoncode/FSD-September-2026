# TypeScript Practice Assignment: Employee Salary Calculator

## Objective

Create a simple TypeScript program that calculates an employee's annual salary, adds a bonus, and checks bonus eligibility.

## Requirements

Write a TypeScript program that completes the following tasks:

1. Declare the employee's **name**, **age**, and **monthly salary** using type annotations.
2. Declare at least **two additional variables** using type inference.
3. Calculate the employee's annual salary using arithmetic operators.
4. Add a bonus of **₹5,000** using an assignment operator (for example, `+=`).
5. Use template literals to display employee details.
6. Check whether the employee is eligible for a bonus:
   - Monthly salary must be greater than ₹30,000.
   - Age must be greater than 18.
   - Use the logical `&&` operator to combine both conditions.
7. Store a salary value as a string and convert it into a number using `Number()`.

## Expected Output

Your program should display output similar to this:

\```text
Employee Name: Rahul
Age: 25
Monthly Salary: 40000
Annual Salary: 480000
Bonus: 5000
Bonus Eligible: true
\```

## Concepts to Practise

- TypeScript data types: `string`, `number`, and `boolean`
- Type annotations
- Type inference
- Arithmetic operators
- Assignment operators
- Template literals
- Comparison operators
- Logical operators
- Type conversion

## Instructions

1. Create a file named `employee.ts`.
2. Write your solution in TypeScript.
3. Compile the TypeScript file:

   ```bash
   tsc employee.ts

<br>

   ```bash
   node employee.js

5. Check that your output matches the expected output.

## Optional Challenge

Update your program to calculate and display the employee's yearly salary after adding the bonus to the monthly salary.
