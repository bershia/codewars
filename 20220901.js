// This time we want to write calculations using functions and get the results. 
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, 
// minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function 
// represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(x) {
    if(x === undefined) {
      return 0
    }else {
      if(x.charAt(0) === '+') {
        return +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 0 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 0
      }else {
        return 0
      }
    }
  }
  
  function one(x) {
    if(x === undefined) {
      return 1
    }else {
      if(x.charAt(0) === '+') {
        return 1 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 1 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return +x.charAt(1)
      }else {
        return Math.floor(1 / +x.charAt(1))
      }
    } 
  }
  
  function two(x) {
    if(x === undefined) {
      return 2
    }else {
      if(x.charAt(0) === '+') {
        return 2 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 2 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 2 * +x.charAt(1)
      }else {
        return Math.floor(2 / +x.charAt(1))
      }
    } 
  }
  function three(x) {
    if(x === undefined) {
      return 3
    }else {
      if(x.charAt(0) === '+') {
        return 3 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 3 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 3 * +x.charAt(1)
      }else {
        return Math.floor(3 / +x.charAt(1))
      }
    } 
  }
  
  function four(x) {
    if(x === undefined) {
      return 4
    }else {
      if(x.charAt(0) === '+') {
        return 4 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 4 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 4 * +x.charAt(1)
      }else {
        return Math.floor(4 / +x.charAt(1))
      }
    } 
  }
  
  function five(x) {
    if(x === undefined) {
      return 5
    }else {
      if(x.charAt(0) === '+') {
        return 5 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 5 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 5 * +x.charAt(1)
      }else {
        return Math.floor(5 / +x.charAt(1))
      }
    } 
  }
  
  function six(x) {
    if(x === undefined) {
      return 6
    }else {
      if(x.charAt(0) === '+') {
        return 6 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 6 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 6 * +x.charAt(1)
      }else {
        return Math.floor(6 / +x.charAt(1))
      }
    } 
  }
  
  function seven(x) {
    if(x === undefined) {
      return 7
    }else {
      if(x.charAt(0) === '+') {
        return 7 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 7 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 7 * +x.charAt(1)
      }else {
        return Math.floor(7 / +x.charAt(1))
      }
    } 
  }
  
  function eight(x) {
    if(x === undefined) {
      return 8
    }else {
      if(x.charAt(0) === '+') {
        return 8 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 8 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 8 * +x.charAt(1)
      }else {
        return Math.floor(8 / +x.charAt(1))
      }
    } 
  }
  
  function nine(x) {
    if(x === undefined) {
      return 9
    }else {
      if(x.charAt(0) === '+') {
        return 9 + +x.charAt(1)
      }else if(x.charAt(0) === '-') {
        return 9 - +x.charAt(1)
      }else if(x.charAt(0) === '*') {
        return 9 * +x.charAt(1)
      }else {
        return Math.floor(9 / +x.charAt(1))
      }
    } 
  }
  
  function plus(y) {
    return `+${y}`
  }
  function minus(y) {
    return `-${y}`
  }
  function times(y) {
    return `*${y}`
  }
  function dividedBy(y) {
    return `/${y}`
  }