import React, { FunctionComponent, useEffect, useState } from 'react';
import { useAlgorithmWithRef } from '../Algorithm/Algorithm.hooks';
import { bubbleSortAlgorithm } from './BubbleSort.algorithm';
import { useRandomDataSet } from '../DataSet/RandomDataSet.hooks';
import './BubbleSort.scss';
import AlgorithmControls from '../AlgorithmControls/AlgorithmControls';
import AlgorithmBody from '../AlgorithmBody/AlgorithmBody';

interface OwnProps {
}

type Props = OwnProps;

const BubbleSort: FunctionComponent<Props> = (props) => {
  const [dataSet] = useRandomDataSet(10);
  const [algorithm, setAlgorithm] = useState<Generator<any, any> | null>(null);

  // const [data, nextStep, autoStep, isDone] = useAlgorithm(algorithm);
  const [data, nextStep, autoStep, isDone] = useAlgorithmWithRef(algorithm);

  useEffect(() => {
    setAlgorithm(bubbleSortAlgorithm(dataSet));
  }, [dataSet]);

  return (
    <>
      <AlgorithmControls nextStep={nextStep} autoStep={autoStep} isDone={isDone}/>
      <AlgorithmBody rootClass="bubble-sort" data={data}/>
    </>
  );
};

export default BubbleSort;
