import { Queue } from './queue.js';

describe('Queue class unit tests', () => {
  describe('queue initialization tests', () => {
    test('if it is init with no values, it should be empty', () => {
      const queue = new Queue();

      expect(queue.read()).toBeNull();
    });

    test('if it is init with one value, it should be enqueued', () => {
      const enqueuedValue = { x: 2 };

      const queue = new Queue(enqueuedValue);

      expect(queue.read()).toEqual(enqueuedValue);
    });

    test('if it is init with multiple values, they should be enqueued in order', () => {
      const enqueuedValues = [4, 5];

      const queue = new Queue(...enqueuedValues);

      enqueuedValues.map((v) => {
        expect(queue.read()).toBe(v);
        queue.dequeue();
      });
    });
  });

  describe('reading from the queue tests', () => {
    test('if there are no values enqueued, it should return null', () => {
      const queue = new Queue();

      expect(queue.read()).toBeNull();
    });

    test('if there are values enqueued, only the first value should be read', () => {
      const firstEnqueued = ['hi'];
      const queue = new Queue(firstEnqueued);

      expect(queue.read()).toEqual(firstEnqueued);

      const secondEnqueued = ['world'];
      queue.enqueue(secondEnqueued);

      expect(queue.read()).toEqual(firstEnqueued);
    });
  });

  describe('enqueueing to the queue tests', () => {
    test('if one value is enqueued, it should be enqueued at the end', () => {
      const enqueued = 'Hello';
      const queue = new Queue();
      queue.enqueue(enqueued);

      expect(queue.read()).toBe(enqueued);
    });

    test('if more than one value is enqueued, values should be enqueued in order', () => {
      const enqueued = [1000, 2000];
      const queue = new Queue();

      queue.enqueue(...enqueued);

      enqueued.map((v) => {
        expect(queue.read()).toBe(v);
        queue.dequeue();
      });
    });
  });

  describe('dequeueing from the queue tests', () => {
    test('only first value enqueued should be dequeued', () => {
      const first = 1;
      const last = 6;
      const queue = new Queue(first, last);
      expect(queue.read()).toBe(first);

      queue.dequeue();

      expect(queue.read()).toBe(last);
    });
  });
});
