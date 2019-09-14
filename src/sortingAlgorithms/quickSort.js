import { partition } from './helper';

function* quickSort(a, l, h) {
  l = l || 0;
  h = h || a.length - 1;

  if (l < h) {
    let p;
    let gen = partition(a, l, h);
    let genYield = gen.next();

    while (!genYield.done) {
      yield genYield.value;
      genYield = gen.next();
    }

    p = genYield.value;

    yield* quickSort(a, l, p - 1);
    yield* quickSort(a, p + 1, h);
  }
}

export default quickSort;