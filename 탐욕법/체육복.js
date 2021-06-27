const n = 3;
const lost = [3];
const reserve = [1];

console.log(solution(n, lost, reserve));

function solution(n, lost, reserve) {
  const student = new Map();
  let result = 0;

  for (let i = 1; i <= n; i++) {
    student.set(i, 1);
  }

  reserve.forEach((number) => {
    student.set(number, student.get(number) + 1);
  });

  lost.forEach((number) => {
    student.set(number, student.get(number) - 1);
  });

  student.forEach((count, number) => {
    if (count === 2) {
      if (student.get(number - 1) === 0) {
        student.set(number - 1, 1);
        student.set(number, 1);
      } else if (student.get(number + 1) === 0) {
        student.set(number + 1, 1);
        student.set(number, 1);
      }
    }
  });

  student.forEach((count) => {
    if (count > 0) {
      result++;
    }
  });

  return result;
}
