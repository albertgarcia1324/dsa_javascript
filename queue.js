class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    return this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }
}
