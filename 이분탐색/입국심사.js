const n = 6;
const times = [7, 10];

console.log(solution(n, times));

function solution(n, times) {
  times.sort((a, b) => a - b);

  let left = 1;
  let right = n * times[times.length - 1];
  let result = right; // 최솟값을 구해야하므로 최댓값으로 초기값 설정한다.
  
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    times.forEach((time) => {
      count += Math.floor(mid / time);

      if(count >= n) {
        result = Math.min(mid, result);
        return;
      }
    });

    if(count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

  }

  return result;
}