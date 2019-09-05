import React, { useState } from 'react';
import { Container } from './AppStyle';
import Visualizer from './Visualizer';
import Menu from './Menu'

import LineCollection from './LineCollection';

function App() {
  const [numOfLines, setNumOfLines] = useState(5);
  const [lines, setLines] = useState(new LineCollection(numOfLines));

  const handleNumberChange = (num) => {
    setNumOfLines(num);
    setLines(new LineCollection(num));
  }

  const handleShuffle = () => {
    setLines(lines.shuffle());
  }

  return (
    <Container >
      <Visualizer lines={lines} numOfLines={numOfLines}/>
      <Menu
        handleChange={handleNumberChange}
        handleShuffle={handleShuffle}
        numOfLines={numOfLines}
      />
    </Container>
  );
}

export default App;
