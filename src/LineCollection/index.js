import times from 'lodash/times';
import shuffle from 'lodash/shuffle';

class LineCollection extends Array {
  constructor(input) {
    if(Array.isArray(input)) {
      super(...input);
    } else if (Number.isInteger(input)) {
      super();
      this._generateCollection(input);
    } else {
      super();
    }
  }

  shuffle() {
    return new LineCollection(shuffle(this));
  }

  _generateCollection(numberOfLines) {
    let h = window.innerHeight - 75;
    
    times(numberOfLines, (i) => {
      let color = this._genColor(i + 1);
      let height = h / numberOfLines * (i + 1);
      
      this.push({ 
        color, 
        height, 
        y: h - height,
      });
    });
  }

  _genColor(i) {
    let frequency = .060;
    let center = 128;
    let width = 127;
  
    var r = Math.floor(Math.sin(frequency * i + 0) * width + center);
    var g = Math.floor(Math.sin(frequency * i + 2) * width + center);
    var b = Math.floor(Math.sin(frequency * i + 4) * width + center);
    return `rgb(${r}, ${g}, ${b})`;
  }
}

export default LineCollection;