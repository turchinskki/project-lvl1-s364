import gameProcess from '..';
import getRandom from '../utils';

const task = 'Answer "Yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const getQuestionAnswer = () => {
  const number = getRandom(1, 17);
  const trueAnswer = isPrime(number) === true ? 'yes' : 'no';
  const question = String(number);
  return { question, trueAnswer };
};

export default () => gameProcess(task, getQuestionAnswer);
