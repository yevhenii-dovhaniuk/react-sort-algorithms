import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRandomDataSet } from '../DataSet/RandomDataSet.hooks';
import { useAlgorithm, useAlgorithmWithRef } from '../Algorithm/Algorithm.hooks';
import { insertionSortAlgorithm } from '../InsertionSort/InsertionSort.algorithm';
import AlgorithmControls from '../AlgorithmControls/AlgorithmControls';
import AlgorithmBody from '../AlgorithmBody/AlgorithmBody';
import { selectionSortAlgorithm } from './SelectionSort.algorithm';

interface OwnProps {
}

type Props = OwnProps;

const SelectionSort: FunctionComponent<Props> = (props) => {
  const [dataSet] = useRandomDataSet(10);
  const [algorithm, setAlgorithm] = useState<Generator<any, any> | null>(null);

  const [data, nextStep, autoStep, isDone] = useAlgorithm(algorithm);
  // const [data, nextStep, autoStep, isDone] = useAlgorithmWithRef(algorithm);

  useEffect(() => {
    setAlgorithm(selectionSortAlgorithm(dataSet));
  }, [dataSet]);

  return (
    <>
      <AlgorithmControls nextStep={nextStep} autoStep={autoStep} isDone={isDone}/>
      <AlgorithmBody rootClass="selection-sort" data={data}/>
    </>
  );
};

export default SelectionSort;
