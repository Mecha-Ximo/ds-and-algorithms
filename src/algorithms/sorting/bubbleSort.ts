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

function isSwapRequired<T>(first: T, second: T, descendingOrder: boolean): boolean {
  if (descendingOrder) {
    return first < second;
  }

  return first > second;
}
