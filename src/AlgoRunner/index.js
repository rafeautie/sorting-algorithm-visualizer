import store from '../redux/store';
import { 
  updateLineCollectionAction,
} from '../redux/actionCreators';
import * as ALGOS from '../sortingAlgorithms';
import delay from 'lodash/delay';

export default class AlgoRunner {
  constructor(algoToRun, done) {
    this.lineCollection = store.getState().lineCollection;
    this.speed = store.getState().speed
    this.algo = ALGOS[algoToRun](this.lineCollection, 0, this.lineCollection.length - 1);
    this.snapshot = this.algo.next();
    this.done = done;
    this.didForceStop = false;

    this.unsubscribe = store.subscribe(() => {
      let state = store.getState();
      this.speed = 1000 - (state.speed / 10 * 100);
      this.didForceStop = state.didForceStop;
    })
  }

  run() {
    this._startCycle();
  }

  _startCycle() {
    if (!this.didForceStop && !this.snapshot.done) {
      store.dispatch(updateLineCollectionAction(this.snapshot.value));
      this.snapshot = this.algo.next();
      delay(this._continueCyle.bind(this), this.speed);
    } else {
      this.done();
      this.unsubscribe();
    }
  }

  _continueCyle() {
    this._startCycle();
  }
}