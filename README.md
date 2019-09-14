# Sorting Algorithm Visualizer
Built with [React](http://reactjs.org), [Redux](http://redux.js.org) and [P5](https://p5js.org/).

#### Table of Contents
1. [LineCollection](#LineCollection)
1. [AlgoRunner](#AlgoRunner)
1. [Sorting Algorithms](#SortingAlgorithms)


## How stuff works?

### LineCollection

The [LineCollection Class](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/index.js) is an extension of the built-in [Array Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). It adds methods that are vital to the functionality of the app.

[Source](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/index.js)

### Public Methods:
#### shuffle()
Shuffles `this` (the instance of the LineCollection).
```javascript
LineCollection.shuffle()
```

---
#### calcColor()
Generates rgb value based on `i`.
```javascript
LineCollection.calcColor()
```

### Private Methods:
#### _generateCollection()
Generates collection of [Line Objects](#Line).
```javascript
LineCollection._generateCollection()
```
###### *Invoked in constructor when integer is passed in.*

#### _updateShuffleIdx()
Iterates over `this` and updates the shuffledIdx property of each [Line](#Line).
```javascript
LineCollection._updateShuffleIdx()
```
###### *Invoked in constructor when Array or LineCollection is passed in.*

---

### Line
The **Line Class** represents a single line.

See [source](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/Line.js).

### Public Methods:
#### recalculate(i)
Recalculates the height, width, x and y properties of `this` (instance of Line).
```javascript
Line.recalculate(i)
```

#### mark()
Sets the `Line.isComparing` property to `true`. When `Line.isComparing === true` the line will render yellow. You must unmark the line to revert it to its original color.
```javascript
Line.mark()
```

#### unmark()
Sets the `Line.isComparing` property to `false`. When `Line.isComparing === false` the line will render its original color.
```javascript
Line.unmark()
```

---
### AlgoRunner

### SortingAlgorithms
---

> ## F.A.Q
>__Q: Why did you make this?__\
__A__: I want to gain a deeper understanding of sorting algorithms. This project made it fun.\
\
>__Q: How many algorithms are you going to implement?__\
>__A__: I'm aiming for all of [these](https://www.bigocheatsheet.com/#sorting).