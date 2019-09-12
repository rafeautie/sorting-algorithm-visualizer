// import { partition } from './helper';
import LineCollection from '../LineCollection';

function* quickSort(a, l, h) {
  l = l || 0;
  h = h || a.length - 1;
  let p;

  if (l < h) {
    yield* partition(l, h);

    yield* quickSort(a, l, p - 1)
    yield* quickSort(a, p + 1, h)
  }

  function* partition(l, h) {
    let piv = a[h];
    let i = l - 1;
  
    for(let j = l; j < h - 1; j++) {
        if(a[j].height <= piv.height) {
            i += 1;
            [a[i], a[j]] = [a[j], a[i]];
            yield new LineCollection(a);
        }
    }
  
    [a[i + 1], a[h]] = [a[h], a[i + 1]]
    yield new LineCollection(a);
  
    p = i + 1;
  }
}

export default quickSort;