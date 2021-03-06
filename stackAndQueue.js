class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

let myNode = new Node(3);
console.log("myNode", myNode);

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    console.log("TODO: push item into stack")
  }

  pop() {
    console.log("TODO: pop item off stack")
  }
}

let myStack = new Stack();
console.log("myStack", myStack);
myStack.push(7);
myStack.push(6);
console.log("myStack", myStack);
myStack.pop();
myStack.pop();
console.log("myStack", myStack);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    console.log("TODO: enqueue item into queue")
  }

  dequeue(item) {
    console.log("TODO: dequeue item from queue")
  }
}

let myQueue = new Queue();
console.log("myQueue", myQueue);
myQueue.enqueue(7);
myQueue.enqueue(6);
console.log("myQueue", myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log("myQueue", myQueue);

exports.queue = Queue
