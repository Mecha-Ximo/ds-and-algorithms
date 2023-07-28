/**
 * Sorts a list following the selection sort algorithm [ascending order].
 * @param list - the list to sort
 * @returns the sorted list
 */
export function selectionSort<T>(list: T[]): T[] {
  const sorted = structuredClone(list);

  for (let i = 0; i < list.length - 1; i++) {
    let smallerIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (sorted[j] < sorted[smallerIndex]) {
        smallerIndex = j;
      }
    }

    if (smallerIndex !== i) {
      [sorted[i], sorted[smallerIndex]] = [sorted[smallerIndex], sorted[i]];
    }
  }

  return sorted;
}
