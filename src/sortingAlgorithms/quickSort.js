import { partition } from './helper';

function* quickSort(a, l, h) {
  l = l || 0;
  h = h || a.length - 1;

  while (l < h) {
    let p;
    let gen = partition(a, l, h);
    let genYield = gen.next();

    while (!genYield.done) {
      yield genYield.value;
      genYield = gen.next();
    }

    p = genYield.value;

    if (p - l < h - p) {
      yield* quickSort(a, l, p - 1);
      l = p + 1;
    } else {
      yield* quickSort(a, p + 1, h);
      h = p - 1;
    }
  }
}

export default quickSort;