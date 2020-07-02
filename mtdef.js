var MTDEF = {
  set include(boolean) {
    this._include = boolean;
  },
  get include() {
    return this._include;
  },
  set start(boolean) {
    this._start = boolean;
  },
  get start() {
    return this._start;
  },
  set maxMode(number) {
    0 <= number <= 2
      ? (this._maxMode = number)
      : console.error("invalid number");
  },
  get maxMode() {
    return this._getMode(this._maxMode);
  },
  set runMode(number) {
    var max = this._valueMode(this.maxMode);
    0 <= number <= max
      ? (this._runMode = number)
      : (this._runMode = this.maxMode);
  },
  get runMode() {
    return this._getMode(this._runMode);
  },
  _getMode: function(value) {
    if (typeof value === "string") return value;
    else
      switch (value) {
        case 0:
          return "DIV";
        case 1:
          return "Web2D";
        case 2:
          return "WebGL";
      }
  },
  _valueMode: function(value) {
    switch (value) {
      case "DIV":
        return 0;
      case "Web2D":
        return 1;
      case "WebGL":
        return 2;
    }
  },
  set debug(boolean) {
    this._debug = boolean;
  },
  get debug() {
    return this._debug;
  },
  set jsVersion(string) {
    string.toUpperCase();
    if (~string.indexOf("ES5") || ~string.indexOf("ES6"))
      this._jsVersion = string;
  },
  get jsVersion() {
    return this._jsVersion;
  },
  requestAnimation:
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame,

  _systems: [],

  /**
   * To run mtdef.
   * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
   * @param {boolean} include Use the include function to add scripts.
   * @param {boolean} start Use the start function.
   * @param {boolean} debug Use the built in debug system.
   */
  Awake: function(include, start, debug) {
    window.requestAnimationFrame = this.requestAnimation;
    this._include = include || false;
    this._start = start || true;
    this._debug = debug || false;
    this._GetJSVersion();
    this._SetMaxMode();
    this._LoadEngine();
  },

  _Start: function() {
    this.Window.Update(0);

    const totalSys = this._systems.length;
    for (let i = 1; i < totalSys; i++) this._systems[i].Start();

    if (this._start) Start();

    window.requestAnimationFrame(this._AnimationFrame.bind(this));
  },

  _AnimationFrame: function(time) {
    this._systems[0].Store(time);

    const totalSys = this._systems.length;
    for (let i = 0; i < totalSys; i++) this._systems[i].Update();
    Update();

    for (let i = 0; i < totalSys; i++) this._systems[i].Execute();

    window.requestAnimationFrame(this._AnimationFrame.bind(this));
  },

  _GetJSVersion: function() {
    this.jsVersion = "ES6";
    try {
      eval("const foo = (x) => x++");
    } catch (e) {
      this.jsVersion = "ES5";
    }
  },

  _SetMaxMode: function() {
    this.maxMode = 0;
    if (!!window.HTMLCanvasElement) {
      var canvas = document.createElement("canvas");
      var windowWebGL = !!window.WebGLRenderingContext;
      var canvasWebGl =
        !!canvas.getContext("experimental-webgl", { antialias: false }) ||
        !!canvas.getContext("webgl", { antialias: false });

      gl = windowWebGL && canvasWebGl;
      gl ? (this.maxMode = 2) : (this.maxMode = 1);
    }
    this.runMode = 1;
  },

  // RequestModes: function() {

  // },

  _LoadEngine: function() {
    var MODE = this.runMode,
      ES = this.jsVersion;

    this.Import(
      [
        // Import utilities
        ES + "/Utilities/Array.uti.js",
        ES + "/Utilities/Casing.uti.js",

        // Import objects
        ES + "/Objects/Point.obj.js",
        ES + "/Objects/Size.obj.js",
        ES + "/Objects/Aspect.obj.js",
        ES + "/Objects/Matrix.obj.js",

        // Import handlers
        ES + "/Handlers/DOM.han.js",
        ES + "/Handlers/Math.han.js",
        ES + "/Handlers/Input/KeyCode.han.js",
        ES + "/Handlers/Input/Input.han.js",
        ES + "/Handlers/Input/InputData.han.js",

        // Import systems
        ES + "/Systems/System.sys.js",
        ES + "/Systems/Window.sys.js",
        ES + "/Systems/Canvas.sys.js",

        // Import entitys
        ES + "/Entities/Entity.ent.js",
        ES + "/Entities/Canvas.ent.js"
      ],
      "mtdef-engine",
      function() {
        MTDEF._AddUtilities();
        MTDEF._AddOperators();
        MTDEF._AddSystems();
        MTDEF._Start();
      }
    );
  },

  Import: function(sourceArray, divId, callback) {
    var div = document.createElement("div");
    div.id = divId;

    if (divId == "mtdef-engine")
      var firstScriptEl = document.getElementsByTagName("script")[0];
    else var firstScriptEl = document.getElementById("mtdef-engine");
    firstScriptEl.parentNode.insertBefore(div, firstScriptEl);

    var Loader = function(source, Next) {
      var element = document.createElement("script");

      if (source.indexOf(".js") !== -1) element.type = "text/javascript";
      if (source.indexOf("") !== -1) element.type = "x-shader/x-fragment";
      if (source.indexOf("") !== -1) element.type = "x-shader/x-vertex";

      element.type = "";
      element.src = source;
      // Do not know the async diverence so not added yet
      // element.async = true;
      element.onload = element.onreadystatechange = function() {
        element.onreadystatechange = element.onload = null;
        Next();
      };
      div.appendChild(element);
    };

    var Importer = function() {
      if (sourceArray.length != 0) {
        Loader(sourceArray.shift(), Importer);
      } else {
        callback && callback();
      }
    };
    Importer();
  },

  _AddUtilities() {
    const Utilities = {
      Array: ARRAY,
      Casing: CASING
    };

    this.Utilities = Utilities;
  },

  _AddOperators() {
    this.KeyCode = KEYCODE;
    this.Input = INPUT;
    this.Math = MATH;
    this.DOM = DOM;
  },

  _AddSystems() {
    // this.Renderer = RENDERER;
    this.Window = new Window();
    // this.Canvas = new CanvasSystem();
    // this.Debug = DEBUG;

    // this._systems.push(this.Renderer);
    this._systems.push(this.Window);
    // this._systems.push(this.Canvas);
    // this._systems.push(this.Debug);
  }
};

// keeps the script working if user do not add them
function Start() {}

function Update() {}
