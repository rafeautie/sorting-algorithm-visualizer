export default class Line {
  constructor(x, y, w, h, c, n, i) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.numberOfLines = n;
    this._previousCanvasHeight = window.innerHeight;
    this.i = i;
    this.shuffledIdx = null;
    this.isComparing = false;
  }

  recalculate(i) {
    this.height = (window.innerHeight) / this.numberOfLines * (this.i + 1);
    this.width = window.innerWidth / this.numberOfLines;
    this.x = this.width * i;
    this.y = (window.innerHeight) - this.height;
  }

  mark() {
    this.isComparing = true;
  }

  unmark() {
    this.isComparing = false;
  }
}