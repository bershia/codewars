// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.



// para: array, num
// result: num
// example: [2, 3, 2] => 3
// pseudo code: sort array, check if 1st and 2nd elem are equal, if so, return last elem, otherwise return first

function findUniq(arr) {
    arr.sort()
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
}

//or

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }