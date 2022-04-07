// 1. Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}

// 2. Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, 
// and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    }else{
      return "Hello, " + name + "!";
    }
}
// 3. Description:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(n => -n) ;
}

//4. Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
}

// 5. Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000
}

