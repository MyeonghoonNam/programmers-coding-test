const rotation90DegreeKey = (key) => {
  const new_key = Array.from(new Array(key.length), () =>
    new Array(key.length).fill(0)
  );

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      new_key[i][j] = key[key.length - j - 1][i];
    }
  }

  return new_key;
};

const checkOpenLock = (lock) => {
  const length = lock.length / 3;

  for (let i = length; i < length * 2; i++) {
    for (let j = length; j < length * 2; j++) {
      if (lock[i][j] !== 1) {
        return false;
      }
    }
  }

  return true;
};

const solution = (key, lock) => {
  // 2차원 배열인 자물쇠를 3 * 3 크기의 중앙에 오도록 초기화
  // 2차원 배열 확장
  const new_lock = Array.from(new Array(lock.length * 3), () =>
    new Array(lock.length * 3).fill(0)
  );

  // 3 * 3 크기의 중앙값에 기존 자물쇠 값으로 초기화
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      new_lock[i + lock.length][j + lock.length] = lock[i][j];
    }
  }

  // 키를 회전해가며 탐색 (90도씩 회전하므로 4번의 경우가 전체 경우의 수)
  let dir = 4;
  while (dir--) {
    key = rotation90DegreeKey(key);

    // 문제 조건에서 key의 크기는 항상 lock의 크기보다 작거나 같으므로 확장된 lock의 1부터 검사하여 불필요한 연산 횟수 줄이기
    for (let x = 1; x < lock.length * 2; x++) {
      for (let y = 1; y < lock.length * 2; y++) {
        for (let i = 0; i < key.length; i++) {
          for (let j = 0; j < key.length; j++) {
            new_lock[x + i][y + j] += key[i][j];
          }
        }

        // lock이 열리는지 확인
        if (checkOpenLock(new_lock)) {
          return true;
        }

        // lock이 열리지 않는다면 new_lock에 더해진 현재 key 값을 다시 빼어 new_lock 초기화
        for (let i = 0; i < key.length; i++) {
          for (let j = 0; j < key.length; j++) {
            new_lock[x + i][y + j] -= key[i][j];
          }
        }
      }
    }
  }

  return false;
};

const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

console.log(solution(key, lock));
