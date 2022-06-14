// Persistent Bugger

// Write a function, persistence, that takes in a positive parameter num 
// and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num 
// until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 
// and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, 
// and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// para: num
// result: num
// example: 87 => 3 (8*7 = 56; 5*6 = 30; 3*0 = 0)
// pseudo code: repeat multiplication of digits in a number until its < 10

function countMultiplications(num){
    let count = 0
    while(num > 9){
        count++
        num = String(num).split('').reduce((mult, elem) => mult * elem, 1)
    }
    return count
}