const { Stack, StackUnderflow, StackOverflow } = require('./stack');

describe('Stack', () => {
  describe('underflow', () => {
    it('throws StackUnderflow when popping from an empty stack', () => {
      const stack = new Stack(1);
      expect(() => stack.pop()).toThrow(StackUnderflow);
    });
  });

  describe('push / pop', () => {
    it('returns the pushed item when popped', () => {
      const stack = new Stack(1);
      stack.push(42);
      expect(stack.pop()).toBe(42);
    });

    it('returns items in LIFO order', () => {
      const stack = new Stack(3);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throws StackUnderflow when peeking an empty stack', () => {
      const stack = new Stack(1);
      expect(() => stack.peek()).toThrow(StackUnderflow);
    });

    it('returns the top item without removing it', () => {
      const stack = new Stack(3);
      stack.push(10);
      stack.push(20);
      stack.push(30);
      expect(stack.peek()).toBe(30);
      expect(stack.peek()).toBe(30);
    });

    it('does not change the stack size after peek', () => {
      const stack = new Stack(1);
      stack.push(5);
      stack.peek();
      expect(stack.pop()).toBe(5);
    });
  });

  describe('overflow', () => {
    it('throws StackOverflow when pushing beyond capacity', () => {
      const stack = new Stack(2);
      stack.push('a');
      stack.push('b');
      expect(() => stack.push('c')).toThrow(StackOverflow);
    });
  });
});
