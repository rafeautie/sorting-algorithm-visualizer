import LineCollection from '../../LineCollection';

export default function* (a, l, h, updateP) {
  let piv = a[h];
  let i = l - 1;

  for(let j = l; j < h - 1; j++) {
      if(a[j] <= piv) {
          i += 1;
          [a[i], a[j]] = [a[j], a[i]];
          yield new LineCollection(a);
      }
  }

  [a[i + 1], a[h]] = [a[h], a[i + 1]]

  updateP(i + 1);
}