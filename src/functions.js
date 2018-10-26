const minNumber = 1;
const maxNumber = 10;
const getRandom = () => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

export default getRandom;
