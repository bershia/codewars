// 1. Create a function named divisors/Divisors that takes an integer n > 1 
// and returns an array with all of the integer's divisors(except for 1 and 
//     the number itself), from smallest to largest. If the number is prime 
//     return the string '(integer) is prime' (null in C#) (use Either String 
//         a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer){
    let div = []
    for(let i = 2; i < integer; i++){
      if (integer % i === 0){
        div.push(i)
      }
    }
    return div.length ? div : `${integer} is prime`
}



// 2. Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    return array.reduce((sum, curVal) => sum + curVal, 0) % 2 ? 'odd' : 'even'
}



// 3. Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

function reverseWords(str) {
    return str.split(' ').map(elem => elem.split('').reverse().join('')).join(' ')
}