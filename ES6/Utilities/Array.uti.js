const ARRAY = {
  /**
   * Remove an element from a collection
   * @param {array} collection
   * @param {string} target
   * @returns {*}
   */
  RemoveTarget(collection, target) {
    const index = collection.indexOf(target);
    if (index > -1) collection.splice(index, 1);
    return collection;
  }
};
