export default function* heapify(a, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && a[l].height > a[largest].height) {
    largest = l;
  }

  if (r < n && a[r].height > a[largest].height) {
    largest = r;
  }

  if (largest !== i) {
    [a[largest], a[i]] = [a[i], a[largest]];
    yield* heapify(a, n, largest);
  }
}