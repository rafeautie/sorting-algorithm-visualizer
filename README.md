# Sorting Algorithm Visualizer
Built with [React](http://reactjs.org), [Redux](http://redux.js.org) and [P5](https://p5js.org/).

#### Table of Contents
1. [LineCollection](#LineCollection)
1. [AlgoRunner](#AlgoRunner)
1. [Sorting Algorithms](#SortingAlgorithms)


## How does it work?

### LineCollection

The [LineCollection Class](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/index.js) is an extension of the built-in [Array Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). It adds methods that are vital to the funcationality of the app.

### Public Methods:
#### Shuffle
`LineCollection.shuffle()`\
Shuffles `this` (the instance of the LineCollection).

`LineCollection.calcColor()`\
Generates rgb value based on `i`.

#### Private Methods:
`LineCollection._generateCollection()`\
Generates collection of [Line Objects](#Line).\
*Invoked in constructor when integer is passed in.*

`LineCollection._updateShuffleIdx()`\
Iterates over `this` and updates the shuffledIdx property of each [Line](#Line).\
*Invoked in constructor when Array or LineCollection is passed in.*


[Source for LineCollection](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/index.js)

### Line

### AlgoRunner

### SortingAlgorithms
---

> ## F.A.Q
>__Q: Why did you make this?__\
__A__: I want to gain a deeper understanding of sorting algorithms. This project made it fun.\
\
>__Q: How many algorithms are you going to implement?__\
>__A__: I'm aiming for all of [these](https://www.bigocheatsheet.com/#sorting).