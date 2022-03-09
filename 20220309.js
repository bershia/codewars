// Haskell has some useful functions for dealing with lists:

// $ ghci
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]


// parameter: array
// return: head & tail: int; init & last: arr
// example:
// head([3, 6, 9, 1]) -> 3
// tail([3, 6, 9, 1]) -> [6, 9, 1]
// init([3, 6, 9, 1]) -> [3, 6, 9]
// head([3, 6, 9, 1]) -> 1


const head = arr => arr[0]

const tail = arr => arr.slice(1)

const init = arr => arr.slice(0, arr.length - 1)

const last = arr => arr[arr.length - 1]