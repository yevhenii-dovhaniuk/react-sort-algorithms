import React, { FunctionComponent } from 'react';

interface OwnProps {
  nextStep: () => void;
  autoStep: () => void;
  isDone: boolean;
}

type Props = OwnProps;

const AlgorithmControls: FunctionComponent<Props> = (props) => {
  return (<>
    <header>
      {!props.isDone && <button onClick={() => {
        props.nextStep()
      }}>Next step</button>}
      {!props.isDone && <button onClick={props.autoStep}>Auto-step</button>}
    </header>
  </>);
};

export default AlgorithmControls;
