// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.

// para: str
// result: Boolean
// example: 'test this sentance' => false
// pseudo code: loop thru alphabet to see if each chara is in passed str

function isPanagram(str){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < alphabet.length; i++){
        if(str.toLowerCase().includes(alphabet[i]) === false){
            return false
        }
    }
    return true
}


