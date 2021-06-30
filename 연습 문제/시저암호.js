const s = 'AB';
const n = 1;

console.log(solution(s, n));

function solution(s, n) {
  let result = '';

  Array.from(s).forEach((char) => {
    if (char === ' ') {
      result += char;

      return;
    }

    char = char.charCodeAt();

    if (char > 'Z'.charCodeAt()) {
      // 소문자
      if (char + n > 'z'.charCodeAt()) {
        char = ((char + n - 'a'.charCodeAt()) % 26) + 'a'.charCodeAt();
      } else {
        char = char + n;
      }
    } else {
      // 대문자
      if (char + n > 'Z'.charCodeAt()) {
        char = ((char + n - 'A'.charCodeAt()) % 26) + 'A'.charCodeAt();
      } else {
        char = char + n;
      }
    }

    result += String.fromCharCode(char);
  });

  return result;
}
