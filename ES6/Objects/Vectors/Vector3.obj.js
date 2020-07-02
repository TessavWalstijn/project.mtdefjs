class Vector3 extends Point {
  /**
   * Set the x, y and z for the Vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} x Set the x property
   * @param {number} y Set the y property
   * @param {number} z Set the z property
   */
  constructor(x, y, z) {
    super(x, y, z);
  }

  /**
   * Calculates the magnitude of the Vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @return {number}
   */
  Magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  /**
   * Returns the Angle of the Vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {string} a Give the name x, y or z this default is x
   * @param {string} b Give the name x, y or z this default is y
   * @return {number}
   */
  Angle(a, b) {
    let i, j;
    switch (a) {
      case "x":
      default:
        i = this.x;
        break;
      case "y":
        i = this.y;
        break;
      case "z":
        i = this.z;
        break;
    }
    switch (b) {
      case "x":
        j = this.x;
        break;
      case "y":
      default:
        j = this.y;
        break;
      case "z":
        j = this.z;
        break;
    }
    return Math.atan2(i, j);
  }

  /**
   * Gives the ScalarMultiplication of this Vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} scalar Give the scalar.
   * @return {object}
   */
  ScalarMultiplication(scalar) {
    let ans = new Vector3(scalar * this.x, scalar * this.y, scalar * this.z);
    return ans;
  }

  /**
   * Add 2 Vector3s.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {object} vector3 Give a vector3.
   * @return {object}
   */
  Add(vector3) {
    let ans = new Vector3(
      this.x + vector3.x,
      this.y + vector3.y,
      this.z + vector3.z
    );
    return ans;
  }

  /**
   * Substract 2 vector3s.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {object} vector3 Give a vector3.
   * @return {object}
   */
  Substract(vector3) {
    let ans = new Vector3(
      this.x - vector3.x,
      this.y - vector3.y,
      this.z - vector3.z
    );
    return ans;
  }

  /**
   * Normalize the vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @return {object}
   */
  Normalize() {
    let magnitude = this.Magnitude();
    this.x = this.x / magnitude;
    this.y = this.y / magnitude;
    this.z = this.z / magnitude;
  }

  /**
   * Rotate the x. Returns vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} angle Give the rotation angle.
   * @return {object}
   */
  RotateX(angle) {
    let rad, cosa, sina, y, z;
    rad = angle * Math.PI / 180;
    cosa = Math.cos(rad);
    sina = Math.sin(rad);
    y = this.y * cosa - this.z * sina;
    z = this.y * sina + this.z * cosa;
    return new Vector3(this.x, y, z);
  }

  /**
   * Rotate the y. Returns vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} angle Give the rotation angle.
   * @return {object}
   */
  RotateY(angle) {
    let rad, cosa, sina, x, z;
    rad = angle * Math.PI / 180;
    cosa = Math.cos(rad);
    sina = Math.sin(rad);
    z = this.z * cosa - this.x * sina;
    x = this.z * sina + this.x * cosa;
    return new Vector3(x, this.y, z);
  }

  /**
   * Rotate the z. Returns vector3.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} angle Give the rotation angle.
   * @return {object}
   */
  RotateZ(angle) {
    let rad, cosa, sina, x, y;
    rad = angle * Math.PI / 180;
    cosa = Math.cos(rad);
    sina = Math.sin(rad);
    x = this.x * cosa - this.y * sina;
    y = this.x * sina + this.y * cosa;
    return new Vector3(x, y, this.z);
  }

  /**
   * Project the vector in a 3d surrounding.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} viewWidth Give the view width.
   * @param {number} viewHeight Give the view height.
   * @param {number} fov Give the Field Of View.
   * @param {number} viewDistance Give the vieuw distance.
   * @return {object}
   */
  Project(viewWidth, viewHeight, fov, viewDistance) {
    let factor, x, y;
    factor = fov / (viewDistance + this.z);
    x = this.x * factor + viewWidth / 2;
    y = this.y * factor + viewHeight / 2;
    return new Vector3(x, y, this.z);
  }
}
