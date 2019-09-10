const shuffle = require('lodash/shuffle');

const { bubbleSort, mergeSort, insertionSort } = require('./index');
// const bubbleSort = require('./bubbleSort.js');
// const mergeSort = require('./mergeSort.js');
// const insertionSort = require('./insertionSort.js');

jest.mock('../LineCollection', () => {
  return jest.fn().mockImplementation((arr) => {
    return {};
  })
});

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

  let gen = mergeSort(shuffled);
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