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
      let i = 0;
      for (var line of lines) {
        line.recalculate(i);

        p.strokeWeight(0);
        p.fill(line.color);
        p.rect(line.x, line.y, line.width, line.height);
        i++;
      }
    }
  }
}