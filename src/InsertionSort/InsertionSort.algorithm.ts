import { SortableCell } from '../Algorithm/Algorithm.model';

export const insertionSortAlgorithm = function* (data: SortableCell[]) {
  const sorted: SortableCell[] = [data[0]];
  const unsorted = data.slice(1);

  while (unsorted.length) {
    const element: SortableCell = unsorted.pop() || {value: 0, id: 0};
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].value > element.value) {
        sorted.splice(i, 0, element);
        yield [...sorted, ...unsorted];
        break;
      }
      if (i === sorted.length - 1) {
        sorted.push(element);
        yield [...sorted, ...unsorted];
        break;
      }
    }
  }

  return [...sorted];
}
