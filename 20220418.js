// 1. In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year 
// come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let years = 0
    while(p0 < p){
      years++
      p0 = p0 + Math.floor(p0 * percent / 100) + aug
    }
    return years
}

// 2. Implement a function that accepts 3 integer values a, b, c. The function should return true 
// if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a
}

// 2. Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends){
    return friends.filter(name => name.length ===4)
}

// 4. Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
}