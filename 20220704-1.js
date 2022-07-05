// // Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
//  Spaces will be included only when more than one word is present.

// // Examples: spinWords( "Hey fellow warriors" ) => 
// returns "Hey wollef sroirraw" spinWords( "This is a test") => 
// returns "This is a test" spinWords( "This is another test" )=> 
// returns "This is rehtona test"

// para: str
// return: str
// example: 'test this feature' => 'test this erutaef'
// pseudo code: turn str to arr, for each elem with length 5 and over do reverse

function reverseWords(str){
    let reverse = str.split(' ').map(x => {
        x.length > 4 ? x = x.split('').reverse().join('') : x
    })
    return reverse.join(' ')
}