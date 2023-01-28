// Simple Encryption #1 - Alternating Split

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if(text && text.length !== 0) {
      while(n > 0){
        let result = ''
        let odd = text.split('').filter((x, i) => i % 2 === 0).join('')
        let even = text.split('').filter((x, i) => i % 2 !== 0).join('')
        result = even + odd
        text = result
        n--
      }
    }
    return text
  }
  
  function decrypt(encryptedText, n) {
    if(encryptedText && encryptedText.length !== 0){
      while(n > 0){
        let odd = encryptedText.slice(0, Math.floor(encryptedText.length / 2))
        let even = encryptedText.slice(Math.floor(encryptedText.length / 2))
        let result = ''
        for (let i = 0; i <= even.length; i++){
          result += even.charAt(i) + odd.charAt(i)
        }
        encryptedText = result
        n--
      }
    } 