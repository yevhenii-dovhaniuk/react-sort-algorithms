import { SortableCell } from '../Algorithm/Algorithm.model';

export const bubbleSortAlgorithm = function* (data: SortableCell[]) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i].value <= data[j].value) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        yield [...data];
      }
    }
  }
  return [...data];
}
