class System {
  constructor() {
    this._entities = [];
  }

  _GetRequiredComponents() {
    console.warn("Override this method");
    return [];
  }

  AddEntity(entity) {
    const requiredComponents = this._GetRequiredComponents(),
      hasRequiredComponents = requiredComponents.every(component =>
        entity.hasComponentClass(component.name)
      );

    if (!hasRequiredComponents) return;

    this._entities.push(entity);
  }

  RemoveEntity(entity) {
    MTDEF.Array.RemoveTarget(this._entities, entity);
  }

  _UpdateEntitie(entity) {
    console.warn("Override this method");
  }

  _ExecuteEntitie(entity) {
    console.warn("Override this method");
  }

  Start() {}

  Store() {}

  Update() {
    const max = this._entities.length;
  }

  Execute() {
    const max = this._entities.length;
    for (let i = 0; i < max; i++) this._ExecuteEntitie(this._entities[i]);
  }
}
