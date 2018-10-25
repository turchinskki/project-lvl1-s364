import readlineSync from 'readline-sync';
import { getRandom, getAnswer, winRound } from '../functions';

const runEven = () => {
  const userName = readlineSync.question('Welcome to Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const wellDone = () => console.log(`Congratulations, ${userName}!`);
  for (let round = 1; round <= winRound; round += 1) {
    const question = getRandom();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === getAnswer(question)) {
      console.log('Correct');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getAnswer(question)}.\nLets try again,${userName}!`);
      return false;
    }
  }
  return wellDone();
};
export default runEven;
