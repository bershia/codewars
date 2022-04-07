// 1. Write a function to convert a name into initials. This kata strictly takes 
// two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

const abbrevName = name => name.toUpperCase().split(' ').map(word => word[0]).join('.')



// 2. Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(arr){
    return arr.map(elem => elem * 2)
}



// 3. Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b){
    return b ? 'true' : 'false'
}