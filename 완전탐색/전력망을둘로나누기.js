// const solution = (n, wires) => {
//   let answer = Number.MAX_SAFE_INTEGER;
//   let visited = Array.from({ length: n + 1 }, () => 0);
//   let count = 1;
//   let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

//   for (let [a, b] of wires) {
//     graph[a][b] = 1;
//     graph[b][a] = 1;
//   }

//   const DFS = (L) => {
//     for (let i = 1; i <= n; i++) {
//       if (visited[i] === 0 && graph[L][i] === 1) {
//         visited[L] = 1;
//         count++;
//         DFS(i);
//         visited[L] = 0;
//       }
//     }
//   };

//   for (let [a, b] of wires) {
//     graph[a][b] = 0;
//     graph[b][a] = 0;
//     count = 1;
//     DFS(1);
//     graph[a][b] = 1;
//     graph[b][a] = 1;
//     answer = Math.min(answer, Math.abs(n - count - count));
//   }

//   return answer;
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    const popNode = this.head;

    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = popNode.next;
    }

    this.size--;

    return popNode.value;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

const solution = (n, wires) => {
  const graph = Array.from(Array(n + 1), () => Array());
  let result = Number.MAX_SAFE_INTEGER;

  wires.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  });

  const bfs = (start, end) => {
    const queue = new Queue();
    const visited = Array(n + 1).fill(false);

    let count = 0;

    queue.enqueue(start);
    visited[start] = true;

    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      graph[node].map((n) => {
        if (n !== end && !visited[n]) {
          queue.enqueue(n);
          visited[n] = true;
        }
      });

      count++;
    }

    return count;
  };

  wires.forEach(([start, end]) => {
    const diff = Math.abs(bfs(start, end) - bfs(end, start));

    if (diff < result) {
      result = diff;
    }
  });

  return result;
};

const n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

console.log(solution(n, wires));
