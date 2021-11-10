# INTRODUCTION

## SETUP
- Make sure you have code editor of choice (Suggested: [Visual Studio Code](https://code.visualstudio.com/download)) and [NodeJS](https://nodejs.org/en/) installed

---

## Phase #1
- Solve the exercise and identify the flaws of your program using `npm test` command
- Curiously check if your solution passes `npm run test:functional`
- Solutions discussion

## Phase #2
- Adjust solution to be as performant as it can using `npm test:performance` as a guideline
- Solutions discussion

---

## COMMANDS
- `npm test` - runs basic set of tests that are checking functionality of the implemented function (Used in the pipeline as the main passing criteria)
- `npm run test:functional` - runs additional set of tests that are checking if the implemented function is conforming to the functional paradigm
- `npm run test:performance` - runs additional set of tests that are checking if the implemented function meets optimum performance limits with higher stress inputs

---

# Excercise #1 - Temperatures

## THE GOAL
In this exercise you have to analyze records of temperatures in order to find the one closest to the zero.

---

## RULES
If two numbers are equally close to zero, positive integer has to be considered closest to zero. If no temperatures are provided, display `0`.

---

## EXAMPLE:

### input:
    [1, -2, -8, 4, 5]

### output:
    1
