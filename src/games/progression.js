import gameProcess from '..';
import getRandom from '../utils';

const task = 'What number is missing in this progression?';

const progressionLenght = 10;

const getQuestionAnswer = () => {
  const hiddenElementPosition = getRandom(0, 9);
  const progression = [];
  const firstNumber = getRandom(1, 3);
  const stepProgression = getRandom(2, 4);
  for (let i = 0; i < progressionLenght; i += 1) {
    progression[i] = firstNumber + (stepProgression * i);
  }
  const trueAnswer = String(progression[hiddenElementPosition]);
  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');
  return { question, trueAnswer };
};

export default () => gameProcess(task, getQuestionAnswer);
