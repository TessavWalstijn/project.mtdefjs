const INPUT = {
  pressed: [],

  /**
   * Returns if a key is pressed.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} arg Give the keycode to check.
   * @return {boolean}
   */
  GetKey(arg) {
    return KeyData[arg].pressed;
  },

  /**
   * Returns if a key is pressed down.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} arg Give the keycode to check.
   * @return {boolean}
   */
  GetKeyDown(arg) {
    if (KeyData[arg].pressed && !this.pressed[arg]) {
      this.pressed[arg] = true;
      return true;
    } else if (!KeyData[arg].pressed && this.pressed[arg]) {
      this.pressed[arg] = false;
      return false;
    } else return false;
  },

  /**
   * Returns if a key is released.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {number} arg Give the keycode to check.
   * @return {boolean}
   */
  GetKeyUp(arg) {
    if (KeyData[arg].pressed && !this.pressed[arg]) {
      this.pressed[arg] = true;
      return false;
    } else if (!KeyData[arg].pressed && this.pressed[arg]) {
      this.pressed[arg] = false;
      return true;
    } else return false;
  }
};
