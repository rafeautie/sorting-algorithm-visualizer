import LineCollection from '../LineCollection';

export default function* (a) {
  let len = a.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (a[j].height < a[min].height) min = j;
    }
    
    [a[i], a[min]] = [a[min], a[i]];
    yield new LineCollection(a);
  }
}
