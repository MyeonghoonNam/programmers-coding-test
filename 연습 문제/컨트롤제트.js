const solution = (s) => {
  const arr = s
    .split(" ")
    .map((value) => (Number.isNaN(Number(value)) ? value : Number(value)));

  let result = 0;

  arr.forEach((value, index, array) => {
    if (value === "Z") {
      result -= array[index - 1];
    } else {
      result += value;
    }
  });

  return result;
};

const s = "1 2 Z 3";
console.log(solution(s));
