import LineCollection from '../LineCollection';

export default function*(array, capture) {
  if (!capture) capture = () => { };

  for (let t = 0; t < array.length - 1; t++) {
    let swapCount = 0;
    for (let i = 0; i < array.length - 1; i++) {
      let p1 = array[i];
      let p2 = array[i + 1];

      p1.mark(true);
      p2.mark(true);

      yield new LineCollection(array);

      if (p1.height > p2.height) {
        array[i] = p2;
        array[i + 1] = p1;
        swapCount++;
      }

      yield new LineCollection(array);

      p1.mark(false);
      p2.mark(false);
    }
    if (!swapCount) break;
  }

  return array;
}