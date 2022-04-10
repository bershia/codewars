// 1. Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(array) {
    return array.length > 0 ? array.reduce((sum, curVal) => sum + curVal, 0)/array.length : 0
  
}

// 2. Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let reverseArr  = []
    for (let i = n; i >= 1; i--){
      reverseArr.push(i)
    }
    return reverseArr
};

// 3. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is 
// composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its 
// chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
}