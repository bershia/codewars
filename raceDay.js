// Codecademy’s annual race is just around the corner! This year, we have a lot of participants. 
// You have been hired to write a program that will register runners for the race and give them 
// instructions on race day.

// Here’s how our registration works. There are adult runners (over 18 years of age) and youth 
// runners (under 18 years of age). They can register early or late. Runners are assigned 
// a race number and start time based on their age and registration.

// Race number:
// - Early adults receive a race number at or above 1000.
// - All others receive a number below 1000.

// Start time:
// - Adult registrants run at 9:30 am or 11:00 am.
// - Early adults run at 9:30 am.
// - Late adults run at 11:00 am.
// - Youth registrants run at 12:30 pm (regardless of registration).

// But we didn’t plan for runners that are exactly 18! Tell the runner to see the registration desk..

let raceNumber = Math.floor(Math.random() * 1000);

let regTime = prompt('Did you register early? Reply YES ot NO: ').toLowerCase();

let age = prompt('Enter your age');

let updRaceNum = age > 18 && earlyReg ? raceNumber += 1000 : raceNumber;

if(age > 18 && regTime === 'yes'){
  console.log(`You will race at 9:30 am with a race number ${updRaceNum}`)
}else if(age > 18 && regTime === 'no'){
  console.log(`You will race at 11:00 am with a race number ${updRaceNum}`)
}else if(age < 18){
  console.log(`You will race at 12:30 am with a race number ${updRaceNum}`)
}else{
  console.log(`Please, see the registration desk.`)
}