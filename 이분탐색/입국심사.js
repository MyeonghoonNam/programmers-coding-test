// 나의 풀이

// function solution(n, times) {
//   times.sort((a, b) => a - b);

//   let left = 1;
//   let right = n * times[times.length - 1];
//   let result = right; // 최솟값을 구해야하므로 최댓값으로 초기값 설정한다.
  
//   while(left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let count = 0;

//     times.forEach((time) => {
//       count += Math.floor(mid / time);

//       if(count >= n) {
//         result = Math.min(mid, result);
//         return;
//       }
//     });

//     if(count >= n) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }

//   }

//   return result;
// }


// 문제 복습
// 로그 시간 = 이진 탐색
// time => 선형 로그 시간으로 충분히 가능하다.

// 우리는 특정 값을 찾는 것이 아니고 최소 몇 분에 모든 심사가 끝나는지 이다.
// 위와 같은 유형은 결정 문제에 해당된다
// 결정 문제 = 이진 탐색 = 파라메트릭 서치(Parametric Search)

// 최소 1분에서 10억분 * n 사이
// 면접관들이 몇 명을 처리하는가 ?
// 처리 가능한 입국자가 n 보다 작다면 시간을 늘리고, 반대는 시간을 줄인다.
// 시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); // O(n log n)

  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);

    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if(sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left; // 최종 마지막 결과까지 적용된 상태 if 조건문에서
}

const n = 6;
const times = [7, 10];

console.log(solution(n, times));