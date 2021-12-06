import React, { FunctionComponent } from 'react';
import { SortableCell } from '../Algorithm/Algorithm.model';
import './AlgorithmBody.scss';

interface OwnProps {
  rootClass: string;
  data: SortableCell[];
}

type Props = OwnProps;

const AlgorithmBody: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className={props.rootClass + ' algorithm-body'}>
        {props.data.map(value => <div className="cell" key={value.id}>
          <div className="cell__id">{value.id}</div>
          <div className="cell__value"><b>{value.value}</b></div>
        </div>)}
      </div>
    </>
  );
};

export default AlgorithmBody;
