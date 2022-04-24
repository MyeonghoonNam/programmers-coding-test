/**
 * n => 외벽의 총 둘레
 * weak => 취약 지점의 위치
 * dist => 각 친구가 1시간 동안 이동가능한 거리
 *
 * 점검시간 => 1시간
 * 정북 방향 지점 => 0
 * 취약 지점 위치는 정북 방향 지점으로부터 시계 방향으로 떨어진 거리
 * 출발지점부터 시계, 반시계 방향 이동가능
 *
 * 요구사항: 최소한의 친구들을 투입하여 취약 지점을 점검할 때 점검하는 친구 수의 최솟값을 도출하기
 *
 * 접근
 * 1. 양방향 원형 형태의 데이터를 단방향 일자 형태 데이터로 변환하여 완전 탐색을 진행 => 원형 형태의 양방향 탐색 형태를 모두 탐색 가능
 * 2. 친구들의 이동가능한 거리 정보에 대해 순열 구하기
 * 3. 취약지점의 모든 위치를 시작점으로 지정하여 순열의 데이터를 반복하여 취약지점을 모두 점검하며 최소 인원 갱신
 */

const permutation = (arr) => {
  const selected = new Array(arr.length).fill(false);
  const result = [];
  const temp = [];

  const dfs = (cnt) => {
    if (cnt === arr.length) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (selected[i]) continue;

      selected[i] = true;
      temp.push(arr[i]);
      dfs(cnt + 1);
      temp.pop();
      selected[i] = false;
    }
  };

  dfs(0);
  return result;
};

const solution = (n, weak, dist) => {
  const length = weak.length; // 초기 데이터 형태 길이 저장

  for (let i = 0; i < length; i++) {
    weak.push(weak[i] + n);
  }

  const candidates = permutation(dist);
  let result = dist.length + 1;

  for (let i = 0; i < length; i++) {
    candidates.forEach((candidate) => {
      let friend_count = 1;
      let last_possible_position = weak[i] + candidate[friend_count - 1];

      for (let j = i; j < i + length; j++) {
        if (last_possible_position < weak[j]) {
          // 점검 불가능 하므로 친구 투입
          friend_count += 1;

          if (friend_count > dist.length) break;
          last_possible_position = weak[j] + candidate[friend_count - 1];
        }
      }

      result = Math.min(result, friend_count);
    });
  }

  return result > dist.length ? -1 : result;
};

const n = 12;
const weak = [1, 5, 6, 10];
const dist = [1, 2, 3, 4];

console.log(solution(n, weak, dist));
