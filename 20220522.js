// 1. Your task is to write function factorial.

const factorial = n => n === 1 || n  === 0 ? 1 : n * factorial(n - 1)


// 2. Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example
// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

// Additional info
// Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

const palindromeChainLength = function(n) {
    let step = 0
    while (n !== +(n.toString().split('').reverse().join(''))){
      n += +(n.toString().split('').reverse().join(''))
      step++
    }
    return step
};



// 3. In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

const isLeapYear = year => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0




// 4. Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

const bump = x => x.split('').filter(elem => elem === 'n').length > 15 ? "Car Dead" : "Woohoo!"