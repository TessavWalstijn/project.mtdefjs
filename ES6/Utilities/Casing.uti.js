const CASING = {
  /**
   * Get the camelCased version of a string
   * @param {string} string
   * @returns {string}
   */
  Camel(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
};
