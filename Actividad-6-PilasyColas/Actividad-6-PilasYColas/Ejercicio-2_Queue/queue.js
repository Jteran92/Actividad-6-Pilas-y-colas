class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.elements[0];
  }
}

module.exports = {Queue};