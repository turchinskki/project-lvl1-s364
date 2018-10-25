import readlineSync from 'readline-sync';
import {
  winRound, getRandomForDivisor, greatDivisor,
} from '../functions';

const runGcd = () => {
  console.log('Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const wellDone = () => console.log(`Congratulations, ${userName}!`);
  for (let round = 1; round <= winRound; round += 1) {
    const minNumberfForDivisor = 1;
    const maxNumberfForDivisor = 50;
    const randomNumber1 = getRandomForDivisor(minNumberfForDivisor, maxNumberfForDivisor);
    const randomNumber2 = getRandomForDivisor(minNumberfForDivisor, maxNumberfForDivisor);
    const divisor = String(greatDivisor(randomNumber1, randomNumber2));
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === divisor) {
      console.log('Correct');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${divisor}.\nLets try again,${userName}!`);
      return false;
    }
  }
  return wellDone();
};
export default runGcd;
