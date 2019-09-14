import LineCollection from '../LineCollection';
import { heapify } from './helper';

export default function* (a) {
  let n = a.length;

  for (let i = n / 2 - 1; i >= 0; i--) {
    yield* heapify(a, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    [a[i], a[0]] = [a[0], a[i]];
    yield new LineCollection(a);
    yield* heapify(a, i, 0);
  }
}