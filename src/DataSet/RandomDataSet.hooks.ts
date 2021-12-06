import { useCallback, useEffect, useState } from 'react'
import { SortableCell } from '../Algorithm/Algorithm.model';

export const useRandomDataSet = (dataSetSize: number): [SortableCell[], () => void] => {
    const [dataSet, setDataSet] = useState<SortableCell[]>([]);

    useEffect(() => {
        setDataSet(generateRandomDataSet(dataSetSize));
    }, [dataSetSize]);

    const generateNewDataSet = useCallback(() => {
        setDataSet(generateRandomDataSet(dataSetSize));
    }, []);

    return [dataSet, generateNewDataSet];
}

export const generateRandomDataSet = (dataSetSize: number) => {
    const emptyData = new Array<SortableCell>(dataSetSize);
    emptyData.fill({value: 0, id: 0});
    return emptyData.map((value, index) => ({
        id: index,
        value: Math.floor(Math.random() * dataSetSize)
    }));
}
