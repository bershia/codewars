// 1. Write a function named sumDigits which takes a number as input and returns the sum of the 
// absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number){
    return String(Math.abs(number)).split('').reduce((sum, a) => sum + +a, 0)
}



// 2. The two oldest ages function/method needs to be completed. It should take an array of numbers 
// as its argument and return the two highest numbers within the array. The returned value should 
// be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 
// 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

function twoOldestAges(ages){
    return ages.sort((a, b) => a - b).slice(-2)
}


// 3. Write a function that takes a single string (word) as argument. The function must 
// return an ordered list containing the indexes of all capital letters in the string.

const capitals = function (word){
    let indArr = []
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            indArr.push(i)
        }
    }
    return indArr
}

// 4. Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


function findSum(n) {
    let sum = 0
    for(let i = 1; i <= n; i++){
      if(i % 3 === 0 || i % 5 === 0){
        sum += i
      }
    }
    return sum
}


// 5. Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

const noOdds = values => values.filter(a => a % 2 === 0)


