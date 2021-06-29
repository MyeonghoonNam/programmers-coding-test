const a = 5;
const b = 24;

console.log(solution(a, b));

function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = days[new Date(`2016-${a}-${b}`).getDay()];

  return day;
}
