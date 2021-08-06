const number = '1231234';
const k = 3;

console.log(solution(number, k));

// 나의 풀이

// function solution(number, k) {
//   const stack = [];

//   for (let i = 0; i < number.length; i++) {
//     const curNum = number[i];

//     while (k > 0 && stack[stack.length - 1] < curNum) {
//       stack.pop();
//       k--;
//     }

//     stack.push(curNum);
//   }

//   if (k > 0) {
//     stack.splice(stack.length - k, k);
//   }

//   const result = stack.join('');

//   return result;
// }


// N이 백만이면 O(N), O(N log N) 알고리즘을 구현하자.

// 큰 값이 나오면 이전 값은 전부다 삭제한다.
// 즉, 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열이 되어야한다.

// 현재 순간의 최적해를 계속해서 구해야하는 그리디 알고리즘 유형

// 그리디 알고리즘은 입력값이 큰 경우가 많고 직관적으로 푸는법이 용이하다.

function solution(number, k) {
  const stack = [];

  let count = 0;

  for(let i = 0; i < number.length; i++) {
    const item = number[i];

    while(count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }

    stack.push(item);
  }

  // 예외 처리 : 987654 처럼 스택의 pop이 안이루어지는 경우
  while(count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join('');
}
