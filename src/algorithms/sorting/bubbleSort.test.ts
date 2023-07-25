import { describe, expect, it } from 'vitest';
import { bubbleSort } from './bubbleSort';

// TODO: add tests for other data types

describe('test "bubbleSort" functionality', () => {
  const list = [1, 777, 22, 123, 654];

  it('it should sort a list in ascending order by default', () => {
    const expectedList = [1, 22, 123, 654, 777];

    const sortedList = bubbleSort(list);

    expect(sortedList).toEqual(expectedList);
  });

  it('if "descendingOrder" flag is provided with value = "true", the list should be sorted in descending order', () => {
    const expectedList = [777, 654, 123, 22, 1];

    const sortedList = bubbleSort(expectedList, true);

    expect(sortedList).toEqual(expectedList);
  });
});
