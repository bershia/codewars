// 1. Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

const addBinary = (a,b) => (a+b).toString(2)


// 2. You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square 
// after the one passed as a parameter. Recall that an integral perfect square is an 
// integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. 
// You may assume the parameter is non-negative.

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

// 3. Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle 
// (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    let rowNumber = 1
    let rowStart = 1
    let rowStop = 1
    while(rowNumber !== n){
        rowStart = rowStart + rowNumber * 2
        rowStop = rowStart + (rowNumber - 1) * 2
        rowNumber++
    }
    let targetRow = Array.from({length: rowNumber}, (_, i) => rowStart + (i * 2))
    return targetRow.reduce((sum, curVal) => sum + curVal, 0)
}