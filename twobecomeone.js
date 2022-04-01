class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(item) {
    this.first.push(item);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const item = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return item;
  }
  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const item = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return item;
  }
}
