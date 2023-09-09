/**
 * Instantiate a Queue data structure.
 * - FIFO: First In First Out
 */
export class Queue<T> {
  private readonly data: T[] = [];

  constructor(...values: T[]) {
    this.data.push(...values);
  }

  /**
   * Enqueues values.
   * @param values - the values to be enqueued
   */
  public enqueue(...values: T[]): void {
    this.data.push(...values);
  }

  /**
   * Dequeues the first value.
   */
  public dequeue(): void {
    this.data.shift();
  }

  /**
   * Reads the first element in the queue.
   * @returns the first element in the queue if any
   */
  public read(): T | null {
    if (!this.data.length) {
      return null;
    }

    return this.data[0];
  }
}
