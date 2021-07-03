class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.moveUp();
  }

  moveUp() {
    let curIdx = this.heap.length - 1;

    while (curIdx > 0) {
      const parentIdx = Math.floor((curIdx - 1) / 2);

      if (this.heap[parentIdx][1] <= this.heap[curIdx][1]) break;

      [this.heap[parentIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parentIdx],
      ];

      curIdx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.moveDown(0);

    return min;
  }

  moveDown(idx) {
    const leftIdx = 2 * idx + 1;
    const rightIdx = 2 * idx + 2;
    let minIdx = idx;
    const length = this.heap.length;

    if (leftIdx < length && this.heap[leftIdx][1] < this.heap[minIdx][1]) {
      minIdx = leftIdx;
    }

    if (rightIdx < length && this.heap[rightIdx][1] < this.heap[minIdx][1]) {
      minIdx = rightIdx;
    }

    if (minIdx !== idx) {
      [this.heap[idx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[idx]];

      this.moveDown(minIdx);
    }
  }

  empty() {
    return this.heap.length === 0 ? true : false;
  }
}

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];

console.log(solution(jobs));

function solution(jobs) {
  let result = 0;
  let time = 0;
  let jobsIdx = 0;

  jobs.sort((a, b) => a[0] - b[0]);

  const priorityQ = new MinHeap();

  while (jobsIdx < jobs.length || !priorityQ.empty()) {
    if (jobsIdx < jobs.length && time >= jobs[jobsIdx][0]) {
      priorityQ.push(jobs[jobsIdx++]);

      continue;
    }

    if (!priorityQ.empty()) {
      const top = priorityQ.pop();

      time += top[1];
      result += time - top[0];
    } else {
      time = jobs[jobsIdx][0];
    }
  }

  return Math.floor(result / jobs.length);
}
