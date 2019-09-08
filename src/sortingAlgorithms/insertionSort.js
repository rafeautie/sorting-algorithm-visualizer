import LineCollection from '../LineCollection';

export default function* (arr) {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    while (idx > 0 && arr[idx].height < arr[idx - 1].height) {
      let lineBeforeCurrent = arr[idx - 1];
      arr[idx - 1] = arr[idx];
      arr[idx] = lineBeforeCurrent;
      yield new LineCollection(arr);
      idx--
    }
  }
}