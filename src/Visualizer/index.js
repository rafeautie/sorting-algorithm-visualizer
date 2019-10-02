import React, { useRef, useEffect } from 'react';
import { Container, Canvas } from './VisualizerStyle';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

const Visualizer = ({ lines }) => {
  // let s = sketch(lines);
  const canvas = useRef(null);

  useEffect(() => {
    const offscreen = canvas.current.transferControlToOffscreen();
    const worker = new Worker('ww.js');

    worker.postMessage({ canvas: offscreen, lines }, [offscreen]);

    return () => {
      worker.terminate();
    }
  }, [lines]);

  return (
    <Container>
      <Canvas ref={canvas} />
      {/* <P5Wrapper sketch={s} /> */}
    </Container>
  );
}

export default Visualizer;