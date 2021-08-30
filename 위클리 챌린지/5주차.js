const MAX = 5;

const alphabet = ['A', 'E', 'I', 'O', 'U'];
const selected = [];
const selectedCheck = new Array(MAX).fill(false);
let result = 0;
let flag = false;

const solution = word => {
  dfs(0, word);

  return result;
}

const dfs = (cnt, word) => {
  if(selected.join('') === word) {
    flag = true;
    return;
  }
  
  if(cnt <= MAX && !flag) {
    result++;

    for(let i = 0; i < MAX; i++) {
      selected.push(alphabet[i]);
      dfs(cnt + 1, word);
      selected.pop();
    }
  }
}

const word = "AAAE";

console.log(solution(word));


// 객체를 활용한 다른 풀이 방법
// let res = {};
// let idx = 0;
// let arr = ["A", "E", "I", "O", "U"];

// const dfs = (now, cnt) => {
//     if(cnt>5)   return;
//     res[now] = idx++;
//     for(let i=0; i<5; i++){
//         let next = now + arr[i];
//         dfs(next, cnt+1);
//     }
// }

// function solution(word) {
//     dfs("", 0);
//     return res[word];
// }