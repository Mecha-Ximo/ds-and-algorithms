import { Stack } from './stack.js';

describe('Stack class unit tests', () => {
  describe('stack initialization tests', () => {
    test('if it is init with no values it should be empty', () => {
      const stack = new Stack();

      expect(stack.read()).toBeNull();
    });

    test('if it is init with one value it should be stored', () => {
      const stacked = 'Hello';
      const stack = new Stack(stacked);

      expect(stack.read()).toBe(stacked);
    });

    test('if it is init with more than one value, values should be stacked', () => {
      const stacked = [1000, 2000];
      const stack = new Stack(...stacked);

      stacked.reverse().map((expectedValue) => {
        expect(stack.read()).toBe(expectedValue);
        stack.remove();
      });
    });
  });

  describe('reading from the stack tests', () => {
    test('if there are no values stacked, it should return null', () => {
      const stack = new Stack();

      expect(stack.read()).toBeNull();
    });

    test('if there are values stacked, only the last value should be read', () => {
      const lastStacked = ['hi'];
      const stack = new Stack(lastStacked);

      expect(stack.read()).toEqual(lastStacked);

      const newLastStacked = ['world'];
      stack.add(newLastStacked);

      expect(stack.read()).toEqual(newLastStacked);
    });
  });

  describe('adding to the stack tests', () => {
    test('if one value is added, it should be stacked on top of the stack', () => {
      const stacked = 'Hello';
      const stack = new Stack();
      stack.add(stacked);

      expect(stack.read()).toBe(stacked);
    });

    test('if more than one value is added, values should be stacked on top of the stack', () => {
      const stacked = [1000, 2000];
      const stack = new Stack();

      stack.add(...stacked);

      stacked.reverse().map((expectedValue) => {
        expect(stack.read()).toBe(expectedValue);
        stack.remove();
      });
    });
  });

  describe('removing from the stack tests', () => {
    test('only last value stacked should be removed', () => {
      const first = 1;
      const last = 6;
      const stack = new Stack(first, last);
      expect(stack.read()).toBe(last);

      stack.remove();

      expect(stack.read()).toBe(first);
    });
  });
});
