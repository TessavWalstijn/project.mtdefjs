class Matrix {
  constructor(rows, cols) {
    this._rows = rows;
    this._cols = cols;
    this._matrix = [];

    for (let i = 0; i < this._rows; i++) {
      this._matrix[i] = [];
      for (let j = 0; j < this._cols; j++) {
        this._matrix[i][j] = 0;
      }
    }
  }

  get rows() {
    return this._rows;
  }

  get cols() {
    return this._cols;
  }

  get matrix() {
    return this._matrix;
  }

  set matrix(matrix) {
    this._matrix = matrix;
  }

  /**
   * Generates a random matrix between 0 and 1.
   * @method Randomize
   */
  /**
   * Generates a random matrix between requested values.
   * @method Randomize
   * @param  {number} min Minimum of the random number.
   * @param  {number} max Maximum of the random number.
   */
  Randomize(min, max) {
    if (min === undefined || max === undefined)
      for (let i = 0; i < this.rows; i++)
        for (let j = 0; j < this.cols; j++)
          this.matrix[i][j] = MTDEF.Math.Random();
    else
      for (let i = 0; i < this.rows; i++)
        for (let j = 0; j < this.cols; j++)
          this.matrix[i][j] = MTDEF.Math.Random(min, max);
  }

  Floor() {
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++)
        this.matrix[i][j] = Math.floor(this.matrix[i][j]);
  }

  /**
   * Add a matrix to this matrix.
   * @method Add
   * @param  {Matrix} n Matrix to add.
   * @return {Matrix}   Total of added matrices
   */
  /**
   * Add a number to all matrix values.
   * @method Add
   * @param  {number} n Number to add.
   * @return {Matrix}   Total of added number to matrix.
   */
  Add(n) {
    const result = this;
    if (n instanceof Matrix) {
      if (this.rows == n.rows && this.cols == n.cols)
        for (let i = 0; i < this.rows; i++)
          for (let j = 0; j < this.cols; j++)
            result.matrix[i][j] += n.matrix[i][j];
      else return "Invalid Matrix";
    } else
      for (let i = 0; i < this.rows; i++)
        for (let j = 0; j < this.cols; j++) result.matrix[i][j] += n;
    return result;
  }

  /**
   * Subtract a matrix to this matrix.
   * @method Sub
   * @param  {Matrix} n Matrix to subtract.
   * @return {Matrix}   Total of subtracted matrices
   */
  /**
   * Subtract a number to all matrix values.
   * @method Sub
   * @param  {number} n Number to subtract.
   * @return {Matrix}   Total of subtracted number to matrix.
   */
  Sub(n) {
    const result = this;
    if (n instanceof Matrix) {
      if (this.rows == n.rows && this.cols == n.cols)
        for (let i = 0; i < this.rows; i++)
          for (let j = 0; j < this.cols; j++)
            result.matrix[i][j] -= n.matrix[i][j];
      else return "Invalid Matrix";
    } else
      for (let i = 0; i < this.rows; i++)
        for (let j = 0; j < this.cols; j++) result.matrix[i][j] -= n;
    return result;
  }

  /**
   * Multiply a number to all matrix values.
   * @method Multiply
   * @param  {Matrix} n Matrix to multiply.
   * @return {Matrix}   Matrix product.
   */
  /**
   * Multiply a number to all matrix values.
   * @method Multiply
   * @param  {number} n Number to multiply.
   * @return {Matrix}   Scalar product.
   */
  Multiply(n) {
    if (n instanceof Matrix) {
      // Matrix product
      if (this.cols === n.rows) {
        const result = new Matrix(this.rows, n.cols);
        for (let i = 0; i < result.rows; i++)
          for (let j = 0; j < result.cols; j++) {
            let sum = 0;
            for (let k = 0; k < this.cols; k++) {
              sum += this.matrix[i][k] * n.matrix[k][j];
            }
            result.matrix[i][j] = sum;
          }
        return result;
      } else return "Invalid Matrix";
    } else {
      // Scalar product
      const result = this;
      for (let i = 0; i < this.rows; i++)
        for (let j = 0; j < this.cols; j++) result.matrix[i][j] *= n;
      return result;
    }
  }

  Transpose() {
    const result = new Matrix(this.cols, this.rows);
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.cols; j++)
        result.matrix[j][i] = this.matrix[i][j];
    return result;
  }
}
