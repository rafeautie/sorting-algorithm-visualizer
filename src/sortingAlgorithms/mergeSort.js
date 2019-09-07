import LineCollection from "../LineCollection";

const mergeSort = function* (a) {
  if (a.length === 1) return a;

  let mid = Math.ceil(a.length - 1 / 2);
  //every merge rebuild the original array with diffs
  yield merge(mergeSort(a.slice(0, mid)), mergeSort(a.slice(mid)));

  mergeSort(a);
}

const merge = (a, b) => {
  let newCollection = new LineCollection();
  let i = 0;

  while (i < a.length && i < b.length) {
    if (a[i].height < b[i].height) {
      newCollection.push(a.shift());
    } else {
      newCollection.push(b.shift());
    }
    i++;
  }

  while (a.length) {
    newCollection.push(a.shift());
  }

  while (b.length) {
    newCollection.push(b.shift());
  }

  return newCollection;
}

//Capture merge, and bt.
const capture = () => {

}

//Rebuild original array and include changes
const rebuild = (ogArray, newArray) => {
  //compare lengths
    //if lengths are equal, return newArray (should be sorted at this point)
  //else
    //
}

const deepDiff = () => {

}

export default mergeSort;

//1,2,3,4,5
// 1,2,3              4,5
//1    2,3          4     5
//    2   3
