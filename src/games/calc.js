import defaultGame from '..';
import getRandom from '../functions';

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

  const Number1 = getRandom();
  const Number2 = getRandom();
  const Marks = ['*', '-', '+'];
  const randomMarksArray = arr => Math.floor(Math.random() * arr.length);
  const index = randomMarksArray(Marks);
  const sign = Marks[index];
  const trueAnswer = String(getCalculate(Number1, Number2, sign));
  const question = (`${Number1} ${sign} ${Number2}`);
  return { question, trueAnswer };
};

const runCalc = () => {
  const task = 'What is the result of the expression?\n';
  defaultGame(task, getQuestionAnswer);
};
export default runCalc;
