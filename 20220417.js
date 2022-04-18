// 1. Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(str){
    return Math.min(...(str.split(' ').map(word => word.length)))
}



// 2. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    for(let i = 0; i < str.length; i++){
      if(str.toLowerCase().includes(str[i], [i + 1])){
        return false
      }
    }
    return true
}

// 3. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna){
    let newStr = ''
    for(let i = 0; i < dna.length; i++){
       if (dna.charAt(i) === 'A'){
        newStr += 'T'
      }else if(dna.charAt(i) === 'T'){
        newStr += 'A'
      }else if(dna.charAt(i) === 'C'){
        newStr += 'G'
      }else if(dna.charAt(i) === 'G'){
        newStr += 'C'
      }
    }
    return newStr
}


// 4. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b ){
    let sum = 0
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    for (let i = min; i <= max; i++){
      sum += i
    }
    return sum
}

// 5. Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

function maskify(str) {
    if (str.length <= 4){
      return str
    }else{
      return '#'.repeat(str.length - 4) + str.slice(-4)
    }
}