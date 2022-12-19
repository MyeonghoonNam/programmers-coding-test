const solution = (cipher, code) => {
  const targetIndex = code - 1;
  let result = "";

  for (let i = targetIndex; i < cipher.length; i += code) {
    result += cipher[i];
  }

  return result;
};

const cipher = "dfjardstddetckdaccccdegk";
const code = 4;

console.log(solution(cipher, code));
