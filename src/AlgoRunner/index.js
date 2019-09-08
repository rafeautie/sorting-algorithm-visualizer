import * as ALGOS from '../sortingAlgorithms';
import delay from 'lodash/delay';

export default class AlgoRunner {
  constructor(lineCollection, algoToRun, setState) {
    this.lineCollection = lineCollection;
    this.algo = ALGOS[algoToRun](this.lineCollection, 0, lineCollection.length - 1);
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
      delay(this._continueCyle.bind(this), 0);
    }
  }

  _continueCyle() {
    this._startCycle();
  }
}