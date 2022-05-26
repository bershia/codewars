// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.




// Parameters: array of int
// Return: int
// Example: [2, -3, 6, 1, 8] -> 8
// Pseude code: iterate thru array, find mult, compare

function adjacentElementsProduct(array) {
    let max = array[0]  * array[1] 
    array.forEach((elem, i) => {
      elem * array[i + 1] > max ? max = elem * array[i + 1] : max
    })
    return max
}