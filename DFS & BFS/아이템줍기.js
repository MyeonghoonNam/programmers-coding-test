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
      this.tail = this.head;
    }

    this.size--;

    return popNode.value;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

const rectangle = [
  [1, 1, 7, 4],
  [3, 2, 5, 5],
  [4, 3, 6, 9],
  [2, 6, 8, 8],
];
const characterX = 1;
const characterY = 3;
const itemX = 7;
const itemY = 8;
const solution = (rectangle, characterX, characterY, itemX, itemY) => {
  const MAX_COORDINATE = 110;
  const graph = Array.from(new Array(MAX_COORDINATE), () =>
    new Array(MAX_COORDINATE).fill(0)
  );
  let result = 0;

  const initialState = () => {
    rectangle = rectangle.map((coordinate) => coordinate.map((v) => v * 2));
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
  };

  const drawRectangle = () => {
    for (let i = 0; i < rectangle.length; i++) {
      const [x1, y1, x2, y2] = rectangle[i];

      for (let y = y1; y <= y2; y++) {
        for (let x = x1; x <= x2; x++) {
          graph[y][x] = 1;
        }
      }
    }

    for (let i = 0; i < rectangle.length; i++) {
      const [x1, y1, x2, y2] = rectangle[i];

      for (let y = y1 + 1; y < y2; y++) {
        for (let x = x1 + 1; x < x2; x++) {
          graph[y][x] = 0;
        }
      }
    }
  };

  const bfs = () => {
    const queue = new Queue();
    const visited = Array.from(new Array(MAX_COORDINATE), () =>
      new Array(MAX_COORDINATE).fill(false)
    );

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    queue.enqueue({ x: characterX, y: characterY });
    visited[characterY][characterX] = true;

    while (!queue.isEmpty()) {
      const { x, y } = queue.dequeue();

      if (x === itemX && y === itemY) {
        break;
      }

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (graph[ny][nx] === 1 && !visited[ny][nx]) {
          queue.enqueue({ x: nx, y: ny });
          graph[ny][nx] = graph[y][x] + 1;
          visited[ny][nx] = true;
        }
      }
    }

    result = parseInt(graph[itemY][itemX] / 2);
  };

  const process = () => {
    initialState();
    drawRectangle();
    bfs();
  };

  process();
  return result;
};

console.log(solution(rectangle, characterX, characterY, itemX, itemY));
