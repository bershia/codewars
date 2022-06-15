// Replace With Alphabet Position

// In this kata you are required to, given a string, 
// replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return 
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" 
// ( as a string )

// para: str of letters
// result: string of int
// example: 'abba!' => '1 2 2 1'
// pseudo code: turn str to arr, map new one by replaceing letters with int


function replaceWithPosition(str){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    let arr = str.split('').map(elem => {
      result.push(alphabet.indexOf(elem.toLowerCase()) + 1)
    })
    return result.filter(elem => elem !== 0).join(' ')
}
