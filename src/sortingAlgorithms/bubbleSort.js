export default (array, capture) => {
  if (!capture) capture = () => { };

  for (let t = 0; t < array.length - 1; t++) {
    let swapCount = 0;
    for (let i = 0; i < array.length - 1; i++) {
      let p1 = array[i];
      let p2 = array[i + 1];

      if (p1.height > p2.height) {
        array[i] = p2;
        array[i + 1] = p1;
        swapCount++;
      }

      capture(array.slice(), [p1, p2])

    }
    if (!swapCount) break;
  }

  return array;
}

//3,2,1
//2,3,1
//2,1,3
//1,2,3