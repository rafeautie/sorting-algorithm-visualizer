import React from 'react';
import { Container } from './VisualizerStyle';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

const Visualizer = ({ lines, numOfLines }) => {
  let s = sketch(lines);

  return (
    <Container>
      <P5Wrapper sketch={s} numOfLines={numOfLines}/>
    </Container>
  );
}

export default Visualizer;