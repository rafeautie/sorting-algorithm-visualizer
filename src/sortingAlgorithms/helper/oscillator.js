import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

export default (freq) => {
  let osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start(0, freq);
  osc.stop(100);
}
