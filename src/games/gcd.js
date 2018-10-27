import gameProcess from '..';
import getRandom from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const greatDivisor = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return greatDivisor(m, k);
  }
  return Math.abs(n);
};

const getQuestionAnswer = () => {
  const number1 = getRandom(1, 20);
  const number2 = getRandom(1, 20);
  const trueAnswer = String(greatDivisor(number1, number2));
  const question = (`${number1} ${number2}`);
  return { question, trueAnswer };
};

export default () => gameProcess(task, getQuestionAnswer);
