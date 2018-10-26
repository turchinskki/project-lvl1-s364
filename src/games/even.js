import defaultGame from '..';

const getQuestionAnswer = () => {
  const minNumber = 1;
  const maxNumber = 10;
  const getRandom = () => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const isEven = num => (num % 2) === 0;
  const getAnswer = num => (isEven(num) ? 'yes' : 'no');
  const question = String(getRandom());
  const trueAnswer = getAnswer(question);
  return { question, trueAnswer };
};

const runEven = () => {
  const task = 'Answer "yes" if number even otherwise answer "no"\n ';
  defaultGame(task, getQuestionAnswer);
};
export default runEven;
