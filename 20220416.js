// 1. You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, 
// return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 
// in some test cases due to an error in the test cases). You do not need to test for this. 
// This is only here to tell you that you do not need to worry about your solution timing out.
// #Output

// The middle character(s) of the word represented as a string.

const getMiddle = word => {
    if (word.length % 2){
        return word.charAt(word.length / 2)
      } else{
        return word.slice(word.length / 2 - 1, word.length / 2 + 1) 
      }
}



// 2. A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, 
// is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! 
// You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, 
// it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

const isSquare = n => Number.isInteger(Math.sqrt(n))



// 3. Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. Essentially, rearrange the digits to create 
// the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let arr = n.toString().split('')
    return arr.sort((a, b) => b - a).join('') * 1
}



// 4. In this kata you will create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const filter_array = arr => arr.filter(n => Number.isInteger(n))



// 5. This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const accum = str => {
    return str.split('').map((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i)).join('-')
}

