// 1. Write a function that takes an array of words and smashes them together 
// into a sentence and returns the sentence. You can ignore any need to sanitize words 
// or add punctuation, but you should add spaces between each word. Be careful, 
// there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const smash = words => words.join(' ')

// 2. Implement a function which multiplies two numbers.

const multiply = (a, b) => a * b

// 3. There was a test in your class and you passed it. Congratulations! But you're an 
// ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and 
// compare your score! Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let averageStudent = (yourPoints + classPoints.reduce((sum, curVal) => sum + curVal, 0))/classPoints.length
    return yourPoints >= averageStudent
}


// 4. Our football team finished the championship. The result of each match look like "x:y". 
// Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the 
// championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let points = 0
    for (let match of games){
      if (match[0] > match[2]){
        points += 3
      }else if(match[0] === match[2]){
        points += 1
      }
    }
    return points
}