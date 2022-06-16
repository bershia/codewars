// Find The Parity Outlier

// DESCRIPTION:
// You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. 
// The array is either entirely comprised of odd integers 
// or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and 
// returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// para: arr of int
// result: int
// example: [2, 66, 3, 8] => 3
// pseudo code: check first 3 elem to determine if arr even or odd,
// then filter opposite element

function findOutlier(arr){
    let odd = 0
    let even = 0
    let result = []
    while(odd < 2 || even < 2){
        arr.forEach(elem => elem % 2 === 0 ? even++ : odd++)
    }
    even > odd ? result = arr.filter(elem => elem % 2 !== 0) : result = arr.filter(elem => elem % 2 === 0)
    return result[0]
}