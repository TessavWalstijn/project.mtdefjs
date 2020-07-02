const DOM = {
  /**
   * Get html element by id.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {string} id Give the html element id.
   * @return {object} document.getElementById(id);
   */
  GetId(id) {
    return document.getElementById(id);
  },

  /**
   * Create html element by name.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {string} element Give the element name to create.
   * @return {object} document.createElement(element);
   */
  Create(element) {
    return document.createElement(element);
  }
};
