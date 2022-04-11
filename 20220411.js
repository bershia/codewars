// 1. You will be given an array a and a value x. All you need to do is check 
// whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

const check = (a, x) => a.includes(x)



// 2. Timmy & Sarah think they are in love, but around where they live, 
// they will only know once they pick a flower each. If one of the flowers 
// has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and 
// return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 || flower2 % 2 === 0){
      if (flower1 % 2 !== 0 || flower2 % 2 !== 0){
        return true;
      }
    }
    return false;
}

// 3. Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any numbers 
// then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who 
// are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum (numbers) {
    if (numbers.length === 0){
      return 0;
    } else{
      return numbers.reduce((sum, curVal) => sum + curVal, 0)
    }
};