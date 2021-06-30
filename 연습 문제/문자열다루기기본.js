const s = '2a234';

console.log(solution(s));

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  const reg = /[^\d]/;

  return reg.test(s) ? false : true;
}

// 정규식을 좀 더 활용한 조건 제외 방법
// function solution(s) {
//   const reg = /^\d{6}$|^\d{4}$/;

//   return reg.test(s);
// }
