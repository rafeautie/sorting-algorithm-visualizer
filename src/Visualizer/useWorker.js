import { useRef, useEffect } from 'react';

export default (height, width, canvas, lines) => {
  const offscreen = useRef(null);
  const worker = useRef(null);
  const dpi = useRef(null);

  useEffect(() => {
    if (!worker.current) worker.current = new Worker('ww.js');

    //FIX RESOLUTION OF CANVAS
    //Hard coded dpi.
    dpi.current = window.devicePixelRatio;

    //Set height and width of canvas.
    canvas.current.setAttribute('height', height * dpi.current);
    canvas.current.setAttribute('width', width * dpi.current);

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
    worker.current.postMessage({ canvas: null, lines, width, height, dpi: dpi.current });
  });

  return worker;
}