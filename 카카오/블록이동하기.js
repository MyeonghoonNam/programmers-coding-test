/**
 *  2*1 크기의 로봇, 왼쪽 상단 좌표 (1,1)
 * 0: 반칸, 1: 벽, 로봇은 벽이 있는 칸 or 지도 밖 이동 불가능
 * 처음 로봇의 상태 : (1,1)의 가로방향으로 놓인 상태이며 앞뒤 구분 없다.
 * 로봇은 90도씩 회잔가능 하며 두 칸 중 어느 칸이든 축이 될 수 있다. 단 회전하는 방향에는 벽이 없어야한다.(축이 되는 칸으로부터 대각선 방향의 칸은 벽이 불가능)
 * 로봇이 한 칸 이동하거나 90도 회전하는데 걸리는 시간은 1초
 *
 * 요구사항: 로봇이 처음 상태에서 두 칸 중 어느 한 칸이라도 (N, N)위치까지 이동하는데 필요한 최소 시간
 *  -> 로봇이 처음에 놓여 있는 칸은 항상 0
 *  -> 로봇이 항상 목적지에 도착할 수 있는 경우만 입력으로 주어진다.
 *
 * 1. 로봇이 차지하는 칸이 2칸이며 회전이 가능하므로 맵의 범위를 위해 기존 맵을 확대하여 초기화
 * 2. 이동 가능한 경로를 모두 구하는 함수 구현
 * 3. bfs를 활용하여 최소시간을 도출
 *  1-1. 큐 구현
 *  1-2. 탐색한 경로확인을 위해 좌표 2개를 하나의 문자열로 저장하며 중복확인 가능한 visited를 Set 활용
 *  1-3. 현재 방향에서 이동가능한 경로 큐에 추가
 *  1-4. 회전이 가능한 경로 큐에 추가
 *
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const new_node = new Node(value);

    if (this.size === 0) {
      this.head = this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }

    this.size += 1;
  }

  dequeue() {
    if (this.size === 0) return;

    const pop_node = this.head;
    this.head = pop_node.next;

    if (this.size === 1) {
      this.tail = this.head;
    }

    this.size -= 1;
    return pop_node.value;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

const getBoard = (board) => {
  const N = board.length;
  const new_board = Array.from(new Array(N + 2), () =>
    new Array(N + 2).fill(1)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  return new_board;
};

const getPossibleMoveNextCase = (
  first_position,
  second_position,
  time,
  board
) => {
  const cases = [];

  const { x: x1, y: y1 } = first_position;
  const { x: x2, y: y2 } = second_position;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 회전 안하는 경우
  for (let i = 0; i < 4; i++) {
    const nx1 = x1 + dx[i];
    const ny1 = y1 + dy[i];
    const nx2 = x2 + dx[i];
    const ny2 = y2 + dy[i];

    if (board[nx1][ny1] === 0 && board[nx2][ny2] === 0) {
      cases.push({
        first_position: { x: nx1, y: ny1 },
        second_position: { x: nx2, y: ny2 },
        time: time + 1,
      });
    }
  }

  const rotate = [-1, 1]; // 상, 하 방향 회전
  for (let i = 0; i < rotate.length; i++) {
    const value = rotate[i];

    if (x1 === x2) {
      // 현재 로봇이 가로 방향으로 누워있는 경우
      if (board[x1 + value][y1] === 0 && board[x2 + value][y2] === 0) {
        cases.push({
          first_position: { x: x1, y: y1 },
          second_position: { x: x1 + value, y: y1 },
          time: time + 1,
        });
        cases.push({
          first_position: { x: x2 + value, y: y2 },
          second_position: { x: x2, y: y2 },
          time: time + 1,
        });
      }
    } else {
      // 현재 로봇이 세로 방향으로 세워져있는 경우
      if (board[x1][y1 + value] === 0 && board[x2][y2 + value] === 0) {
        cases.push({
          first_position: { x: x1, y: y1 },
          second_position: { x: x1, y: y1 + value },
          time: time + 1,
        });
        cases.push({
          first_position: { x: x2, y: y2 + value },
          second_position: { x: x2, y: y2 },
          time: time + 1,
        });
      }
    }
  }

  return cases;
};

const solution = (board) => {
  const goal_position = board.length.toString().repeat(2);
  board = getBoard(board);

  const queue = new Queue();
  const visited = new Set();

  queue.enqueue({
    first_position: { x: 1, y: 1 },
    second_position: { x: 1, y: 2 },
    time: 0,
  });
  visited.add("1112");

  while (!queue.isEmpty()) {
    const { first_position, second_position, time } = queue.dequeue();
    const { x: x1, y: y1 } = first_position;
    const { x: x2, y: y2 } = second_position;

    if (`${x1}${y1}` === goal_position || `${x2}${y2}` === goal_position) {
      return time;
    }

    const cases = getPossibleMoveNextCase(
      first_position,
      second_position,
      time,
      board
    );

    for (let i = 0; i < cases.length; i++) {
      const { first_position, second_position, time } = cases[i];
      const { x: x1, y: y1 } = first_position;
      const { x: x2, y: y2 } = second_position;

      if (!visited.has(`${x1}${y1}${x2}${y2}`)) {
        queue.enqueue({ first_position, second_position, time });
        visited.add(`${x1}${y1}${x2}${y2}`);
      }
    }
  }
};

const board = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
];
console.log(solution(board));
