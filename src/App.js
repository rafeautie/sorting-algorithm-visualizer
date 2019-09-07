import React, { useState } from 'react';
import { Container } from './AppStyle';
import Visualizer from './Visualizer';
import Menu from './Menu'

import LineCollection from './LineCollection';
import AlgoRunner from './AlgoRunner';

function App() {
  const [numOfLines, setNumOfLines] = useState(5);
  const [lines, setLines] = useState(new LineCollection(numOfLines));
  const [algoToRun, setAlgo] = useState('mergeSort');
  
  const handleNumberChange = ({ target: { value } }) => {
    let num = Number(value);
    setNumOfLines(num);
    setLines(new LineCollection(num));
  }
  
  const handleShuffle = () => {
    setLines(lines.shuffle());
  }
  
  const handleRun = () => {
    let runner = new AlgoRunner(lines, algoToRun, setLines);
    runner.run();
  }

  return (
    <Container >
      <Visualizer lines={lines} numOfLines={numOfLines} />
      <Menu
        handleChange={handleNumberChange}
        handleShuffle={handleShuffle}
        handleRun={handleRun}
        numOfLines={numOfLines}
      />
    </Container>
  );
}

export default App;
