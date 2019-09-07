import {
  bubbleSort,
  // mergeSort,
} from './index';

describe('Bubble Sort', () => {
  it('should sort an array', () => {
    let shuffled = [
      { height: 1 },
      { height: 0 },
      { height: 2 },
      { height: 5 },
      { height: 8 },
      { height: 7 },
      { height: 4 },
      { height: 3 },
      { height: 9 },
      { height: 6 },
    ]

    let expected = [
      { height: 0 },
      { height: 1 },
      { height: 2 },
      { height: 3 },
      { height: 4 },
      { height: 5 },
      { height: 6 },
      { height: 7 },
      { height: 8 },
      { height: 9 },
    ]

    expect(bubbleSort(shuffled)).toEqual(expected);
  })
})

describe('Merge Sort', () => {
  it('should sort an array', () => {
    let shuffled = [
      { height: 1 },
      { height: 0 },
      { height: 2 },
      { height: 5 },
      { height: 8 },
      { height: 7 },
      { height: 4 },
      { height: 3 },
      { height: 9 },
      { height: 6 },
    ]

    let expected = [
      { height: 0 },
      { height: 1 },
      { height: 2 },
      { height: 3 },
      { height: 4 },
      { height: 5 },
      { height: 6 },
      { height: 7 },
      { height: 8 },
      { height: 9 },
    ]

    expect(mergeSort(shuffled)).toEqual(expected);
  })
})