import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

export default class Sound {
  constructor(freq) {
    this.osc = new p5.Oscillator();
    this.f = freq;
    this._instantiateOscillator();
  }

  _instantiateOscillator() {
    this.osc.setType('sine');
    
  }

  ping() {
    this.osc.start(0, this.f);
    this.osc.stop(100);
  }
}
