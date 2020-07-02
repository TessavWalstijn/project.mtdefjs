class Aspect {
  /**
   * @param {string} aspectRatio Give the aspect ratio like: "16:9"
   */
  constructor(aspectRatio) {
    const AS = String(aspectRatio.toLocaleLowerCase());
    this._staticWidth = -1;
    this._staticHeight = -1;
    this._size = new Size(0, 0);
    if (AS.indexOf("full") !== -1) {
      this._aspectRatio = "fullscreen";
    } else {
      const stringSplit = aspectRatio.split(":");
      this._aspectRatio = aspectRatio;
      this._staticWidth = stringSplit[0];
      this._staticHeight = stringSplit[1];
    }
  }

  get aspectRatio() {
    return this._aspectRatio;
  }

  get pos() {
    return this._position;
  }

  get size() {
    return this._size;
  }

  Update() {
    const size = MTDEF.Window.size;
    const width = size.width,
      height = size.height;
    if (this._aspectRatio == "fullscreen") {
      this._size = size;
    } else {
      if (width / this._staticWidth > height / this._staticHeight) {
        this._size = new Size(
          height / this._staticHeight * this._staticWidth,
          height
        );
      } else {
        this._size = new Size(
          width,
          width / this._staticWidth * this._staticHeight
        );
      }
    }
    const x = width / 2 - this._size.width / 2,
      y = height / 2 - this._size.height / 2;

    this._position = new Point(x, y);
  }
}
