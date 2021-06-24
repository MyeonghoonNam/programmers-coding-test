const numbers = '011';

console.log(solution(numbers));

function solution(numbers) {
  const MAX = 10000000;
  const numArr = Array.from(numbers);
  const curSelect = [];
  const selected = new Array(numArr.length).fill(false);

  const isPrime = new Array(MAX).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i < MAX; i++) {
    for (let j = 2 * i; j < MAX; j += i) {
      if (!isPrime[j]) continue;

      isPrime[j] = false;
    }
  }

  const set = new Set();
  let result = 0;

  const dfs = (cnt) => {
    if (curSelect.length) {
      if (curSelect[0] === '0') return;

      const value = Number(curSelect.join(''));

      if (set.has(value)) return;

      set.add(value);
    }

    for (let i = 0; i < numArr.length; i++) {
      if (!selected[i]) {
        selected[i] = true;
        curSelect.push(numArr[i]);
        dfs(cnt + 1);
        selected[i] = false;
        curSelect.pop();
      }
    }
  };

  dfs(0);

  for (let num of set) {
    if (isPrime[num]) {
      result++;
    }
  }

  return result;
}

// 통과 결과 시간이 훨씬 빠르게 해결이 된다.
// numbers의 길이가 재귀 호출이 가능한 수준이라 빠르게 해결되는 듯 하다.
// function solution(numbers) {
//   const arr = numbers.split("");
//   const answer = new Set();

//   // 처음엔 배열과 빈 문자열을 파라미터로 넣는다.
//   getNumber(arr, '');

//   function getNumber(numbersArr, currentNumber) {
//     if (numbersArr.length) {
//       // arr 수만큼 돈다.
//       for (let i = 0; i < numbersArr.length; i++) {
//         // temp array 변수를 지정한다.
//         const temp = [...numbersArr];

//         // temp에서 i번째 값을 하나 떼온다.
//         temp.splice(i, 1);

//         // 소수 체크
//         if (isPrime(parseInt(currentNumber + numbersArr[i]))) {
//           answer.add(parseInt(currentNumber + numbersArr[i]))
//         }

//         // 재귀로 순서가 바뀐 temp, 현재 수 + 이번에 바뀐 수를 호출한다.
//         getNumber(temp, currentNumber + numbersArr[i])
//       }
//     }
//   }

//   function isPrime(num) {
//     if (num < 2) return false;
//     if (num === 2) return true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   return answer.size;
// }
