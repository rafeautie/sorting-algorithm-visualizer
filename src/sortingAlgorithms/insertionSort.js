import LineCollection from '../LineCollection';

export default function* (arr) {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    while (idx > 0 && arr[idx].height < arr[idx - 1].height) {
      let p1 = arr[idx - 1];
      let p2 = arr[idx];

      p1.mark(true);
      p2.mark(true);
      
      yield new LineCollection(arr);

      arr[idx - 1] = p2;
      arr[idx] = p1;
      
      yield new LineCollection(arr);
      
      p1.mark(false);
      p2.mark(false);

      idx--
    }
  }
  //Finall yield used to clear last marked lines
  yield new LineCollection(arr);
}