///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 does not use closure; counter2 does.
 * 2. Which of the two uses a closure? How can you tell?
 * counter2 uses a closure; it references a variable that is without of the function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 keeps track of the previous runs; the variable stores that memory of the funtion. counter2 does not do this and returns the same result every time as if it never did it before.
 */

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
        return count++;
    }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
    return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
    return Math.round(Math.random() * 2);
}

console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, number) {
    let homeScore = 0;
    let awayScore = 0;
    for /*each*/ (let i = 0; i < number; i++) {
        homeScore = homeScore + inning();
        awayScore = awayScore + inning();
    }

    const object = {
        Home: homeScore,
        Away: awayScore
    }
    return object;

}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(finalScore, inning, innings) {
    const gameScores = [];
    for /*each*/ (let i = 0; i < innings; i++) {
        const inningScores = finalScore(inning, i + 1);
        inningScores.Inning = i + 1;
        gameScores.push(inningScores);
    }
    return gameScores
}
console.log(scoreboard(finalScore, inning, 9));