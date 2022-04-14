// 1. Given a non-empty array of integers, return the result of multiplying the values 
// together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(arr){
    return arr.reduce((mult, elem) => mult * elem, 1)
}

// 2. Write a function to split a string and convert it into an array of words.

const stringToArray = string => string.split(' ')

// 3. Create a function with two arguments that will return an array of the first (n) 
// multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers 
// greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
      arr[i-1] = x * i;
    }
    return z;
}