// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// para: array of int
// result: array
// example: [3, 8, 9, 1] => [ 1, 8, 3, 9]
// pseudo code: loop thru array comparing cur elem to previous, skippig even numbers, build new array 

function sortArray(array) {
    let oddSorted = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b)
    let index = 0
    let result = []
    array.forEach((elem, i) => {
      if(elem % 2 !== 0){
        result[i] = oddSorted[index]
        index++
        // or
        // oddSorted.shift()
      }else{
        result[i] = elem
      }
    })
    return result
}