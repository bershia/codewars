// Find the missing letter

const { resume } = require("browser-sync")

// Write a method that takes an array of consecutive (increasing) letters as input 
// and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. 
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' 
// ['O','Q','R','S'] -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// para: arr of letters
// result: str (letter)
// example: ['o', 'p', 'r']  => 'q'
// pseudo code: find alphabet index of the first letter in arr, start iterating thru 
// alphabet from that index until index is -1.

function findMissingLetter(arr){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let index = alphabet.search(arr[0])
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== alphabet[index]){
            return alphabet[index]
        }
        index++
    }
}



