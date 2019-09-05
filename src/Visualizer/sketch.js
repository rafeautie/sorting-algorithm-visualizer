export default function sketch(lines) {
  return function (p) {
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight - 75);
      drawLines();
    };

    p.windowResized = function () {
      p.resizeCanvas(window.innerWidth, window.innerHeight - 75);
      drawLines()
    }

    const drawLines = () => {
      lines.forEach(({ height, width, color, x, y }) => {
        p.strokeWeight(0);
        p.fill(color);
        p.rect(x, y, width, height);
      })
    }
  }
}