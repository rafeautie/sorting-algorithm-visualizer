import LineCollection from '../../LineCollection';

export default function* partition(a, l, h) {
  yield* randomize(a, l, h);

  let piv = a[h];
  let i = l - 1;

  for (let j = l; j < h; j++) {
    if (a[j].height < piv.height) {
      i += 1;
      [a[i], a[j]] = [a[j], a[i]];
      yield new LineCollection(a);
    }
  }

  [a[i + 1], a[h]] = [a[h], a[i + 1]];
  yield new LineCollection(a);

  return i + 1;
}

const randomize = function*(a, l, h) {
  let r = Math.floor(Math.random() * (h - l + 1) + l);
  [a[h], a[r]] = [a[r], a[h]];
  yield new LineCollection(a);
}