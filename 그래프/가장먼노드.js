const n = 6;
const vertex = 	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

console.log(solution(n, vertex));

function solution(n, vertex) {
  const graph = Array.from(new Array(n + 1), () => new Array());
  const visited = new Array(n + 1).fill(false);
  const dist = new Array(n + 1).fill(0);

  // 그래프 설정
  for(let i = 0; i < vertex.length; i++) {
    const [from, to] = vertex[i];

    graph[from].push(to);
    graph[to].push(from);
  }

  const bfs = () => {
    const queue = [[1, 0]]; // [vertex, curDist]

    visited[1] = true;

    while(queue.length) {
      const [vertex, curDist] = queue.shift();
      const adj = graph[vertex];

      for(let i = 0; i < adj.length; i++) {
        const v = adj[i]; // 도착 지점

        if(!visited[v]) {
          visited[v] = true;
          queue.push([v, curDist + 1]);

        }
      }

      dist[vertex] = curDist;
    }

  }
  
  bfs();
  
  const max = Math.max(...dist);
  const result = dist.filter((v) => v === max).length;

  return result;
  
}