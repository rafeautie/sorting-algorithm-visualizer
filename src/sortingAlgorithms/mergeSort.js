import { merge } from './helper';

const mergeSort = function* (array, l, r) {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);

    yield* mergeSort(array, l, m);
    yield* mergeSort(array, m + 1, r);

    yield* merge(array, l, m, r);
  }
}

window.mergeSort = mergeSort;

export default mergeSort;
