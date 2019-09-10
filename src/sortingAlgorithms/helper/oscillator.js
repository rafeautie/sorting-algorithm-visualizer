import p5 from 'p5';
import 'p5/lib/addons/p5.sound';


export default (freq) => {
  new p5.MonoSynth().play(freq, 0.5, 0, 0.01);
}
