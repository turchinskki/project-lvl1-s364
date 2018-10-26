import defaultGame from '..';

const getQuestionAnswer = () => {
  const greatDivisor = (n, m) => {
    if (m > 0) {
      const k = n % m;
      return greatDivisor(m, k);
    }
    return Math.abs(n);
  };
  const getRandomForDivisor = (a, b) => Math.floor(Math.random() * (a - b + 1)) + b;
  const minNumberfForDivisor = 1;
  const maxNumberfForDivisor = 20;
  const randomNumber1 = getRandomForDivisor(minNumberfForDivisor, maxNumberfForDivisor);
  const randomNumber2 = getRandomForDivisor(minNumberfForDivisor, maxNumberfForDivisor);
  const trueAnswer = String(greatDivisor(randomNumber1, randomNumber2));
  const question = (`${randomNumber1} ${randomNumber2}`);
  return { question, trueAnswer };
};

const runGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.\n';
  defaultGame(task, getQuestionAnswer);
};
export default runGcd;
