// 1. Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
    let newArr = []
    for (const elem of array){
      newArr = newArr.concat(elem)
    }
    return newArr.sort((a, b) => a - b)
}

// 2. Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array){
    let team1 = 0
    let team2 = 0
    array.forEach((elem, i) => i % 2 ? team2 += elem : team1 += elem)
    return[team1, team2]
}

// 3. Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

function isPowerOfTwo(n){
    let exponent = 0
    let power = 0
    while( power <= n){
      power = Math.pow(2, exponent)
      exponent++
      if(power === n){
        return true
      }
    }
    return false
}