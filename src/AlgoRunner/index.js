import store from '../redux/store';
import { updateLineCollectionAction } from '../redux/actionCreators';
import * as ALGOS from '../sortingAlgorithms';
import delay from 'lodash/delay';

export default class AlgoRunner {
  constructor(algoToRun, done) {
    this.lineCollection = store.getState().lineCollection;
    this.algo = ALGOS[algoToRun](this.lineCollection, 0, this.lineCollection.length - 1);
    this.snapshot = this.algo.next();
    this.unsubscribe = store.subscribe(() => {})
    this.done = done;
  }

  run() {
    this._startCycle();
  }

  _startCycle() {
    if (!this.snapshot.done) {
      store.dispatch(updateLineCollectionAction(this.snapshot.value));
      this.snapshot = this.algo.next();
      delay(this._continueCyle.bind(this), 0);
    } else {
      this.done();
      this.unsubscribe();
    }
  }

  _continueCyle() {
    this._startCycle();
  }
}