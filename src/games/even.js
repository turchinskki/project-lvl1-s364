import gameProcess from '..';
import getRandom from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no" ';

const isEven = num => (num % 2) === 0;
const getAnswer = num => (isEven(num) ? 'yes' : 'no');

const getQuestionAnswer = () => {
  const question = String(getRandom(1, 10));
  const trueAnswer = getAnswer(question);
  return { question, trueAnswer };
};

export default () => gameProcess(task, getQuestionAnswer);
