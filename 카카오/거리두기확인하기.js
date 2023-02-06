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

    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.size === 0) return;

    const popNode = this.head;
    this.head = popNode.next;

    if (this.size === 1) {
      this.tail = null;
    }

    this.size--;

    return popNode.value;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

const solution = (places) => {
  const SIZE = 5;
  const result = [];

  const bfs = (config, place, visited) => {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const queue = new Queue();
    queue.enqueue(config);

    while (!queue.isEmpty()) {
      const { x, y, distance } = queue.dequeue();

      if (place[x][y] === "P" && distance !== 0) {
        return 0;
      }

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (isValidPlaceIndex(nx, ny) === false) continue;

        if (
          visited[nx][ny] === false &&
          place[nx][ny] !== "X" &&
          distance < 2
        ) {
          queue.enqueue({ x: nx, y: ny, distance: distance + 1 });
          visited[nx][ny] = true;
        }
      }
    }

    return 1;
  };

  const isValidPlaceIndex = (x, y) => {
    if (x >= 0 && y >= 0 && x < SIZE && y < SIZE) return true;
    else return false;
  };

  const isValidDistance = (place) => {
    const visited = Array.from(new Array(SIZE), () =>
      new Array(SIZE).fill(false)
    );

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (place[i][j] === "P") {
          const config = {
            x: i,
            y: j,
            distance: 0,
          };

          visited[i][j] = true;
          if (bfs(config, place, visited) === 0) return 0;
        }
      }
    }

    return 1;
  };

  places.forEach((place) => {
    result.push(isValidDistance(place));
  });

  return result;
};

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

console.log(solution(places));
