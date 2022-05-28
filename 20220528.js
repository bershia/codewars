// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:
// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"


// parameters: object
// return: string
// example: solution({color: 'red', quantity: 1}) -> 'color = red,quantity = 1'
// pseudo code: iterate thru the properties, concat keys and values into the string

function solution(object){
    let result = ''
    for(let property in object){
      result = result.concat(`${property} = ${object[property]}`, ',')
    }
    return result.slice(0, result.length - 1)
  }