const minNumber = 1;
const maxNumber = 10;
export const getRandom = () => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
export const getCalculate = (Num1, Num2, operation) => {
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
