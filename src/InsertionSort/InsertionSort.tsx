import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRandomDataSet } from '../DataSet/RandomDataSet.hooks';
import { useAlgorithmWithRef } from '../Algorithm/Algorithm.hooks';
import AlgorithmControls from '../AlgorithmControls/AlgorithmControls';
import AlgorithmBody from '../AlgorithmBody/AlgorithmBody';
import { insertionSortAlgorithm } from './InsertionSort.algorithm';

interface OwnProps {
}

type Props = OwnProps;

const InsertionSort: FunctionComponent<Props> = (props) => {
  const [dataSet] = useRandomDataSet(10);
  const [algorithm, setAlgorithm] = useState<Generator<any, any> | null>(null);

  // const [data, nextStep, autoStep, isDone] = useAlgorithm(algorithm);
  const [data, nextStep, autoStep, isDone] = useAlgorithmWithRef(algorithm);

  useEffect(() => {
    setAlgorithm(insertionSortAlgorithm(dataSet));
  }, [dataSet]);

  return (
    <>
      <AlgorithmControls nextStep={nextStep} autoStep={autoStep} isDone={isDone}/>
      <AlgorithmBody rootClass="insertion-sort" data={data}/>
    </>
  );
};

export default InsertionSort;
