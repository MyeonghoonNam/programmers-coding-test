const date1 = [2021, 12, 28];
const date2 = [2021, 12, 29];

console.log(solution(date1, date2));

function solution(date1, date2) {
  const [y1, m1, h1] = date1;
  const [y2, m2, h2] = date2;
  const newDate1 = new Date(`${y1}-${m1}-${h1}`);
  const newDate2 = new Date(`${y2}-${m2}-${h2}`);
  const result = newDate1.getTime() < newDate2.getTime() ? 1 : 0;

  return result;
}
