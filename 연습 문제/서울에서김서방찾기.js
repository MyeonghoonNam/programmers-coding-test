const a = ['Jane', 'Kim'];

console.log(solution(a));

function solution(a) {
  let result = 0;

  a.forEach((name, i) => {
    if (name !== 'Kim') return;

    result = i;
  });

  return `김서방은 ${result}에 있다`;
}
