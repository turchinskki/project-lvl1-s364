import gameProcess from '..';
import getRandom from '../utils';

const task = 'What number is missing in this progression?';

const getQuestionAnswer = () => {
  const arrayLenght = 10;
  const arrayIndex = getRandom(0, 9);
  const array = [];
  const firstNumber = getRandom(1, 3);
  const stepArray = getRandom(2, 4);
  for (let i = 0; i < arrayLenght; i += 1) {
    array[i] = firstNumber + (stepArray * i);
  }
  const trueAnswer = String(array[arrayIndex]);
  array[arrayIndex] = '..';
  const question = array.join(' ');
  return { question, trueAnswer };
};

export default () => gameProcess(task, getQuestionAnswer);
