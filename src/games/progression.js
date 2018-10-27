import defaultGame from '..';
import getRandom from '../utils';

const task = 'Find the greatest common divisor of given numbers.\n';

const greatDivisor = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return greatDivisor(m, k);
  }
  return Math.abs(n);
};

const getQuestionAnswer = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const trueAnswer = String(greatDivisor(number1, number2));
  const question = (`${number1} ${number2}`);
  return { question, trueAnswer };
};

const runGcd = () => {
  defaultGame(task, getQuestionAnswer);
};

export default runGcd;
