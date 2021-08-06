// function solution(n, vertex) {
//   const graph = Array.from(new Array(n + 1), () => new Array());
//   const visited = new Array(n + 1).fill(false);
//   const dist = new Array(n + 1).fill(0);

//   // 그래프 설정
//   for(let i = 0; i < vertex.length; i++) {
//     const [from, to] = vertex[i];

//     graph[from].push(to);
//     graph[to].push(from);
//   }

//   const bfs = () => {
//     const queue = [[1, 0]]; // [vertex, curDist]

//     visited[1] = true;

//     while(queue.length) {
//       const [vertex, curDist] = queue.shift();
//       const adj = graph[vertex];

//       for(let i = 0; i < adj.length; i++) {
//         const v = adj[i]; // 도착 지점

//         if(!visited[v]) {
//           visited[v] = true;
//           queue.push([v, curDist + 1]);

//         }
//       }

//       dist[vertex] = curDist;
//     }

//   }
  
//   bfs();
  
//   const max = Math.max(...dist);
//   const result = dist.filter((v) => v === max).length;

//   return result;
  
// }

// 문제 복습
// function solution(n, edge) {
//   const graph = Array.from(Array(n + 1), () => []); // 인접리스트

//   for(let i = 0; i < edge.length; i++) {
//     const [src, dest] = edge[i];

//     graph[src].push(dest);
//     graph[dest].push(src);
//   }

//   const distance = Array(n + 1).fill(0);
//   distance[1] = 1; // 1번 노드 부터 시작하여 갯수 측정

//   // BFS
//   const queue = [1];

//   while(queue.length) {
//     const src = queue.shift(); // 시간복잡도가 O(n)이지만 요소가 적을 경우 자바스크립트 엔진에서 최적화를 해준다.

//     for(const dest of graph[src]) {
//       if(distance[dest] === 0) {
//         queue.push(dest);
//         distance[dest] = distance[src] + 1;
//       }
//     }
//   }

//   const max = Math.max(...distance);

//   return distance.filter(item => item === max).length;
// }

// 문제 복습 - 큐 클래스 구현
// 요소의 개수가 적다면 shift 구현도 지장없지만 요소의 개수가 많다면 직접 큐를 구현하자.
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];

    delete this.queue[this.front];

    this.front++;

    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []); // 인접리스트
  
  for(let i = 0; i < edge.length; i++) {
    const [src, dest] = edge[i];
  
    graph[src].push(dest);
    graph[dest].push(src);
  }
  
  const distance = Array(n + 1).fill(0);
  distance[1] = 1; // 1번 노드 부터 시작하여 갯수 측정
  
  // BFS
  const queue = new Queue();
  
  queue.enqueue(1);

  while(!queue.isEmpty()) {
    const src = queue.dequeue(); 
  
    for(const dest of graph[src]) {
      if(distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  
  const max = Math.max(...distance);
  
  return distance.filter(item => item === max).length;
}

const n = 6;
const vertex = 	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

console.log(solution(n, vertex));