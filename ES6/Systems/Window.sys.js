/**
 * Keeps track of the window info.
 * @author TessavWalstijn.GitHub: https://github.com/TessavWalstijn
 */

class Window extends System {
  constructor() {
    super();
    this.runTime = -1;
    this.deltaTime = 0;
    this._center = new Point(0, 0);
    this._size = new Size(-1, -1);
    this._open = false;
  }

  get size() {
    if (this._open) return this._size;
    else return new Size(-1, -1);
  }

  get center() {
    if (this._open) return this._center;
    else return new Point(-1, -1);
  }

  /**
   * Stores variables for Update or Execute function
   * @author TessavWalstijn.GitHub: https://github.com/TessavWalstijn
   * @param {number} time The runtime of the window.
   */
  Store(time) {
    this._time = time;
  }

  /**
   * Updates the window stats.
   * @author TessavWalstijn.GitHub: https://github.com/TessavWalstijn
   */
  Update() {
    this._open = true;
    if (this.runTime === -1) this.deltaTime = this._time;
    else
      //Calulates Elapsed time from last call
      this.deltaTime = this._time - this.runTime;

    this.runTime = this._time;

    // Get the width of the window
    this._width = window.innerWidth;
    // Get the height of the window
    this._height = window.innerHeight;

    this._size = new Size(this._width, this._height);

    // The center of the window
    this._center = new Point(this._width / 2, this._height / 2);
    // The calculation of the width and height.
    this.fraction = this._width * 0.1;
    this.bFraction = this.fraction * 100;
    this.tFraction = this.fraction * 0.01;
  }

  Execute() {
    this._open = false;
  }
}
