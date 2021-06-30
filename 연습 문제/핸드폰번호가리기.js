const phone_number = '01033334444';

console.log(solution(phone_number));

function solution(phone_number) {
  const result =
    '*'.repeat(phone_number.length - 4) +
    phone_number.slice(phone_number.length - 4);

  return result;
}

// 정규식 풀이
// function solution(phone_number) {
//   return phone_number.replace(/\d(?=\d{4})/g, '*');
// }
