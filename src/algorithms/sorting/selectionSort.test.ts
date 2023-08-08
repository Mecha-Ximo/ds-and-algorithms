import { selectionSort } from './selectionSort.js';

describe('selectionSort algorithm unit tests', () => {
  it('list should be sorted', () => {
    const list = [5, 2, 4, 1, 3];
    const expectedList = [1, 2, 3, 4, 5];

    const sortedList = selectionSort(list);

    expect(sortedList).toEqual(expectedList);
  });
});
