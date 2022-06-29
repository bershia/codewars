// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// para: array of num and num
// result: array of a length of a num
// example: ([1, 2, 3, 3, 3, 1, 5, 6, 9], 2) => [2, 6]
// pseudo code: filter array by even nums, slice needed length


function evenNumbers(array, number) {
    let result = array.filter(elem => elem % 2 === 0)
    return result.slice(-number)
}