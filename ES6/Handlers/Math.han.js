const MATH = {
  /**
   * Constrains a value between a minimum and maximum value.
   * @method Constrain
   * @param  {number} n   Number to constrain.
   * @param  {number} min Minimum limit.
   * @param  {number} max Maximum limit.
   * @return {number}     Constrained number.
   */
  Constrain(n, min, max) {
    // Code from p5.js
    // https://github.com/processing/p5.js/blob/590950cbe5be4eb62cdcc4379ee006f60a10c34e/src/math/calculation.js#L116
    return Math.max(Math.min(n, max), min);
  },

  /**
   * Calculates the distance between two points.
   * @method Dist
   * @param  {point}  p1 First point.
   * @param  {point}  p2 Secpnd point.
   * @return {number}    Distance between the two points.
   */
  /**
   * Calculates the distance between two points.
   * @method Dist
   * @param  {number} x1 X-coordinate of the first point.
   * @param  {number} y1 Y-coordinate of the first point.
   * @param  {number} x2 X-coordinate of the second point.
   * @param  {number} y2 Y-coordinate of the second point.
   * @return {number}    Distance between the two points.
   */
  /**
   * Calculates the distance between two points.
   * @method Dist
   * @param  {number} x1 X-coordinate of the first point.
   * @param  {number} y1 Y-coordinate of the first point.
   * @param  {Number} z1 Z-coordinate of the first point.
   * @param  {number} x2 X-coordinate of the second point.
   * @param  {number} y2 Y-coordinate of the second point.
   * @param  {Number} z2 Z-coordinate of the second point.
   * @return {Number}    Distance between the two points.
   */
  Dist() {
    switch (arguments.length) {
      case 2:
        // Points
        if (arguments[0].type == 2 && arguments[1].type == 2) {
          // 2D
          return this.Hypot(
            arguments[1].x - arguments[0].x,
            arguments[1].y - arguments[0].y
          );
        } else if (arguments[0].type == 3 && arguments[1].type == 3) {
          // 3D
          return this.Hypot(
            arguments[1].x - arguments[0].x,
            arguments[1].y - arguments[0].y,
            arguments[1].z - arguments[0].z
          );
        } else return "Points not the same type!";

      // cases 4 and 6 from p5.js
      // https://github.com/processing/p5.js/blob/590950cbe5be4eb62cdcc4379ee006f60a10c34e/src/math/calculation.js#L175
      case 4:
        // 2D
        return this.Hypot(
          arguments[2] - arguments[0],
          arguments[3] - arguments[1]
        );
      case 6:
        // 3D
        return this.Hypot(
          arguments[3] - arguments[0],
          arguments[4] - arguments[1],
          arguments[5] - arguments[2]
        );
    }
  },

  /**
   * Linear Interpolation (smooths out a value).
   * @method Lerp
   * @param  {number} start First value.
   * @param  {number} stop  Second value.
   * @param  {number} amt   Number between 0.0 and 1.0
   * @return {number}       Lerped value.
   */
  Lerp(start, stop, amt) {
    return amt * (stop - start) + start;
  },

  /**
   * Re-maps a number from one range to another.
   * @method Map
   * @param  {number}  n            The incoming value to be converted
   * @param  {number}  min1         Lowest bound of the value's current range
   * @param  {number}  max1         Highest bound of the value's current range
   * @param  {number}  min2         Lowest bound of the value's target range
   * @param  {number}  max2         Highest bound of the value's target range
   * @param  {boolean} withinBounds Constrain the value to the newly mapped range
   * @return {number}               Remapped number
   */
  Map(n, min1, max1, min2, max2, withinBounds = false) {
    // Code from p5.js
    // https://github.com/processing/p5.js/blob/590950cbe5be4eb62cdcc4379ee006f60a10c34e/src/math/calculation.js#L425
    let ans = (n - min1) / (max1 - min1) * (max2 - min2) + min2;
    if (!withinBounds) {
      return ans;
    }
    if (min2 < max2) {
      return this.Constrain(ans, min2, max2);
    } else {
      return this.Constrain(ans, max2, min2);
    }
  },

  /**
   * Returns the largest value in a sequence of numbers.
   * @method Max
   * @param  {array} nums Numbers to compare.
   * @return {number}     Maximum number
   */
  /**
   * Returns the largest value in a sequence of numbers.
   * @method Max
   * @param  {number} n0  Number to compare.
   * @param  {number} n1  Number to compare.
   * @param  {number} n2  Number to compare.
   * @return {number}     Maximum number
   */
  Max() {
    // Code from p5.js
    // https://github.com/processing/p5.js/blob/590950cbe5be4eb62cdcc4379ee006f60a10c34e/src/math/calculation.js#L515
    if (arguments[0] instanceof Array) {
      return Math.max.apply(null, arguments[0]);
    } else {
      return Math.max.apply(null, arguments);
    }
  },

  /**
   * Returns the smallest value in a sequence of numbers.
   * @method Min
   * @param  {array} nums Numbers to compare.
   * @return {number}     Minimum number
   */
  /**
   * Returns the smallest value in a sequence of numbers.
   * @method Min
   * @param  {number} n0  Number to compare.
   * @param  {number} n1  Number to compare.
   * @param  {number} n2  Number to compare.
   * @return {number}     Minimum number
   */
  Min() {
    if (arguments[0] instanceof Array) {
      return Math.min.apply(null, arguments[0]);
    } else {
      return Math.min.apply(null, arguments);
    }
  },

  /**
   * Normalizes a number from another range into a value between 0 and 1.
   * @method Norm
   * @param  {number} n     The incoming value to be converted.
   * @param  {number} start The lowest bound of the value's current range.
   * @param  {number} stop  Tho highest bound of the value's current range.
   * @return {number}       Returns the value normalized
   */
  Norm(n, start, stop) {
    return this.Map(n, start, stop, 0, 1);
  },

  /**
   * Generates a random number.
   * @method Random
   * @return {number} Random number between 0 and 1.
   */
  /**
   * Generates a random number.
   * @method Random
   * @param  {number} min Minimum of the random number.
   * @param  {number} max Maximum of the random number.
   * @return {number}     Random number between the minimum and maximum value.
   */
  Random(min, max) {
    if (arguments.length === 2) {
      return this.Map(Math.random(), 0, 1, min, max);
    } else {
      return Math.random();
    }
  },

  /**
   * Calculate the length of the hypotenuse of a right triangle
   * https://en.wikipedia.org/wiki/Hypot
   * @param  {number} xl Length of the x axis
   * @param  {number} yl Length of the y axis
   * @param  {number} zl Length of the z axis
   * @return {number}
   */
  Hypot(xl, yl, zl) {
    // Code from p5.js
    // https://github.com/processing/p5.js/blob/590950cbe5be4eb62cdcc4379ee006f60a10c34e/src/math/calculation.js#L796

    // Use the native implementation if it's available
    if (typeof Math.hypot === "function") {
      return Math.hypot.apply(null, arguments);
    }

    // Otherwise use the V8 implementation
    // https://github.com/v8/v8/blob/8cd3cf297287e581a49e487067f5cbd991b27123/src/js/math.js#L217
    const length = arguments.length,
      args = [];
    let max = 0;
    for (let i = 0; i < length; i++) {
      let n = arguments[i];
      n = +n;
      if (n === Infinity || n === -Infinity) {
        return Infinity;
      }
      n = Math.abs(n);
      if (n > max) {
        max = n;
      }
      args[i] = n;
    }

    if (max === 0) {
      max = 1;
    }
    let sum = 0,
      compensation = 0;
    for (let j = 0; j < length; j++) {
      let m = args[j] / max,
        summand = m * m - compensation,
        preliminary = sum + summand;
      compensation = preliminary - sum - summand;
      sum = preliminary;
    }
    return Math.sqrt(sum) * max;
  }
};

/**
 * Squares a number (multiplies a number by itself).
 * @param  {number} n Number to square.
 * @return {number}   Squared number.
 */
Math.sq = function(n) {
  return n * n;
};
