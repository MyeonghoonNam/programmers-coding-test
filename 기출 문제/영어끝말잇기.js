const n = 2;
const words = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];

console.log(solution(n, words));

function solution(n, words) {
  const playerMap = new Map();
  const wordsRecord = [];
  const result = [0, 0];

  for (let i = 1; i <= n; i++) {
    playerMap.set(i, 0);
  }

  let playerNumber = 1;

  for (let i = 0; i < words.length; i++, playerNumber++) {
    const word = words[i];

    playerMap.set(playerNumber, playerMap.get(playerNumber) + 1);

    if (i === 0) {
      wordsRecord.push(word);
      continue;
    }

    const prevWord = wordsRecord[wordsRecord.length - 1];

    if (wordsRecord.includes(word)) {
      return [playerNumber, playerMap.get(playerNumber)];
    } else if (prevWord[prevWord.length - 1] !== word[0]) {
      return [playerNumber, playerMap.get(playerNumber)];
    } else {
      wordsRecord.push(word);
    }

    if (playerNumber >= n) playerNumber = 0;
  }

  return result;
}
