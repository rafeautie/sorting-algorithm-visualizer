# Sorting Algorithm Visualizer
Built with [React](http://reactjs.org), [Redux](http://redux.js.org) and [P5](https://p5js.org/).

#### Table of Contents
1. [LineCollection](#LineCollection)
1. [AlgoRunner](#AlgoRunner)
1. [Sorting Algorithms](#SortingAlgorithms)


## How stuff works?

## LineCollection

The [LineCollection Class](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/index.js) is an extension of the built-in [Array Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). It adds methods that are vital to the functionality of the app.

See [Source](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/index.js).

### Methods:

#### shuffle()
Shuffles `this` (the instance of the LineCollection).
```javascript
LineCollection.shuffle()
```

#### calcColor()
Generates rgb value based on `i`.
```javascript
LineCollection.calcColor()
```

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

## Line
The **Line Class** represents a single line.

See [source](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/LineCollection/Line.js).

### Methods:
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
## AlgoRunner

The [AlgoRunner Class](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/AlgoRunner/index.js) is the mechanism that runs the sorting algorithm. It implements a "lazy sort" system ([more](#Lazy-Sort) on that later). It allows you to control the speed that the given sorting algorithm runs at.

See [source](https://github.com/rafeautie/sorting-algorithm-visualizer/blob/master/src/AlgoRunner/index.js).

### Lazy Sort
First, let me explain a key piece of how the sorting algorithms are implemented[*](#Requirements). Every sorting algorithm is implemented using Generator functions. Before I explain why, I will explain what lead me to this implementation. The original implementation would perform the sort and collect slices of the sorting proccess to later be rerendered. This, all before a single rerender occurred. The queued up slices would then be dequeued at an adjustable rate. This is where the rerendering would begin. This worked well for small collections but once the size increased it would appear to the user that the application was frozen. This was not acceptable.

*Generator functions save the day!* In short, a Generator is a function you can pause and come back to at anytime. This allowed me to implement a lazy sorting mechanism.

#### The process:
1. Get generator.[^1]
1. Initial `next()` call to retrieve first slice to be rerenderd.[^1]
1. Subscribe to redux store to listen for speed changes.[^1]
1. Dispatch new slice to redux store. **This kicks off the render.**
1. Subsequent next invokation to retrieve next slice of the sort. **To be rerendered.**
1. Invoke `_continueCycle()` with delay of `this.speed`.
1. Rinse and repeat.

### Methods
#### run()
Kicks off sorting cycle.
```javascript
AlgoRunner.run()
```

#### _startCycle()
Dispatches current slice, retrieves next slice and invokes `this._continueCycle()` with a delay.
```javascript
AlgoRunner._startCycle()
```
###### *Should always be invoked with delay.*

#### _continueCyle()
Invokes `this._startCycle()`.
```javascript
AlgoRunner._continueCyle()
```

---
## SortingAlgorithms

### Requirements:
- Every algorithm must be a [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
    - Every [yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield) value must be a `new LineCollection()`. **P5 will rerender using yielded value.**
    - Recursive algorithms may use [yield*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*).
    - Helper functions that perform swaps must also be [Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) that yield `new LineCollections()`.
---

> ## F.A.Q
>__Q: Why did you make this?__\
__A__: I wanted to gain a deeper understanding of sorting algorithms. This project made it fun.\
\
>__Q: How many algorithms are you going to implement?__\
>__A__: I'm aiming for all of [these](https://www.bigocheatsheet.com/#sorting).

---

[^1]: This step only occurs in the constructor.
