import React, { useState } from 'react';
import { Container } from './AppStyle';
import Visualizer from './Visualizer';
import Menu from './Menu'
import Drawer from './Drawer'

import LineCollection from './LineCollection';
import AlgoRunner from './AlgoRunner';

function App() {
  const [numOfLines, setNumOfLines] = useState(5);
  const [lines, setLines] = useState(new LineCollection(numOfLines));
  const [algoToRun, setAlgo] = useState('mergeSort');

  const handleLineCountChange = (_, num) => {
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

  const handleAlgoChange = (e) => {
    setAlgo(e.target.value);
  }

  return (
    <Container >
      <Visualizer lines={lines} numOfLines={numOfLines} />
      <Drawer
        handleLineCountChange={handleLineCountChange}
        handleShuffle={handleShuffle}
        handleRun={handleRun}
        setAlgo={handleAlgoChange}
        numOfLines={numOfLines}
      />
      {/* <Menu
        handleChange={handleNumberChange}
        handleShuffle={handleShuffle}
        handleRun={handleRun}
        numOfLines={numOfLines}
      /> */}
    </Container>
  );
}

export default App;
