const s = 'aabbaccc';

console.log(solution(s));

// function solution(s) {
//   var answer = s.length;

//   for (var len = 1; len <= s.length / 2; len++) {
//     var str = '';
//     var idx = 0;
//     var tmp = s.substring(0, len);
//     var cnt = 1;
//     for (idx = len; idx <= s.length; idx += len) {
//       if (tmp === s.substring(idx, idx + len)) {
//         cnt++;
//       } else {
//         if (cnt === 1) str += tmp;
//         else str += cnt + tmp;
//         cnt = 1;
//         tmp = s.substring(idx, idx + len);
//       }
//     }

//     if (cnt === 1) str += tmp;
//     else str += cnt + tmp;

//     answer = Math.min(answer, str.length);
//   }
//   return answer;
// }
function solution(s) {
  let answer = s.length;

  for (let len = 1; len <= s.length / 2; len++) {
    let str = '';
    let tmp = s.substring(0, len);
    let cnt = 1;
    for (let idx = len; idx <= s.length; idx += len) {
      if (tmp === s.substring(idx, idx + len)) {
        cnt++;
      } else {
        if (cnt === 1) str += tmp;
        else str += cnt + tmp;
        cnt = 1;
        tmp = s.substring(idx, idx + len);
      }
    }

    if (cnt === 1) str += tmp;
    else str += cnt + tmp;

    answer = Math.min(answer, str.length);
  }
  return answer;
}
