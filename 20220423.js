// 1. Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function SeriesSum(n){
    let arr = []
    let denominator = 4; 
    let i = 1;
    while( i < n){
      arr[i] = 1/denominator
      denominator += 3
      i++
    }
    return n ? arr.reduce((sum, curVal) => sum + curVal, 1).toFixed(2) : n.toFixed(2)
}

// 2. The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, 
// comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes 
// the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you 
// to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there 
// are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, 
// return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    let arrCopy = numbers.slice()
    let removed = arrCopy.splice(numbers.indexOf(Math.min(...numbers))  , 1)
    return arrCopy
}



// 3. Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, 
// this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

const minMax = arr => [Math.min(...arr), Math.max(...arr)]