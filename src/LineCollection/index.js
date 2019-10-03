import Line from './Line';
import times from 'lodash/times';
import shuffle from 'lodash/shuffle';

class LineCollection extends Array {
  constructor(input) {
    if (Array.isArray(input)) {
      super(...input);
      this._updateShuffleIdx()
    } else {
      super();
      if (input && Number.isInteger(input)) {
        this._generateCollection(input);
      }
    }
  }

  shuffle() {
    return new LineCollection(shuffle(this));
  }

  calcColor(i) {
    let frequency = .060;
    let center = 128;
    let width = 127;

    var r = Math.floor(Math.sin(frequency * i + 1) * width + center);
    var g = Math.floor(Math.sin(frequency * i + 3) * width + center);
    var b = Math.floor(Math.sin(frequency * i + 5) * width + center);
    return `rgb(${r}, ${g}, ${b})`;
  }

  _generateCollection(numberOfLines) {
    let canvasHeight = window.innerHeight * 2;
    let width = (window.innerWidth / numberOfLines) * 2;

    times(numberOfLines, (i) => {
      let height = canvasHeight / numberOfLines * (i + 1);
      let color = this.calcColor(i + 1);
      let x = width * i;
      let y = canvasHeight - height;

      this.push(new Line(x, y, width, height, color, numberOfLines, i))
    });
  }

  _updateShuffleIdx() {
    this.forEach((line, idx, arr) => {
      line.shuffledIdx = idx;
    })
    return this;
  }
}

export default LineCollection;
