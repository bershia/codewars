// 1. The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(array1, array2) {
    let score = 0
    for(let i = 0; i < array1.length; i++){
      !array2[i] ? score : array1[i] === array2[i] ? score += 4 : score--
    }
    return score < 0 ? 0 : score
}




// 2. JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    return numbersArray.filter(x => x % 2 === 0)
}



// 3. In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    let upperCase = 0
    let lowerCase = 0
    for (let i = 0; i < s.length; i++){
      s[i] === s[i].toLowerCase() ? lowerCase++ : upperCase++
    }
    return lowerCase >= upperCase ? s.toLowerCase() : s.toUpperCase()
}



// 4. Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let arr = ['', '']
    for(let i = 0; i < s.length; i++){
      if(i % 2 === 0){
        arr[0] += s[i].toUpperCase()
        arr[1] += s[i]
      }else{
        arr[1] += s[i].toUpperCase()
        arr[0] += s[i]
      }
    }
    return arr
};



// 5. Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

const repeater = (string, n) => string.repeat(n)

// 6. Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

const minValue = values => +[...new Set(values)].sort().join('')



// 7. Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

