import { SortableCell } from '../Algorithm/Algorithm.model';

export const selectionSortAlgorithm = function* (data: SortableCell[]) {
  for (let i = 0; i < data.length; i++) {
    const minimumIndex = findMinimumIndex(data, i);
    const temp = data[i];
    data[i] = data[minimumIndex];
    data[minimumIndex] = temp;
    yield [...data];
  }
  return [...data];
}

const findMinimumIndex = (data: SortableCell[], startingIndex: number) => {
  let minimumIndex = startingIndex;
  for (let i = startingIndex + 1; i < data.length; i++) {
    if (data[i].value < data[minimumIndex].value) {
      minimumIndex = i;
    }
  }
  return minimumIndex;
}
