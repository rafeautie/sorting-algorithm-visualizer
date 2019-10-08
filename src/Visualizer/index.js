import React, { useRef } from 'react';
import { Container, Canvas } from './VisualizerStyle';
import useResize from './useResize';
import useWorker from './useWorker';

const Visualizer = ({ lines }) => {
  const canvas = useRef(null);
  const [height, width] = useResize();
  
  useWorker(height, width, canvas, lines);

  return (
    <Container>
      <Canvas ref={canvas} />
    </Container>
  );
}

export default Visualizer;