import shuffle from 'lodash/shuffle';

import {
  bubbleSort,
  insertionSort,
  mergeSort,
} from './index';

describe('Bubble Sort', () => {
  let expected = new Array(10).fill().map((_, idx) => {
    return {
      height: idx,
      shuffledIdx: idx
    }
  });

  let shuffled = shuffle(expected);

  let gen = bubbleSort(shuffled);
  let isDone = false;

  while (!isDone) {
    isDone = gen.next().done;
  }

  it('should sort an array', () => {
    expect(shuffled).toEqual(expected);
  })
})

describe('Merge Sort', () => {
  let expected = new Array(10).fill().map((_, idx) => {
    return {
      height: idx,
      shuffledIdx: idx
    }
  });

  let shuffled = shuffle(expected);

  let gen = mergeSort(shuffled, 0, expected.length - 1);
  let isDone = false;

  while (!isDone) {
    isDone = gen.next().done;
  }

  it('should sort an array', () => {
    expect(shuffled).toEqual(expected);
  })
})

describe('Insertion Sort', () => {
  let expected = new Array(10).fill().map((_, idx) => {
    return {
      height: idx,
      shuffledIdx: idx
    }
  });

  let shuffled = shuffle(expected);

  let gen = insertionSort(shuffled);
  let isDone = false;

  while (!isDone) {
    isDone = gen.next().done;
  }

  it('should sort an array', () => {
    expect(shuffled).toEqual(expected);
  })
})