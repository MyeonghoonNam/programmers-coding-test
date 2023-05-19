class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  insert(value) {
    this.heap.push(value);
    this.size += 1;
    this.moveUp();
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

  moveUp() {
    let currentIndex = this.size - 1;

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  moveDown(currentIndex = 0) {
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;
    let minIndex = currentIndex;

    while (
      leftChildIndex < this.size &&
      this.heap[leftChildIndex] < this.heap[minIndex]
    ) {
      minIndex = leftChildIndex;
    }

    while (
      rightChildIndex < this.size &&
      this.heap[rightChildIndex] < this.heap[minIndex]
    ) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== currentIndex) {
      this.swap(minIndex, currentIndex);
      this.moveDown(minIndex);
    }
  }

  delete(value) {
    const valueIndex = this.heap.indexOf(value);

    if (valueIndex !== -1) {
      this.heap.splice(valueIndex, 1);
      this.size -= 1;
    }
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  peek() {
    return this.heap[0];
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  insert(value) {
    this.heap.push(value);
    this.size += 1;
    this.moveUp();
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

  moveUp() {
    let currentIndex = this.size - 1;

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  moveDown(currentIndex = 0) {
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;
    let minIndex = currentIndex;

    while (
      leftChildIndex < this.size &&
      this.heap[leftChildIndex] > this.heap[minIndex]
    ) {
      minIndex = leftChildIndex;
    }

    while (
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

  delete(value) {
    const valueIndex = this.heap.indexOf(value);

    if (valueIndex !== -1) {
      this.heap.splice(valueIndex, 1);
      this.size -= 1;
    }
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(operations) {
  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();

  for (let i = 0; i < operations.length; i++) {
    const operration = operations[i];
    const [mod, number] = operration.split(" ");

    switch (mod) {
      case "I":
        maxHeap.insert(Number(number));
        minHeap.insert(Number(number));
        break;
      case "D":
        if (number === "1") {
          const maxValue = maxHeap.pop();
          minHeap.delete(maxValue);
        } else if (number === "-1") {
          const minValue = minHeap.pop();
          maxHeap.delete(minValue);
        }

        break;
    }
  }

  const result = maxHeap.isEmpty() ? [0, 0] : [maxHeap.peek(), minHeap.peek()];

  return result;
}

const operations = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];

console.log(solution(operations));
