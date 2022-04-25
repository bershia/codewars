// // 1. Your task is to split the chocolate bar of given dimension n x m into small squares. 
// Each square is of size 1x1 and unbreakable. Implement a function that will return minimum 
// number of breaks needed.

// // For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares 
// in just one break, but for size 3 x 1 you must do two breaks.

// // If input data is invalid you should return 0 (as in no breaks are needed if we do not have any 
// chocolate to split). Input will always be a non-negative integer.



// 2. You are given an odd-length array of integers, in which all of them are the same, 
// except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
    numbers.sort((a, b) => a-b)
    return numbers[0] !== numbers[1] ? numbers[0] : numbers[numbers.length - 1]
}

// 3. Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

function getDivisorsCnt(n){
    let divCount = 0
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
        divCount++
      }
    }
    return divCount
}


// 4. Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value then it should return an empty array.

const solution =nums => nums !== null ? nums.sort((a, b) => a-b) : []

// 5. Given two numbers and an arithmetic operator (the name of it, as a string), 
// return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, 
// and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
    switch (operator){
      case 'add':
        return a + b
        break
      case 'subtract':
        return a - b
        break
      case 'divide':
        return a / b
        break
      case 'multiply':
        return a * b
        break
    }
}

// 6. Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number = array => array.map((string, i) => `${i + 1}: ${string}`)


// 7. Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how 
// many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of 
// money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' 
// for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
    let currentSum = principal
    let year = 0
      while(currentSum < desired){
        currentSum = currentSum + (currentSum * interest) - (currentSum * interest)*tax
        year++
      }
    return year
}


// 8. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of 
// all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. 
// By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 
// throw an exception of type RangeError (JavaScript).

function factorial(n){
    if(n < 0 || n > 12){
      throw new Error('RangeError');
    }else{
      if(n === 1 || n === 0){
        return 1
      }else{
        return n * (factorial(n - 1))
      }
    }
}


