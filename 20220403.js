// 1. Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    return arr.sort((a,b) => a-b)[0]
}

// 2. Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(arr){
    let arrSq = arr.map((num) => Math.pow(num, 2))
    return arrSq.reduce((acc, curVal) => acc + curVal, 0)
}

// 3. Remove the spaces from the string, then return the resultant string.
const noSpace = x => x.split(' ').join('')

// 4. Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((count, curVal) => count + (curVal || 0), 0)
}

/* 5. Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 l
itres of water per hour of cycling. You get given the time in hours and you need to return the number of litres 
Nathan will drink, rounded to the smallest value.*/

const litres = time => Math.floor(time * 0.5)



