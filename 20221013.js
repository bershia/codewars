// Write a function named first_non_repeating_letter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") 
// or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    if (s.length === 0){
      return ""
    } else if(s.length === 1){
      return s
    } else {
      for(let i = 0; i < s.length; i++){
        if (!s.toLowerCase().slice(i + 1).includes(s.toLowerCase().charAt(i))  && 
          !s.toLowerCase().slice(0, i).includes(s.toLowerCase().charAt(i)) ){
          return s.charAt(i)
        }
      }
      return ""
    }
}