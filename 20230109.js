// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1000

function convertIntToRoman1(number){
    const romans = {1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M'}
    let arr = String(number).split('').reverse()
    let result = []
    let i = 0
    let mult = 1
    while (i < arr.length){
      let n = parseInt(arr[i])
      n < 4 ? n = romans[1 * mult].repeat(n) : 
      n === 4 ? n = romans[1 * mult] + romans[5 * mult] :
      n === 5 ? n = romans[5 * mult] :
      n === 9 ? n = romans[1 * mult] + romans[10 * mult] :
      n = romans[5 * mult] + romans[1 * mult].repeat(n - 5)
      result.unshift(n)
      i++
      mult = mult * 10
    }
    return result.join('')
}

function convertIntToRoman2(number){
    const roman = {'M':1000,'CM':900,'D':500,'CD':400,'C':100,'XC':90,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1}
    let result = ''
    while (number > 0) {
        for (key in roman) { 
            if (roman[key] <= number) { 
                result += key
                number -= roman[key]
                break
            }
        }
    }
  return result
}