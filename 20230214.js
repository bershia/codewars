// Backspaces in string

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  let arr = s.split('')
  while(arr.indexOf('#') > -1){
    if(arr.indexOf('#') === 0) {
      arr.splice(0, 1)
    }else{
      arr.splice(arr.indexOf('#')-1, 2)
    }
  }
  return arr.join('')
}