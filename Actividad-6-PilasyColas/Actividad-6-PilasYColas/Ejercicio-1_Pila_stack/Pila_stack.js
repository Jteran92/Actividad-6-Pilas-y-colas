class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.elements[this.elements.length - 1];
  }
}


module.exports = { Stack };