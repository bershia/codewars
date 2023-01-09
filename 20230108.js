// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(n) {
    let arr = []
    let stars = 1
    for (let i = 1; i <= n; i++){
      i === n ? arr.push('*'.repeat(stars)) : arr.push(' '.repeat((n * 2 - 1 - stars)/2) + '*'.repeat(stars) + ' '.repeat((n  * 2 - 1 - stars)/2))
      stars +=2
    }
    return arr
  }