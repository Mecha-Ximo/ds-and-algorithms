// list must be sorted

/**
 * Search the index position of a value in a list following the binary-search algorithm.
 * @param list - the list to search in
 * @param searchValue
 * @returns
 */
export function binarySearch<T>(list: T[], searchValue: T): number | null {
  let lowIndex = 0;
  let highIndex = list.length - 1;

  while (lowIndex <= highIndex) {
    const middleIndex = Math.floor((highIndex + lowIndex) / 2);
    const middleValue = list[middleIndex];

    if (middleValue === searchValue) {
      return middleIndex;
    }

    if (middleValue > searchValue) {
      highIndex = middleIndex - 1;
    } else {
      lowIndex = middleIndex + 1;
    }
  }

  return null;
}
