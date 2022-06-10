// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

// var group = {
//     A: 20, 
//     B: 15, 
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}




// para: object w/2 or more pairs
// result: object
// example: {a : 30, b : 5, c : 10} -> {a : 15, b : -10, c : -5} 
// pseudo code:
// calculate sum and average of pair values
// extract the average from each vlaue in pair
// update value

function splitTheBill(x) {
    let average = Object.values(x).reduce((a , b) => a + b, 0) / Object.values(x).length
    for (let key in x){
      x[key] = !((x[key] - average) % 1) ? (x[key] - average) : Number((x[key] - average).toFixed(2))
    }
    return x
}