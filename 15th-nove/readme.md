# JavaScript Assignment: Student Marks & Grade Calculator

**Level:** Beginner  
**Duration:** 40–45 minutes  
**Language:** JavaScript

## Problem Statement

You are developing a simple Student Result Management System.

Write a JavaScript program that accepts student information and subject marks, calculates the total and percentage, and displays the student's final grade.

## Requirements

### Step 1: Declare Variables

Create variables for:

- Student name
- Student age
- Maths marks
- Science marks
- English marks

Use appropriate JavaScript data types and `let` or `const`.

### Step 2: Perform Calculations

Calculate:

1. Total marks.
2. Percentage.
3. Add 5 bonus marks to Maths using the `+=` operator.
4. Calculate the updated total and percentage.

Assume each subject is out of 100.

### Step 3: Apply If-Else Conditions

Use `if`, `else if`, and `else` to calculate the student's grade.

| Percentage | Grade |
|---|---|
| 90 or above | A+ |
| 75 or above | A |
| 60 or above | B |
| 40 or above | C |
| Below 40 | Fail |

### Step 4: Check Pass or Fail

A student must score at least 40 marks in every subject to pass.

Use logical AND (`&&`) and comparison operators.

If all three subjects have at least 40 marks, display "Pass".

Otherwise, display "Fail".

### Step 5: Display Final Report

Display:

- Student name
- Student age
- Maths marks
- Science marks
- English marks
- Total marks
- Percentage
- Grade
- Final result (Pass/Fail)

## Sample Input

```javascript
let studentName = "Rahul";
let age = 20;

let maths = 80;
let science = 90;
let english = 70;
```

## Expected Output

```text
----- STUDENT RESULT REPORT -----

Student Name: Rahul
Age: 20

Maths: 80
Science: 90
English: 70

Bonus Marks in Maths: 5

Total Marks: 245
Percentage: 81.67%

Grade: A
Final Result: Pass
```

## Concepts to Use

- Variables: `let`, `const`
- Data types: String, Number
- Arithmetic operators: `+`, `/`
- Assignment operator: `+=`
- Comparison operators: `>=`, `<`
- Logical operator: `&&`
- Conditional statements: `if`, `else if`, `else`
- Output: `console.log()`

## Bonus Challenge

Extend the same program:

1. Check whether the student has scored above 90 in Maths.
2. Check whether the student has scored below 35 in any subject.
3. Display "Excellent Performance" if the percentage is 90 or above.
4. Display "Needs Improvement" if the percentage is below 40.

## Submission

Save your solution in `student-result.js` and execute it using:

```bash
node student-result.js
```
