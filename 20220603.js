// Split Strings

// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace 
// the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// para: str
// result: arr
// example: 'theme' => ['th', 'em', 'e_']
// pseudo code: turn str into arr, add 1st 2 chara to new arr, remove first 2 chara from existing arr


function splitStrings(str){
    let result = []
    if (str.length % 2 !== 0){
      str = str + "_"
    }
    for(let i = 0; i < str.length; i += 2) {
      result.push(str.slice(i, i + 2))
    }
    return result
}