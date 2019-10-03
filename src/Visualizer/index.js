import React, { useRef, useEffect } from 'react';
import { Container, Canvas } from './VisualizerStyle';

const Visualizer = ({ lines }) => {
  const canvas = useRef(null);
  const offscreen = useRef(null);
  const worker = useRef(null);

  useEffect(() => {
    if (!worker.current) worker.current = new Worker('ww.js');
    
    //FIX RESOLUTION OF CANVAS
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
  }, []);

  useEffect(() => {
    worker.current.postMessage({ canvas: null, lines });
  });

  return (
    <Container>
      <Canvas ref={canvas} />
    </Container>
  );
}

export default Visualizer;