import * as ALGOS from '../sortingAlgorithms';

export default class AlgoRunner {
  constructor(lineCollection, algoToRun, setState) {
    this.lineCollection = lineCollection;
    this.algo = ALGOS[algoToRun](lineCollection);
    this.setState = setState;
    this.snapshot = this.algo.next();
  }

  run() {
    this._startCycle();
  }

  _startCycle() {
    if (!this.snapshot.done) {
      this.setState(this.snapshot.value);
      this.snapshot = this.algo.next();
      setTimeout(this._continueCyle.bind(this), 1);
    }
  }

  _continueCyle() {
    this._startCycle();
  }
}