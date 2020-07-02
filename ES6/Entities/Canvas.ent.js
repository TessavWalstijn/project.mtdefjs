class Canvas extends Entity {
  constructor(id, aspectRatio) {
    super();
    this._id = id;
    this._aspect = new Aspect(aspectRatio);
    this._AddThisHTML(this._CreateThisHTML(id));
  }

  get pos() {
    return this._aspect.pos;
  }

  get size() {
    return this._aspect.size;
  }

  _CreateThisHTML(id) {
    const html = MTDEF.DOM.Create("canvas");
    html.id = id;
    return html;
  }

  _AddThisHTML(html) {
    const div = MTDEF.DOM.GetId("mtdef");
    div.appendChild(html);
    this._html = MTDEF.DOM.GetId(html.id);
  }
}
