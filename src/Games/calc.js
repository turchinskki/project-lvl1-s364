import readlineSync from 'readline-sync';
import { getCalculate, getRandom, winRound } from '../functions';

const runCalc = () => {
  console.log('Welcome to the Brain Games! \nWhat is the result of the expression?\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const wellDone = () => console.log(`Congratulations, ${userName}!`);
  for (let round = 1; round <= winRound; round += 1) {
    const Number1 = getRandom();
    const Number2 = getRandom();
    const Marks = ['*', '-', '+'];
    const randomMarksArray = arr => Math.floor(Math.random() * arr.length);
    const index = randomMarksArray(Marks);
    const sign = Marks[index];
    const calc = String(getCalculate(Number1, Number2, sign));
    console.log(`Question: ${Number1} ${sign} ${Number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === calc) {
      console.log('Correct');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${calc}.\nLets try again,${userName}!`);
      return false;
    }
  }
  return wellDone();
};
export default runCalc;
