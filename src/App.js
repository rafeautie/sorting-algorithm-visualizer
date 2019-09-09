import React, { useState } from 'react';
import { Visualizer } from './redux/containers';
import Drawer from './Drawer'

import LineCollection from './LineCollection';
import AlgoRunner from './AlgoRunner';

function App() {
  const [numOfLines, setNumOfLines] = useState(50);
  const [lines, setLines] = useState(new LineCollection(numOfLines));
  const [algoToRun, setAlgo] = useState('mergeSort');
  const [drawerIsOpen, toggleDrawer] = useState(true);

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
    <>
      {/* <Visualizer lines={lines} numOfLines={numOfLines} /> */}
      <Visualizer  />
      <Drawer
        handleLineCountChange={handleLineCountChange}
        handleShuffle={handleShuffle}
        handleRun={handleRun}
        setAlgo={handleAlgoChange}
        numOfLines={numOfLines}
        algoToRun={algoToRun}
        toggleDrawer={toggleDrawer}
        isOpen={drawerIsOpen}
      />
    </>
  );
}

export default App;
