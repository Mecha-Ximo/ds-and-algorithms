/**
 * Sorts a provided list following the bubble-sort algorithm.
 * It does not mutate the original list.
 * @param list - the list to be sorted
 * @param descendingOrder - flag to determine if list should be sorted in descending order [default = false]
 * @returns the sorted list
 */
export function bubbleSort<T>(list: T[], descendingOrder = false): T[] {
  const sortedList = structuredClone(list);
  let rightmostUnsortedIndex = list.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < rightmostUnsortedIndex; i++) {
      if (isSwapRequired(sortedList[i], sortedList[i + 1], descendingOrder)) {
        [sortedList[i], [sortedList[i + 1]]] = [sortedList[i + 1], [sortedList[i]]];
        sorted = false;
      }
    }
    rightmostUnsortedIndex -= 1;
  }

  return sortedList;
}

/**
 * Sorts a list of objects by a given property following the bubble-sort algorithm.
 * It does not mutate the original list.
 * @param property - the property used to sort the objects
 * @param list - the list to be sorted
 * @param descendingOrder - flag to determine if list should be sorted in descending order [default = false]
 * @returns the sorted list
 */
export function bubbleSortByObjectProperty<K extends string, T extends Record<string, unknown>>(
  property: K,
  list: T[],
  descendingOrder = false,
): T[] {
  const sortedList = structuredClone(list);
  let rightmostSortedIndex = list.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < rightmostSortedIndex; i++) {
      if (!(property in sortedList[i]) || !(property in sortedList[i + 1])) {
        throw new Error(`Sorting property not defined at index ${i} or ${i + 1}`);
      }

      if (isSwapRequired(sortedList[i][property], sortedList[i + 1][property], descendingOrder)) {
        [sortedList[i], sortedList[i + 1]] = [sortedList[i + 1], sortedList[i]];
        sorted = false;
      }
    }

    rightmostSortedIndex -= 1;
  }

  return sortedList;
}

function isSwapRequired<T>(first: T, second: T, descendingOrder: boolean): boolean {
  if (descendingOrder) {
    return first < second;
  }

  return first > second;
}
