// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.



// parameters: array, integars
// return: string
// example: isSortedAndHow([1, 3, 2]) => 'no'
// pseudo code: compare array vs ascending sorted array, if not, to descending sorted array, if not return no

function isSortedAndHow(array) {
    let ascending = array.slice().sort((a, b) => a - b).toString()
    let descending = array.slice().sort((a, b) => b - a).toString()
    return array.toString() === ascending ? "yes, ascending" : array.toString() === descending ? "yes, descending" : "no"
  }