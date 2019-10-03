import React, { useRef, useEffect } from 'react';
import { Container, Canvas } from './VisualizerStyle';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

const Visualizer = ({ lines }) => {
  // let s = sketch(lines);
  const canvas = useRef(null);
  const offscreen = useRef(null);
  const worker = useRef(null);

  useEffect(() => {
    //FIX RESOLUTION OF CANVAS
    if (!worker.current) worker.current = new Worker('ww.js');

    //Hard coded dpi.
    let dpi = 2;

    //GET height and width of canvas.
    let style_height = +getComputedStyle(canvas.current).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas.current).getPropertyValue("width").slice(0, -2);
    
    //Set height and width of canvas.
    canvas.current.setAttribute('height', style_height * dpi);
    canvas.current.setAttribute('width', style_width * dpi);

    //Transfer canvas to offscreen.
    offscreen.current = canvas.current.transferControlToOffscreen();

    //Transfer offscreen canvas to Worker.
    worker.current.postMessage({ canvas: offscreen.current, lines }, [offscreen.current]);

    return () => {
      //Terminate Worker on will unmount.
      worker.current.terminate();
    }
  }, [])

  useEffect(() => {
    worker.current.postMessage({ canvas: null, lines });
  });

  return (
    <Container>
      <Canvas ref={canvas} />
      {/* <P5Wrapper sketch={s} /> */}
    </Container>
  );
}

export default Visualizer;