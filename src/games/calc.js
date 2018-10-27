import gameProcess from '..';
import getRandom from '../utils';

const task = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const getCalculate = (Num1, Num2, operation) => {
    switch (operation) {
      case '+':
        return Num1 + Num2;
      case '-':
        return Num1 - Num2;
      case '*':
        return Num1 * Num2;
      default:
        return NaN;
    }
  };

  const number1 = getRandom(1, 10);
  const number2 = getRandom(1, 10);
  const marks = ['*', '-', '+'];
  const randomMarksArray = arr => Math.floor(Math.random() * arr.length);
  const index = randomMarksArray(marks);
  const sign = marks[index];
  const trueAnswer = String(getCalculate(number1, number2, sign));
  const question = (`${number1} ${sign} ${number2}`);
  return { question, trueAnswer };
};

export default () => gameProcess(task, getQuestionAnswer);
