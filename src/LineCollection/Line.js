export default class Line {
  constructor(x, y, w, h, c, n, i) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.numberOfLines = n;
    this._previousCanvasHeight = window.innerHeight - 75;
    this.i = i;
    this.shuffledIdx = null;
  }

  recalculate(i) {
    this.height = (window.innerHeight - 75) / this.numberOfLines * (this.i + 1);
    this.width = window.innerWidth / this.numberOfLines;
    this.x = this.width * i;
    this.y = (window.innerHeight - 75) - this.height;
  }
}