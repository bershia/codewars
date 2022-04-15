// 1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
// and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    return month <= 6 ? (month <= 3 ? 1 : 2) : (month <= 9 ? 3 : 4)
}



// 2. Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible 
// by both integers a and b.

function isDivideBy(number, a, b) {
    return !(number % a) && !(number % b)
}



// 3. The function is not returning the correct values. Can you figure out why?
// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//       case 2:
//         name = 'Venus'
//       case 3:
//         name = 'Earth'
//       case 4:
//         name = 'Mars'
//       case 5:
//         name = 'Jupiter'
//       case 6:
//         name = 'Saturn'
//       case 7:
//         name = 'Uranus'
//       case 8:
//         name = 'Neptune'
//     }
    
//     return name;
//   }
// Example (Input --> Output ):
// 3 --> "Earth"

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
        break
    }
    
    return name;
}



// 4. Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = 'aeiou'
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++){
      if(vowels.includes(str.charAt(i))){
        vowelsCount++
      }
    }
    return vowelsCount;
}



// 5. Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer.

function squareDigits(num){
    const str = num.toString()
    let newNum = '';
    for(let i = 0; i < str.length; i++){
      newNum += str.charAt(i) ** 2
    }
    return parseInt(newNum);
}



// 6. In this little assignment you are given a string of space separated numbers, and have to return 
// the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let sorted = numbers.split(' ').sort((a, b) => a - b)
    return `${sorted[sorted.length - 1]} ${sorted[0]}`
}