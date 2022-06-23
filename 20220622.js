// You are the judge at a competitive eating competition and you need to choose a winner!
// There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:
// Chickenwings: 5 points
// Hamburgers: 3 points
// Hotdogs: 2 points
// Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:
// [
//   {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
//   {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
// ]
// It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.
// [
//   {name: "Big Bob", score: 134},
//   {name: "Habanero Hillary", score: 98}
// ]
// Happy judging!

function scoreboard(whoAteWhat){
    let result = []
    whoAteWhat.forEach((person, i) => {
      for (const scores in person){
        let scoreBoard = person.chickenwings * 5 + person.hamburgers * 3 + person.hotdogs * 2
        result[i] = {name: person.name, score: scoreBoard}
    }
    })
    result.sort((a, b) => a.name.localeCompare(b.name))
    result.sort((a, b) => b.score - a.score)
    return result
}

// OR

function scoreboard(whoAteWhat){
    return whoAteWhat.map(obj => ({
      name: obj.name,
      score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
    })).sort((a, b) => b.score - a.score || a.name > b.name);
}

// or

const scoreboard = whoAteWhat =>
  whoAteWhat.map(val => ({name: val.name, score: val.chickenwings * 5 + val.hamburgers * 3 + val.hotdogs * 2}))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));