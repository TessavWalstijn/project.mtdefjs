class Entity {
  constructor() {
    this._components = {};
  }

  /**
   * Get the current list of components
   * @returns {object} the current list of components
   */
  get components() {
    return this._components;
  }

  AddComponent(component) {
    const className = component.constructor.name,
      componentName = MTDEF.Utilities.Casing.Camel(className);
    this._components[componentName] = component;
  }

  RemoveComponent(component) {
    const className = component.constructor.name,
      componentName = MTDEF.Utilities.Casing.Camel(className);
    delete this._components[componentName];
  }

  GetComponent(componentName) {
    return this._components[componentName];
  }

  _HasComponent(componentName) {
    return this._components[componentName] !== undefined;
  }

  HasComponentClass(className) {
    const componentName = MTDEF.Utilities.Casing.Camel(className);
    return this._HasComponent(componentName);
  }
}
