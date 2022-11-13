function solution(array) {
  array.sort((a, b) => a - b);
  return array[parseInt(array.length / 2)];
}

const array = [1, 2, 7, 10, 11];

console.log(array);
