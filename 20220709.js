// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// para: string, words
// result: srting, word
// example: 'aba wax' => 'wax'
// pseudo code: break string into array of words, loop thru each word and calculate score

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let scores = []
    x.split(' ').forEach(elem => {
      let score = 0
      for(let i = 0; i < elem.length; i++){
        score += alphabet.indexOf(elem[i]) + 1
      }
      scores.push(score)
    })
    const indexOfMax = scores.indexOf(Math.max(...scores))
    return x.split(' ')[indexOfMax]
}