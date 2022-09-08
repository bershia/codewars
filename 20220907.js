// Rot13

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 
// 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be 
// returned as they are. Only letters from the latin/english alphabet should be shifted, 
// like in the original Rot13 "implementation".

function rot13(message){
    const lowerA = 'abcdefghijklmnopqrstuvwxyz'
    const upperA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let arr = message.split('')
    let index
    let result = []
    for(let i = 0; i < arr.length; i++){   
      if(lowerA.includes(arr[i])){
        lowerA.indexOf(arr[i]) + 13 < 26 ? index = lowerA.indexOf(arr[i]) + 13 : index = lowerA.indexOf(arr[i]) + 13 - 26
        result.push(lowerA[index])
      } else if (upperA.includes(arr[i])){
        upperA.indexOf(arr[i]) + 13 < 26 ? index = upperA.indexOf(arr[i]) + 13 : index = upperA.indexOf(arr[i]) + 13 - 26
        result.push(upperA[index])
      } else{
        result.push(arr[i])
      }
    }
    return result.join('')
  }