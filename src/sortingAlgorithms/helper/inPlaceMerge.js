import LineCollection from '../../LineCollection';

export default function* (arr, start, mid, end,) {
  let start2 = mid + 1;

  // If the direct merge is already sorted 
  if (arr[mid].height <= arr[start2].height) {
    yield arr;
  }

  // Two pointers to maintain start 
  // of both arrays to merge 
  while (start <= mid && start2 <= end) {
    
    // If element 1 is in right place 
    if (arr[start].height <= arr[start2].height) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;
      
      // Shift all the elements between element 1 
      // element 2, right by 1. 
      while (index !== start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;

      // Update all the pointers 
      start++;
      mid++;
      start2++;
      yield new LineCollection(arr);
    }
  }
} 
