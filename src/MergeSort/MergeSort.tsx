import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useRandomDataSet } from '../DataSet/RandomDataSet.hooks';
import { useAlgorithmWithRef } from '../Algorithm/Algorithm.hooks';
import { insertionSortAlgorithm } from '../InsertionSort/InsertionSort.algorithm';
import AlgorithmControls from '../AlgorithmControls/AlgorithmControls';
import AlgorithmBody from '../AlgorithmBody/AlgorithmBody';
import { mergeSortAlgorithm } from './MergeSort.algorithm';

interface OwnProps {
}

type Props = OwnProps;

const MergeSort: FunctionComponent<Props> = (props) => {
  const [dataSet] = useRandomDataSet(10);
  const [algorithm, setAlgorithm] = useState<Generator<any, any> | null>(null);

  // const [data, nextStep, autoStep, isDone] = useAlgorithm(algorithm);
  const [data, nextStep, autoStep, isDone] = useAlgorithmWithRef(algorithm);

  useEffect(() => {
    setAlgorithm(mergeSortAlgorithm(dataSet));
  }, [dataSet]);

  return (
    <>
      <AlgorithmControls nextStep={nextStep} autoStep={autoStep} isDone={isDone}/>
      <AlgorithmBody rootClass="insertion-sort" data={data}/>
    </>
  );
};

export default MergeSort;
