function solution(s) {
  let result = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let compressed_str = "";
    let prev_str = s.slice(0, i);
    let repeat_count = 1;

    for (let j = i; j <= s.length; j += i) {
      let current_str = s.slice(j, j + i);

      if (prev_str === current_str) {
        repeat_count += 1;
      } else {
        if (repeat_count === 1) {
          compressed_str += prev_str;
        } else {
          compressed_str += String(repeat_count) + prev_str;
        }

        prev_str = current_str;
        repeat_count = 1;
      }
    }

    if (repeat_count === 1) {
      compressed_str += prev_str;
    } else {
      compressed_str += String(repeat_count) + prev_str;
    }

    result = Math.min(result, compressed_str.length);
  }

  return result;
}

const s = "aabbaccc";
console.log(solution(s));
