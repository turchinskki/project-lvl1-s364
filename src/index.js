import readlineSync from 'readline-sync';

const greet = () => {
  const userName = readlineSync.question('Wsecesrvee Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default greet;
