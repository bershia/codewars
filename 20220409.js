// 1. A hero is on his way to the castle to complete his mission. However, 
// he's been told that the castle is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets 
// he should carry.. Assuming he's gonna grab a specific given number of bullets and 
// move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    return (bullets / dragons >= 2 || dragons === 0) ? true : false
}

// 2. Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 
// and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(str){
    let newStr = ''
    for (let i = 0; i < str.length; i++){
      str.charAt(i) < 5 ? newStr += '0' : newStr += '1'
    }
    return newStr
}

// 3. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates 
// and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
    if(n < 0 || m < 0){
      return 0
    }else{
      return n * m
    }
}
  