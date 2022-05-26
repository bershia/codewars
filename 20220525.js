// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// Param: array
// Return: int
// Example: [13, 333, 1, 1244] // 1244
// Pseudo code:
// evaluate length of each element of the array to find highest


function findLongest(array){
    let mostDigits = 0
    array.forEach((elem, i) => {
      (array[mostDigits].toString().length < array[i].toString().length  ?  mostDigits = i :  mostDigits)
    })       
    return array[mostDigits]
}