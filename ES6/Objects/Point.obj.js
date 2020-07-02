class Point {
  constructor() {
    if (arguments.length > 1) {
      if (arguments.length >= 2) {
        this._x = arguments[0];
        this._rx = arguments[0];
        this._y = arguments[1];
        this._ry = arguments[1];
        this._type = 2;
      }
      if (arguments.length >= 3) {
        this._z = arguments[2];
        this._rz = arguments[2];
        this._type = 3;
      }
    } else {
      console.error("To less arguments! \n Give at least 2 aruments");
    }
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get z() {
    if (this._type == 3) return this._z;
    else return undefined;
  }

  get type() {
    return this._type;
  }

  Clone() {
    return this;
  }

  Reset() {
    if (this._type >= 2) {
      this._x = this._rx;
      this._y = this._ry;
    }
    if (this._type >= 3) {
      this._z = this._rz;
    }
  }
}
