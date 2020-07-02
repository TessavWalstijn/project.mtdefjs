class Vector extends Point {
  constructor() {
    super(arguments);
  }

  AddVector(point) {
    if (point instanceof Point) {
      this._x += point._x;
      this._y += point._y;
      if (this._type > 2 && point._type > 2) this._z += point._z;
    }
  }

  SubVector(point) {
    if (point instanceof Point) {
      this._x -= point._x;
      this._y -= point._y;
      if (this._type > 2 && point._type > 2) this._z -= point._z;
    }
  }

  SetVector() {}

  Multy(value) {
    this.x *= value;
    this.y *= value;
  }
}
