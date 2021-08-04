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
  }

  enqueue(value) {
    const newNode = new Node(value);

    if(this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;

    this.head = this.head.next;

    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for(let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);
  
  let count = 0;
  while(true) {
    const curValue = queue.peek();

    if(curValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count++;

      if(location === value[1]) return count;
    }
  }
}


const priorities = [2, 1, 3, 2];
const location = 2;

console.log(solution(priorities, location));



// function solution(priorities, location) {
//   let myDoc = location;
//   let result = 0;

//   while (true) {
//     const curDoc = priorities.shift();

//     let flag = true;

//     for (let i = 0; i < priorities.length; i++) {
//       if (priorities[i] > curDoc) {
//         priorities.push(curDoc);
//         flag = false;
//         break;
//       }
//     }

//     if (flag) {
//       result++;

//       if (myDoc === 0) {
//         return result;
//       }
//     }

//     myDoc--;

//     if (myDoc === -1) {
//       myDoc = priorities.length - 1;
//     }
//   }
// }

// findIndex 메소드 활용법

// function solution(priorities, location) {
//   var arr = priorities.map((priority, index) => {
//     return {
//       index: index,
//       priority: priority,
//     };
//   });

//   var queue = [];

//   while (arr.length > 0) {
//     var firstEle = arr.shift();
//     var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
//     if (hasHighPriority) {
//       arr.push(firstEle);
//     } else {
//       queue.push(firstEle);
//     }
//   }

//   return queue.findIndex((queueEle) => queueEle.index === location) + 1;
// }
