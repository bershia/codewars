// 1. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
}

// 2. Your task is to make two functions (max and min, or maximum and minimum, etc., 
// depending on the language) that receive 
// a list of integers as input and return, respectively, the largest and lowest 
// number in that list.

const min = arr => arr.sort((a, b) => a-b)[0]

const max = arr => arr.sort((a, b) => b-a)[0]

// 3. You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
// Considering these factors, write a function that tells you if it is possible to get 
// to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) 
// if it is possible and false (0 in Prolog, NASM and COBOL) if not. 
// The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft;
};


// 4. I'm new to coding and now I want to get the sum of two arrays...
// actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((sum, curVal) => sum + curVal, 0)
}

// 5. You take your son to the forest to see the monkeys. You know that there are 
// a certain number there (n), but your son is too young to just appreciate the full number, 
// he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), 
// populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

function monkeyCount(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
}

