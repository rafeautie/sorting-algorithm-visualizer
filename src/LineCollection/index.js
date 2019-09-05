import times from 'lodash/times';
import every from 'lodash/every';
import shuffle from 'lodash/shuffle';
import uuidv4 from 'uuid/v4';

class LineCollection extends Map {
  constructor(input) {
    if (Array.isArray(input)) {
      console.log('instanceof')
      super(input);
      this._conformCollection();
    } else if (Number.isInteger(input)) {
      super()
      this._generateCollection(input);
    } else {
      super();
    }
  }

  static shuffle(collection) {
    return new LineCollection(shuffle(Array.from(collection)));
  }

  _generateCollection(numberOfLines) {
    let h = window.innerHeight - 75;
    let w = window.innerWidth / numberOfLines;
    
    times(numberOfLines, (i) => {
      let color = this._genColor(i + 1);
      let height = h / numberOfLines * (i + 1);
      
      this.set(uuidv4(), { 
        color, 
        height, 
        width: w,
        y: h - height,
        x: w * i,
      });
    });
  }

  _conformCollection() {
    this.forEach((l) => {
      let hasAllRequiredProps =
        l.hasOwnProperty('color') &&
        l.hasOwnProperty('height') &&
        l.hasOwnProperty('width') &&
        l.hasOwnProperty('y');
      if (!hasAllRequiredProps) throw new Error("Collection items must match ");
    })
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