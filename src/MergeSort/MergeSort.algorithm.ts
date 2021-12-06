import { SortableCell } from '../Algorithm/Algorithm.model';

export const mergeSortAlgorithm = function* (data: SortableCell[]) {
    yield [...data];
    const sorted = yield* mergeSort(data);
    return [...sorted];
}

function* mergeSort(data: SortableCell[]): Generator<SortableCell[], SortableCell[], unknown> {
    if (data.length === 1) {
        return data;
    }

    const m = Math.floor((data.length - 1) / 2);
    const leftHalf = data.slice(0, m + 1);
    const rightHalf = data.slice(m + 1, data.length);

    const sortedLeft = yield* mergeSort(leftHalf);
    const sortedRight = yield* mergeSort(rightHalf);
    const merged = mergeSorted(sortedLeft, sortedRight);
    yield merged;
    return merged;
}

const mergeSorted = (left: SortableCell[], right: SortableCell[]): SortableCell[] => {
    let leftIndex = 0;
    let rightIndex = 0;
    const result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].value > right[rightIndex].value) {
            result.push(right[rightIndex]);
            rightIndex++;
        } else {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    if (leftIndex < left.length) {
        result.push(...left.slice(leftIndex));
    }
    if (rightIndex < right.length) {
        result.push(...right.slice(rightIndex));
    }
    return result;
}
