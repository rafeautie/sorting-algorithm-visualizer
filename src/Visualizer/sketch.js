export default function sketch(lines) {
  return function (p) {
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight - 75);
      drawLines();
    };

    p.windowResized = function () {
      p.resizeCanvas(window.innerWidth, window.innerHeight - 75);
      console.log('recalc');
      drawLines()
    }

    const drawLines = () => {
      let width = window.innerWidth / lines.length; 
      lines.forEach(({ height, color, y }, i) => {
        p.strokeWeight(0);
        p.fill(color);
        p.rect(width * i, y, width, height);
      })
    }
  }
}