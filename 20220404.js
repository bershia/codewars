// 1. Introduction
// The first century spans from the year 1 up to and including the year 100, 
//the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year) {
    return year % 100 ? Math.floor(year / 100 + 1) : Math.floor(year / 100)
  }


// 2.  We need a function that can transform a string into a number. 
// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid 
// representation of an integral number.

let stringToNumber = str => Number(str)

// 3. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = n => Array.from(String(n), Number).reverse();