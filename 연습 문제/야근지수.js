class PriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  insert(value) {
    this.heap.push(value);
    this.size += 1;
    this.moveUp();
  }

  moveUp() {
    let currentIndex = this.size - 1;

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;

      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  pop() {
    if (this.size === 0) return;

    if (this.size === 1) {
      this.size -= 1;
      return this.heap.pop();
    }

    const popValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.size -= 1;
    this.moveDown();

    return popValue;
  }

  moveDown(currentIndex = 0) {
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;
    let minIndex = currentIndex;

    if (
      leftChildIndex < this.size &&
      this.heap[leftChildIndex] > this.heap[minIndex]
    ) {
      minIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.size &&
      this.heap[rightChildIndex] > this.heap[minIndex]
    ) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== currentIndex) {
      this.swap(minIndex, currentIndex);
      this.moveDown(minIndex);
    }
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
}

const solution = (n, works) => {
  const totalWorks = works.reduce((acc, cur) => acc + cur, 0);

  if (totalWorks <= n) return 0;

  const queue = new PriorityQueue();

  for (let i = 0; i < works.length; i++) {
    queue.insert(works[i]);
  }

  for (let i = 0; i < n; i++) {
    const work = queue.pop();
    queue.insert(work - 1);
  }

  let result = 0;

  while (!queue.isEmpty()) {
    const work = queue.pop();
    result += Math.pow(work, 2);
  }

  return result;
};

const n = 4;
const works = [4, 3, 3];

console.log(solution(n, works));
