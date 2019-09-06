import * as ALGOS from '../sortingAlgorithms';

export default class AlgoRunner {
  constructor(lineCollection, algoToRun, setState) {
    this.lineCollection = lineCollection;
    this.algo = ALGOS[algoToRun];
    this.setState = setState;
    this.snapshots = [];
    this.capture = this.capture.bind(this);
  }

  run() {
    this.algo(this.lineCollection, this.capture);
    this._startCycle();
    return this;
  }

  capture(collectionSnapshot) {
    //mark "p1" and "p2" in "collectionSnapshot" as swapping
    this.snapshots.push(collectionSnapshot);
  }

  _startCycle() {
    if (this.snapshots.length) {
      this.setState(this.snapshots.shift());
      setTimeout(this._continueCyle.bind(this), .1);
    }
  }

  _continueCyle() {
    this._startCycle();
  }
}