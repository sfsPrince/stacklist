class StackUnderflow extends Error {}
class StackOverflow extends Error {}

class Stack {
  constructor(capacity) {
    this._capacity = capacity;
    this._items = [];
  }

  push(item) {
    if (this._items.length === this._capacity) throw new StackOverflow();
    this._items = [...this._items, item];
  }

  peek() {
    if (this._items.length === 0) throw new StackUnderflow();
    return this._items.at(-1);
  }

  pop() {
    if (this._items.length === 0) throw new StackUnderflow();
    const top = this._items.at(-1);
    this._items = this._items.slice(0, -1);
    return top;
  }
}

module.exports = { Stack, StackUnderflow, StackOverflow };
