// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.


// Param: num, positive or 0, whole
// Return: num
// Example: digits(138) -> 3
// Pseudo code:
// convert to sting and find the length


function digits(n) {
    return n.toString().length
}