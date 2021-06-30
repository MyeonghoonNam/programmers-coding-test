const s = 'try hello world';

console.log(solution(s));

function solution(s) {
  const result = [];

  s.split(' ').forEach((word) => {
    let newWord = '';

    Array.from(word).forEach((char, i) => {
      if (i % 2 === 0 && char !== char.toUpperCase()) {
        // 짝수
        char = char.toUpperCase();
      } else if (i % 2 !== 0 && char !== char.toLowerCase()) {
        // 홀수
        char = char.toLowerCase();
      }

      newWord += char;
    });

    result.push(newWord);
  });

  return result.join(' ');
}
