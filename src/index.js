import readlineSync from 'readline-sync';


const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

const defaultGame = (task, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = askName();
  const finalRound = 3;
  for (let round = 0; round < finalRound; round += 1) {
    const { question, trueAnswer } = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default defaultGame;
