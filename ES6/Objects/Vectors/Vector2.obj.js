class Vector2 extends Point {
  /**
   * Set the x and y for the Vector2.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} x Set the x property
   * @param {number} y Set the y property
   */
  constructor(x, y) {
    super(x, y);
  }

  /**
   * Calculates the magnitude of the Vector2.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @return {number}
   */
  Magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Returns the Angle of the Vector2.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @return {number}
   */
  Angle() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Gives the ScalarMultiplication of this Vector2.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} scalar Give the scalar.
   * @return {object}
   */
  ScalarMultiplication(scalar) {
    let ans = new Vector2(scalar * this.x, scalar * this.y);
    return ans;
  }

  /**
   * Add 2 Vector2s.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {object} vector2 Give a vector2.
   * @return {object}
   */
  Add(vector2) {
    let ans = new Vector2(this.x + vector2.x, this.y + Vector2.y);
    return ans;
  }

  /**
   * Substract 2 vector2s.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {object} vector2 Give a vector2.
   * @return {object}
   */
  Substract(vector2) {
    let ans = new Vector2(this.x - vector2.x, this.y - Vector2.y);
    return ans;
  }

  /**
   * Normalize the vector2.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @return {object}
   */
  Normalize() {
    let magnitude = this.Magnitude();
    this.x = this.x / magnitude;
    this.y = this.y / magnitude;
  }
}
