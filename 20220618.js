// Math Object Madness
// You are a(n) novice/average/experienced/senior/professional/world-class Developer (choose one) who specialises in Javascript. One day, your naughty little brother/sister/whatever gets hold of your precious computer with all the software and functionality in it and manages to utterly destroy the Javascript Math object! Being the Developer that you are, you decide to recover as much of the functionality as possible.

// Objective
// Most, if not all, of the functionality of Javascript's built-in Math object is disabled. Your goal is to recover the following:

// Math.ceil(x)
// Math.floor(x)
// Math.round(x)
// Math.abs(x)
// Math.max(args[]) (CAUTION: A variable number of arguments will be passed into the function)
// Math.min(args[]) (CAUTION: A variable number of arguments will be passed into the function)
// Math.pow(x,y) (you may assume the exponent is always a positive integer)
// You may also attempt to fix other methods such as Math.random() or Math.cos() but your code for the other methods will not be tested.

Math.ceil = function (x) {
    if(Number.isInteger(x)){
      return x
    }else{
      return  +(String(x).slice(0, String(x).indexOf('.'))) + 1
    }
  }
  
  Math.floor = function (x) {
    if(Number.isInteger(x)){
      return x
    }else{
      return  +(String(x).slice(0, String(x).indexOf('.')))
    }
  }
  
  Math.round = function (x) {
    let diff = x - Number(String(x).slice(0, String(x).indexOf('.')))
    if(Number.isInteger(x)){
      return x
    } else if( diff < 0.50 ){
      return +(String(x).slice(0, String(x).indexOf('.')))
    }else{
      return +(String(x).slice(0, String(x).indexOf('.'))) + 1
    }
  }
  
  
  Math.abs = function (x) {
    if(x < 0){
      return (-1) * x
    }else{
      return x
    }
  }
  
  Math.max = function (arg) {
    let max = arguments[0]
    for(let i = 1; i < arguments.length; i++){
      arguments[i] > max ? max = arguments[i] : max
    }
    return max
  }
  
  Math.min = function (arg) {
    let min = arguments[0]
    for(let i = 1; i < arguments.length; i++){
      arguments[i] < min ? min = arguments[i] : min
    }
    return min
  }
  
  
  Math.pow = function (x, y) {
    let exp = x
    while(y > 1){
      exp = exp * x
      y--
    }
    return y === 0 ? 1 : exp
  }
  