/**
 * Instantiate a Stack data structure.
 * - LIFO: Last In First Out
 */
export class Stack<T> {
  private readonly data: T[] = [];

  constructor(...elements: T[]) {
    this.data.push(...elements);
  }

  /**
   * Read the last value stacked.
   * @returns the last value stacked if any
   */
  public read(): T | null {
    if (!this.data.length) {
      return null;
    }

    return this.data[this.data.length - 1];
  }

  /**
   * Add one or more elements into the stack.
   * @param values - the values to be stacked
   */
  public add(...values: T[]): void {
    this.data.push(...values);
  }

  /**
   * Remove last element from the stack.
   */
  public remove(): void {
    this.data.pop();
  }
}
